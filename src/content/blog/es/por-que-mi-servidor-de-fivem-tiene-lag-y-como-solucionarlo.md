---
title: "¿Por qué mi servidor de FiveM tiene lag y cómo puedo solucionarlo?"
description: "Coches que se teletransportan, hitch warnings y caídas de FPS: aprende a diagnosticar el lag en FiveM con resmon y el profiler y a corregirlo paso a paso."
date: 2026-10-19
locale: "es"
tags: ["FiveM", "servidor de roleplay", "optimización", "rendimiento"]
draft: false
---

Pocos problemas vacían un servidor de roleplay tan rápido como el lag. Los coches se teletransportan, las puertas tardan en abrirse, el inventario responde con retraso y la consola empieza a llenarse de avisos de *hitch*. Cuando eso pasa, la reacción habitual es culpar al hosting y pagar un servidor más grande, pero en la mayoría de los casos el hardware no es el origen: lo es un script, un recurso pesado o una configuración que nadie ha medido todavía.

Esta guía te ayuda a distinguir qué tipo de lag tienes, a localizar al culpable con las herramientas que ya trae FiveM y a aplicar las correcciones que de verdad funcionan, en orden.

## Primero: ¿qué tipo de lag tienes?

«Lag» es una palabra que agrupa problemas muy distintos, y cada uno se arregla en un sitio diferente. Antes de tocar nada, identifica cuál es el tuyo.

### Lag de servidor: le pasa a todo el mundo a la vez

Si todos los jugadores notan tirones al mismo tiempo, estéis donde estéis del mapa, el problema está en el servidor: su hilo principal no da abasto con el trabajo que le piden los scripts o la base de datos. Los síntomas típicos son el *rubber banding* (los jugadores y vehículos vuelven atrás), la desincronización entre lo que ve cada jugador y los mensajes de *server thread hitch warning* en la consola.

### Lag de cliente: solo en una zona o solo a algunos jugadores

Si los FPS caen al entrar en un barrio concreto, las texturas tardan en cargar o alguien «atraviesa» el suelo al conducir rápido, el servidor puede estar perfectamente sano. Lo que falla es el cliente: demasiados recursos visuales pesados —MLO, vehículos personalizados, ropa— saturando el PC de quien juega. La pista clave es que solo afecta a algunos jugadores o a lugares concretos del mapa.

### Lag de red: ping alto y pérdida de paquetes

Si un jugador tiene el ping disparado pero el servidor va fino para el resto, mira la conexión: distancia al hosting, pérdida de paquetes o ancho de banda saturado. Ninguna optimización de scripts arregla una mala ruta de red.

Confundir estos tres tipos es el error más caro: hay quien cambia de hosting por un problema de texturas y quien reescribe scripts por un problema de red.

## Cómo diagnosticar el lag con resmon y el profiler

En FiveM no hace falta adivinar: se mide. Dos herramientas integradas te dicen qué recurso está consumiendo el tiempo que le falta al servidor.

### resmon: el consumo de cada recurso en tiempo real

Abre la consola del cliente con F8 y escribe `resmon 1`. Verás, recurso a recurso, cuántos milisegundos de CPU consume cada script y cuánta memoria usa. La columna que importa es la de CPU en ms: el presupuesto de cada fotograma es muy pequeño, así que fracciones de milisegundo sumadas entre decenas de recursos marcan la diferencia.

Como referencia práctica, muy usada en la comunidad:

- **Menos de 0,10 ms en reposo:** recurso sano, no lo toques.
- **Entre 0,25 y 0,50 ms constantes en reposo:** merece revisión; suele esconder un bucle que trabaja más de la cuenta.
- **Más de 0,50–1,0 ms sostenidos o picos de varios milisegundos:** sospechoso principal de los tirones.

Un pico breve al abrir el móvil o el inventario es normal. El problema es el recurso que está caro *sin que pase nada*, o que pega un pico cada pocos segundos.

### El profiler del servidor: qué pasa dentro del recurso

`resmon` dice *qué* recurso pesa; el profiler dice *qué función* dentro de él. Desde la consola del servidor:

```
profiler record 500
profiler status
profiler saveJSON profile.json
```

Graba mientras un jugador reproduce la acción que provoca el tirón y abre el resultado con `profiler view` o en las herramientas de rendimiento de Chrome. Los picos altos del gráfico son los fotogramas caros: al desplegarlos verás la función exacta, que casi siempre será un bucle por fotograma, una consulta a la base de datos en el hilo principal o un evento que se dispara sin parar.

### txAdmin: ver la tendencia

txAdmin no perfila recursos sueltos, pero sus gráficas muestran la salud general del servidor a lo largo del tiempo. Sirven para detectar el patrón: ¿el lag aparece solo en hora punta?, ¿empezó el día que instalaste algo nuevo?, ¿empeora cuanto más tiempo lleva encendido el servidor? Ese contexto decide por dónde empezar.

Trabaja siempre igual: anota los tres recursos más caros, cambia **una sola cosa** y vuelve a medir tras un reinicio completo, en condiciones parecidas de jugadores.

## Las causas más comunes del lag en FiveM

### 1. Scripts mal optimizados

Es la causa número uno, con diferencia. El patrón clásico es un bucle `while true do` con `Wait(0)`: se ejecuta en cada fotograma aunque no haga falta esa precisión. Multiplica eso por veinte scripts y el hilo principal se queda sin aire. A la misma familia pertenecen el código que comprueba el estado de todos los jugadores en cada *tick* en lugar de reaccionar a eventos, las interfaces NUI que se actualizan en cada fotograma y los paquetes «todo en uno» filtrados que traen dos teléfonos, dos inventarios o dos sistemas de *target* duplicados compitiendo entre sí.

