---
title: "¿Por qué tu web se ve mal en el móvil aunque en el ordenador se vea bien?"
description: "Tu web se ve perfecta en el ordenador pero rota en el móvil: textos diminutos, botones imposibles de pulsar y scroll horizontal. Te explicamos las causas y cómo arreglarlas."
date: 2026-11-09
locale: "es"
tags: ["diseño responsive", "móvil", "experiencia de usuario"]
draft: false
---

Abres tu web en el ordenador y se ve perfecta. La abres en el móvil y es otra historia: el texto es diminuto, las imágenes se salen de la pantalla, el menú no se puede usar y hay que desplazarse hacia los lados para leer. No eres el único: es uno de los problemas más comunes de las páginas web, y también uno de los más costosos, porque la mayor parte del tráfico web actual llega desde el móvil.

La causa casi nunca es una sola. Normalmente es una combinación de decisiones de diseño que en una pantalla grande pasan desapercibidas y en una pequeña se vuelven un desastre. Vamos a repasarlas una a una, de la más común a la más sutil.

## 1. La web no tiene diseño responsive (o lo tiene a medias)

Un diseño responsive es el que reorganiza la página según el tamaño de la pantalla: en el ordenador muestra las columnas lado a lado y en el móvil las apila una debajo de otra, el menú se convierte en un botón y los textos se ajustan para leerse sin zoom. Si tu web se hizo pensando solo en el ordenador, en el móvil el navegador no sabe cómo reordenar nada: o encoge toda la página hasta que el texto es ilegible, o muestra la versión de escritorio tal cual, obligando a desplazarla hacia los lados.

**Cómo solucionarlo:** el diseño responsive no es un extra, es la base. Si tu web se hizo hace años o con una herramienta que no generaba CSS responsive, la solución pasa por rediseñarla con un enfoque mobile-first: primero se diseña para móvil y luego se amplía para pantallas grandes. Es un cambio de calado, pero es el único que resuelve el problema de raíz.

## 2. Falta la etiqueta viewport

Es un detalle técnico pequeño con un efecto enorme. La etiqueta `viewport` le dice al navegador del móvil cómo debe interpretar el ancho de la página. Sin ella, el navegador simula un ancho de escritorio (unos 980 píxeles) y luego reduce toda la página para que quepa en la pantalla: el resultado es esa web en miniatura que obliga a hacer zoom con los dedos para leer cualquier cosa.

**Cómo solucionarlo:** la etiqueta correcta es `<meta name="viewport" content="width=device-width, initial-scale=1">`. Si tu web no la tiene, añadirla es el arreglo más rápido y con mayor impacto que existe. Es también el primer punto que debería revisar quien te haya hecho la web.

## 3. Anchos fijos en el diseño

Un contenedor con un ancho fijo de 1200 píxeles se ve bien en un monitor, pero en un móvil de 390 píxeles de ancho se sale de la pantalla y genera el temido desplazamiento horizontal. Lo mismo pasa con imágenes con ancho fijo, tablas que no se adaptan y banners pensados para una pantalla panorámica.

**Cómo solucionarlo:** los anchos deben ser flexibles: porcentajes y `max-width` en lugar de píxeles fijos, e imágenes con `max-width: 100%` para que nunca superen el ancho de su contenedor. Es una regla sencilla, pero es la que más webs rompe cuando no se cumple.

## 4. El texto es demasiado pequeño y los botones, imposibles de pulsar

En el ordenador, un texto gris claro de tamaño pequeño puede parecer elegante. En el móvil, a pleno sol, no se lee. Y un botón que en el escritorio se pulsa con el ratón, en el móvil hay que tocarlo con la yema del dedo: si es pequeño o está pegado a otro enlace, el usuario pulsa el botón equivocado una y otra vez.

**Cómo solucionarlo:** el texto de los párrafos debería ser de al menos 16 píxeles en móvil y con un contraste claro entre letra y fondo. Las zonas táctiles (botones y enlaces) deberían medir alrededor de 44–48 píxeles, con espacio suficiente entre ellas. Son las cifras que recomiendan las guías de diseño de Apple y Google, y la diferencia se nota en el primer uso.

## 5. El menú no funciona en pantallas pequeñas

El menú de navegación es uno de los elementos que más se rompe al pasar a móvil: opciones que se cortan, submenús que no se abren al tocarlos, un menú hamburguesa que no responde o un encabezado fijo que tapa el contenido. Si el visitante no puede navegar, no importa lo bonita que sea la página: se va.

**Cómo solucionarlo:** en móvil el menú debe ser una cosa: un botón claro que abra una lista completa y fácil de tocar, con las opciones más importantes (contacto, servicios, ubicación) siempre a mano. Prueba el menú en un móvil real, no solo estrechando la ventana del navegador: los gestos táctiles se comportan distinto que el ratón.

## 6. Las imágenes no están adaptadas al móvil

Una foto de cabecera de 1400 píxeles de ancho se ve bien en el escritorio, pero en el móvil el navegador descarga el archivo completo aunque solo muestre una versión reducida. Eso ralentiza la carga y, en algunos diseños, la imagen se desborda y rompe el resto de la página. Además, las imágenes con texto incrustado (como un banner con el teléfono escrito dentro) se vuelven ilegibles al reducirse.

**Cómo solucionarlo:** sirve versiones de cada imagen adaptadas a cada tamaño de pantalla (el atributo `srcset` de HTML existe para esto) y comprime las fotos antes de subirlas. Y nunca pongas texto importante dentro de una imagen: debe ser texto real, que se pueda leer y ampliar en cualquier pantalla.

## 7. Ventanas emergentes que tapan toda la pantalla

Un pop-up de newsletter, un aviso de cookies enorme, un chat que se abre solo y una promoción: en el escritorio son una molestia pequeña. En el móvil tapan la pantalla completa, y muchas veces el botón para cerrarlas queda fuera de la vista o es demasiado pequeño para pulsarlo. El visitante no puede ver tu web ni aunque quiera.

**Cómo solucionarlo:** si usas ventanas emergentes, que sea una sola, que no aparezca en los primeros segundos y que se pueda cerrar con un botón grande y visible. En móvil, menos es más: cada elemento que tapa contenido es un visitante que se va.

## 8. Se probó solo en el ordenador (o solo estrechando el navegador)

Este es el error de fondo detrás de casi todos los anteriores. Muchas webs se revisan estrechando la ventana del navegador en el escritorio, y eso no es lo mismo que un móvil real: cambian la densidad de píxeles, la barra del navegador, el comportamiento táctil y la velocidad de conexión. Una web que "pasa" la prueba del navegador estrechado puede seguir rota en un teléfono de verdad.

**Cómo solucionarlo:** revisa tu web en un móvil real, con calma: lee un párrafo completo sin hacer zoom, pulsa cada botón, abre el menú, rellena el formulario de contacto y comprueba que no aparece desplazamiento horizontal. Y pásala por PageSpeed Insights en modo móvil: además de la velocidad, te señala los problemas de usabilidad que Google detecta en cada página.

## Por qué importa: Google te juzga por la versión móvil

Desde 2019 Google usa la indexación mobile-first: para decidir cómo posicionar tu web, mira principalmente su versión para móvil, no la de escritorio. Si en el móvil faltan textos, se ven mal o cargan lento, eso pesa en cómo te encuentran, también para quien busca desde el ordenador. Y si el visitante entra y se va en segundos porque no puede leer nada, Google interpreta ese abandono como una señal negativa más.

En otras palabras: una web que se ve mal en el móvil no es solo un problema estético. Es un problema de visibilidad y de clientes perdidos, todos los días, sin que te enteres.

## Cómo diagnosticarlo en 10 minutos

Si no sabes por dónde empezar, sigue este orden:

1. Abre tu web en tu propio móvil y anota todo lo que falle: texto pequeño, scroll horizontal, botones difíciles de pulsar, menú que no funciona.
2. Comprueba si existe la etiqueta viewport y si los anchos son flexibles: es lo primero que debe revisar quien te hizo la web.
3. Pasa la web por PageSpeed Insights en modo móvil y anota los avisos de usabilidad y velocidad.
4. Prioriza por impacto: primero viewport y anchos fijos, luego texto y botones, y por último las imágenes y los pop-ups.

La mayoría de las webs que se ven mal en el móvil no necesitan empezar de cero: necesitan que alguien revise estos puntos con calma y los arregle en orden. Y si la web se hizo sin diseño responsive desde el principio, entonces sí: toca rediseñarla, esta vez empezando por el móvil.