### 2. Recursos visuales demasiado pesados

Cada MLO, vehículo o pack de ropa que añades se transmite (*stream*) a los clientes. Modelos con demasiados polígonos, texturas enormes sin comprimir y ausencia de LOD —las versiones simplificadas del modelo que se muestran a distancia— provocan pérdida de texturas, caídas de FPS y tiempos de carga largos, aunque el servidor tenga CPU de sobra.

### 3. Una base de datos que trabaja en el hilo principal

Consultas en cada *tick* y por cada jugador, tablas sin índices en los campos que más se buscan —inventario, usuarios, vehículos, propiedades— o escrituras constantes por cada cambio mínimo de estado bloquean el servidor en ráfagas. Si la base de datos está además en otra máquina lejana, cada consulta suma latencia.

### 4. Hardware que no encaja con FiveM

El hilo principal del servidor de FiveM es en gran parte monohilo: manda la velocidad por núcleo, no el número de núcleos. Un VPS barato con CPU compartida y frecuencia baja se ahoga antes que una máquina modesta con núcleos rápidos, disco NVMe y RAM suficiente para que las entidades no se estén descartando constantemente. Dicho esto, el hardware solo debería mirarse *después* de optimizar: un mal bucle se come también la máquina más cara.

### 5. Configuración y entidades descontroladas

OneSync mal ajustado para tu número de jugadores, distancias de *culling* de entidades inadecuadas, cientos de vehículos y objetos abandonados que nadie limpia y sesiones de días sin reiniciar degradan el rendimiento poco a poco. No es un fallo puntual: es acumulación.

## Cómo solucionar el lag paso a paso

### Paso 1: mide antes de tocar

Entra en hora punta, abre `resmon 1`, recorre las zonas conflictivas y anota los tres recursos más caros en reposo y durante la acción que da problemas. Sin esa foto inicial, cualquier cambio es una apuesta.

### Paso 2: ataca los bucles y el trabajo por fotograma

Para cada recurso sospechoso:

- Sube los `Wait()` de los bucles que no necesitan precisión de fotograma: muchos trabajos funcionan igual de bien cada 250–1000 ms, o solo cuando el jugador está cerca.
- Sustituye la comprobación constante (*polling*) por lógica basada en eventos: que el código despierte cuando algo cambia, no que pregunte sin parar.
- Guarda en caché resultados y exportaciones en vez de recalcularlos o pedirlos dentro de bucles ajustados.
- Fusiona hilos dispersos que hacen casi lo mismo en un único bucle bien temporizado.

### Paso 3: pon la base de datos a trabajar en asíncrono

Usa `oxmysql` de forma asíncrona para que ninguna consulta bloquee el hilo principal, añade índices a las columnas de búsqueda frecuente, agrupa escrituras —guarda el estado cada cierto tiempo o al desconectar, no con cada cambio mínimo— y aloja la base de datos en la misma máquina o lo más cerca posible del servidor.

### Paso 4: aligera los recursos visuales

Comprime las texturas, exige LOD correctos en vehículos y MLO, retira los packs que no se usan y prueba cada recurso nuevo en un servidor de pruebas antes de subirlo al principal. Si el lag solo aparece en una zona, empieza por auditar lo que se transmite exactamente ahí.

### Paso 5: limpia, reinicia y ajusta la configuración

Programa una limpieza de vehículos y objetos abandonados, ajusta OneSync a tu número real de jugadores, revisa las distancias de *culling* y programa reinicios en horas valle: un reinicio diario despeja fugas de memoria y entidades acumuladas. Si subes el *tickrate*, hazlo probando y vigilando la CPU: más *ticks* dan más respuesta, pero también más carga.

### Paso 6: decide si toca mejorar el hardware

Solo cuando los scripts están limpios y el profiler ya no señala culpables, el techo es físico. Ahí sí compensa buscar CPU de alta frecuencia por núcleo, NVMe y un hosting con buena ruta de red para tu comunidad. Comprar hardware antes de medir solo traslada el problema a una factura mayor.

## Errores que mantienen el lag aunque «ya hayas optimizado»

- **Quitar recursos al azar** porque un número parecía alto un segundo, sin repetir la misma prueba en las mismas condiciones.
- **Cambiar cinco cosas a la vez** y no saber cuál funcionó, ni poder deshacer la que empeoró otra cosa.
- **Probar solo con el servidor vacío:** muchos problemas aparecen únicamente con la carga real de hora punta.
- **Dejar impresiones de depuración y recursos de desarrollo** activos en el servidor en producción.
- **No volver a medir tras el cambio**, o medir tras una recarga en caliente en lugar de un reinicio completo.

## Lista rápida de mantenimiento

- Revisa `resmon` con regularidad y tras cada recurso nuevo.
- Mantén actualizados framework, artefactos del servidor y dependencias.
- Audita y retira scripts duplicados, abandonados o sin uso.
- Comprueba índices y limpieza de la base de datos de vez en cuando.
- Vigila en txAdmin que la salud del servidor no se degrade con los días de actividad.
- Prueba todo en un entorno de pruebas antes de tocar el servidor principal.

## Conclusión

El lag en un servidor de FiveM casi nunca es mala suerte ni un misterio: es trabajo medible en el sitio equivocado. Distingue primero si tu problema es de servidor, de cliente o de red; localiza con `resmon` y el profiler los pocos recursos que se comen el tiempo; y corrige en orden —bucles, base de datos, recursos visuales, limpieza y, solo al final, hardware—. Un servidor que se mide no necesita ser el más caro para sentirse instantáneo: necesita que cada milisegundo se gaste en jugar, no en esperar.
