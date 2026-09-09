export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const es = {
  // meta
  'meta.home.title': 'noxell.dev — Desarrollo de software a medida',
  'meta.home.description':
    'Estudio de desarrollo de software e inteligencia artificial: web, SaaS, automatizaciones, chatbots y servidores de videojuegos. Soluciones a medida para empresas.',
  'meta.blog.title': 'Blog — noxell.dev',
  'meta.blog.description':
    'Ideas y recursos sobre desarrollo web, inteligencia artificial, Astro, SEO y productos digitales.',
  'meta.terms.title': 'Términos y Condiciones — noxell.dev',
  'meta.terms.description': 'Términos y Condiciones de noxell.dev.',
  'meta.privacy.title': 'Política de Privacidad — noxell.dev',
  'meta.privacy.description':
    'Cómo tratamos tus datos en noxell.dev: finalidades, bases jurídicas, conservación y tus derechos según el RGPD.',

  // nav
  'nav.menu': 'Menú',
  'nav.open': 'Abrir menú',
  'nav.close': 'Cerrar menú',
  'nav.skip': 'Saltar al contenido',
  'nav.services': 'Servicios',
  'nav.portfolio': 'Portfolio',
  'nav.blog': 'Blog',
  'nav.method': 'Metodología',
  'nav.contact': 'Contacto',
  'nav.cta': 'Hablemos',

  // language switch
  'lang.switch': 'Cambiar de idioma',

  // hero
  'hero.overline': 'DESARROLLO · IA · GAMING',
  'hero.title': 'Software a medida para ideas que no caben en una plantilla.',
  'hero.lead':
    'Combinamos desarrollo avanzado e inteligencia artificial para crear soluciones tecnológicas reales: del SaaS corporativo a los servidores de videojuegos.',
  'hero.cta': 'Hablemos de tu proyecto',
  'hero.secondary': 'Ver metodología',
  'hero.note': '// respondemos en menos de 24 h',

  // terminal
  'terminal.cmd': 'noxell init "tu-proyecto"',
  'terminal.line1': 'descubrimiento ············ listo',
  'terminal.line2': 'construcción ············ en curso',

  // services
  'services.overline': 'SERVICIOS',
  'services.title': 'Lo que construimos',
  'services.lead':
    'Un ecosistema de desarrollo integral, dividido en áreas clave para impulsar tu digitalización y tu rendimiento.',
  'services.web.title': 'Desarrollo Web & SaaS',
  'services.web.text':
    'Páginas modernas, plataformas a medida y software como servicio altamente escalable.',
  'services.ai.title': 'Inteligencia Artificial',
  'services.ai.text':
    'Automatizaciones complejas (n8n, flujos de trabajo) y chatbots inteligentes para ventas o soporte técnico.',
  'services.gaming.title': 'Gaming & Servidores',
  'services.gaming.text':
    'Montaje, configuración y optimización de servidores de videojuegos. Especialistas en FiveM.',
  'services.scripts.title': 'Scripts Personalizados',
  'services.scripts.text':
    'Scripts y mecánicas programadas a medida para adaptarnos a las necesidades exactas de tu proyecto.',

  // portfolio
  'portfolio.overline': 'PORTFOLIO',
  'portfolio.title': 'Proyectos que hablan por nosotros.',
  'portfolio.lead':
    'Una muestra de lo que construimos: plataformas, inteligencia artificial, servidores y scripts hechos a medida.',
  'portfolio.item1': 'SaaS corporativo',
  'portfolio.item2': 'Chatbot con IA',
  'portfolio.item3': 'Servidor FiveM',
  'portfolio.item4': 'Web a medida',

  // blog
  'blog.overline': 'BLOG',
  'blog.title': 'Ideas para construir mejor.',
  'blog.lead':
    'Notas sobre desarrollo web, inteligencia artificial, rendimiento y las decisiones que convierten una idea en un producto sólido.',
  'blog.read': 'Leer artículo',
  'blog.all': 'Ver todos los artículos',
  'blog.back': '← Volver a la web',

  // methodology
  'method.overline': 'METODOLOGÍA',
  'method.title': 'Cómo trabajamos',
  'method.lead':
    'Siete fases claras para garantizar tu transparencia y tu control total del proyecto.',
  'method.step1.title': 'Contacto inicial',
  'method.step1.text': 'Escuchamos y analizamos tu idea o necesidad.',
  'method.step2.title': 'Propuesta técnica',
  'method.step2.text': 'Hoja de ruta con tiempos estimados y presupuesto.',
  'method.step3.title': 'Planificación',
  'method.step3.text': 'Definimos los hitos y las fases estructurales del desarrollo.',
  'method.step4.title': 'Desarrollo iterativo',
  'method.step4.text': 'Construimos la solución con comunicación constante y reportes de progreso.',
  'method.step5.title': 'Revisión',
  'method.step5.text': 'Validamos los avances de forma conjunta y aplicamos los ajustes necesarios.',
  'method.step6.title': 'Entrega',
  'method.step6.text': 'Lanzamos el producto final: 100% funcional y optimizado.',
  'method.step7.title': 'Soporte continuo',
  'method.step7.text':
    'Te acompañamos tras el lanzamiento para resolver incidencias y garantizar la estabilidad.',

  // cta
  'cta.title': '¿Tienes un proyecto en mente?',
  'cta.lead':
    'Cuéntanos qué necesitas y te respondemos con una propuesta clara, sin compromiso.',
  'cta.button': 'Escríbenos',

  // footer
  'footer.tagline': 'Software, IA y gaming a medida, hechos para durar.',
  'footer.contact': 'Contacto',
  'footer.social': 'Redes',
  'footer.external': 'se abre en una pestaña nueva',
  'footer.legal': 'Legal',
  'footer.terms': 'Términos y Condiciones',
  'footer.privacy': 'Política de Privacidad',
  'footer.rights': '© 2026 noxell.dev — Todos los derechos reservados.',

  // terms page
  'terms.h1': 'Términos y Condiciones',
  'terms.updated': 'Última actualización: septiembre 2026',
  'terms.s1h': '1. Objeto y aceptación',
  'terms.s1':
    'Estas condiciones regulan el acceso, la navegación y el uso del sitio web noxell.dev (en adelante, «el sitio»), así como la contratación de los servicios que en él se ofrecen. Al utilizar el sitio o contratar nuestros servicios, aceptas estas condiciones en su totalidad. Si no estás de acuerdo, no utilices el sitio.',
  'terms.s2h': '2. Titularidad del sitio',
  'terms.s2':
    'En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE): Titular: [RAZÓN SOCIAL] · NIF: [NIF] · Domicilio: [DOMICILIO SOCIAL] · Correo electrónico: hola@noxell.dev.',
  'terms.s3h': '3. Servicios',
  'terms.s3':
    'noxell.dev ofrece servicios de desarrollo de software e inteligencia artificial: desarrollo web y SaaS, automatizaciones y chatbots, servidores de videojuegos (especialistas en FiveM) y scripts personalizados. La descripción definitiva de cada servicio, con su alcance, precio y plazos, se establece en la propuesta técnica escrita aceptada por el cliente.',
  'terms.s4h': '4. Contratación y metodología',
  'terms.s4':
    'Todo encargo se gestiona mediante nuestro proceso de siete fases: contacto inicial, propuesta técnica, planificación por hitos, desarrollo iterativo, revisión, entrega y soporte continuo. El presupuesto, el calendario y las condiciones de pago de cada proyecto quedan fijados en su propuesta técnica; cualquier modificación del alcance acordado requerirá un nuevo acuerdo.',
  'terms.s5h': '5. Obligaciones del cliente',
  'terms.s5':
    'El cliente se compromete a facilitar la información y los materiales necesarios para el desarrollo, responder a las solicitudes de revisión en unos tiempos razonables, efectuar los pagos según lo acordado y hacer un uso lícito de los entregables.',
  'terms.s6h': '6. Propiedad intelectual',
  'terms.s6':
    'Los contenidos de este sitio son titularidad de noxell.dev. Salvo pacto escrito en contrario, el código fuente desarrollado específicamente para un cliente le será cedido en propiedad una vez abonado el proyecto en su totalidad. noxell.dev reserva el derecho a reutilizar conocimientos técnicos, componentes genéricos y soluciones no específicas del cliente. Los componentes de terceros se rigen por su propia licencia.',
  'terms.s7h': '7. Confidencialidad',
  'terms.s7':
    'Ambas partes se obligan a mantener confidencialidad sobre la información y los intercambios técnicos y comerciales de los proyectos, durante la relación contractual y con posterioridad a su finalización.',
  'terms.s8h': '8. Comunidad y soporte',
  'terms.s8':
    'La comunidad de noxell.dev (Discord) y el soporte técnico se rigen por un código de conducta estricto basado en el respeto mutuo. No se tolera el spam, la publicidad no autorizada ni el contenido inapropiado (NSFW). El incumplimiento de estas normas puede suponer la suspensión o expulsión de la comunidad.',
  'terms.s9h': '9. Responsabilidad',
  'terms.s9':
    'La información de este sitio tiene carácter informativo y se ofrece «tal cual», sin garantías sobre su disponibilidad o actualización. La responsabilidad de noxell.dev frente a los servicios se limita, en todo caso, a lo previsto en la propuesta técnica correspondiente y en la legislación de consumo aplicable.',
  'terms.s10h': '10. Enlaces a terceros',
  'terms.s10':
    'Este sitio puede contener enlaces a plataformas de terceros (como GitHub, Discord o Instagram), cuyos contenidos y políticas de privacidad no controlamos ni respondemos.',
  'terms.s11h': '11. Legislación aplicable y jurisdicción',
  'terms.s11':
    'Estas condiciones se rigen por la legislación española. Para cualquier controversia con consumidores serán competentes los juzgados del domicilio del consumidor; en el resto de casos, los juzgados y tribunales de [CIUDAD].',
  'terms.s12h': '12. Modificaciones',
  'terms.s12':
    'Podremos actualizar estas condiciones publicando la versión vigente en esta página, con indicación de su fecha de actualización.',
  'terms.back': '← Volver al inicio',
  'terms.cross': 'Consulta también la Política de Privacidad.',

  // privacy page
  'privacy.h1': 'Política de Privacidad',
  'privacy.updated': 'Última actualización: septiembre 2026',
  'privacy.s1h': '1. Responsable del tratamiento',
  'privacy.s1':
    'Titular: [RAZÓN SOCIAL] · NIF: [NIF] · Domicilio: [DOMICILIO SOCIAL] · Correo electrónico de contacto: hola@noxell.dev.',
  'privacy.s2h': '2. Datos que tratamos y su origen',
  'privacy.s2':
    'Tratamos únicamente los datos que nos facilitas de forma voluntaria: tu nombre y dirección de correo electrónico cuando nos escribes, y el contenido de tus mensajes, tickets o conversaciones en nuestros canales oficiales (incluido Discord). No obtenemos datos de terceros ni utilizamos rastreadores.',
  'privacy.s3h': '3. Finalidades y bases jurídicas',
  'privacy.s3':
    'Atender tus consultas y elaborar presupuestos (consentimiento y medidas precontractuales, art. 6.1.a y 6.1.b RGPD); ejecutar los contratos de desarrollo (art. 6.1.b RGPD); gestionar la comunidad y el soporte (art. 6.1.b y 6.1.f RGPD); y cumplir nuestras obligaciones legales, contables y fiscales (art. 6.1.c RGPD).',
  'privacy.s4h': '4. Plazo de conservación',
  'privacy.s4':
    'Conservamos tus datos mientras dure la relación contigo y, con posterioridad, únicamente durante los plazos exigidos por la legislación fiscal y mercantil. Las consultas comerciales que no derivan en contrato se eliminan a los 12 meses.',
  'privacy.s5h': '5. Destinatarios y encargados',
  'privacy.s5':
    'No cedemos tus datos a terceros salvo obligación legal. Determinados proveedores tratan datos como encargados (alojamiento web, correo electrónico). Si participas en nuestra comunidad de Discord, Discord Inc. tratará tus datos como responsable de su propia plataforma; consulta su política de privacidad.',
  'privacy.s6h': '6. Tus derechos',
  'privacy.s6':
    'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a hola@noxell.dev con identificación suficiente. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).',
  'privacy.s7h': '7. Cookies y almacenamiento local',
  'privacy.s7':
    'Este sitio no utiliza cookies propias ni de terceros. Únicamente empleamos almacenamiento local (localStorage) para recordar tu preferencia de idioma: no es un dato identificativo y no requiere consentimiento.',
  'privacy.s8h': '8. Menores de edad',
  'privacy.s8':
    'El sitio no está dirigido a menores de 14 años. No tratamos datos de menores sin el consentimiento de sus tutores legales.',
  'privacy.s9h': '9. Seguridad',
  'privacy.s9':
    'Aplicamos medidas técnicas y organizativas proporcionadas para proteger tus datos contra pérdida, uso indebido o acceso no autorizado.',
  'privacy.s10h': '10. Actualizaciones',
  'privacy.s10':
    'Podemos actualizar esta política publicando la versión vigente en esta página, con indicación de su fecha de actualización.',
  'privacy.back': '← Volver al inicio',
  'privacy.cross': 'Consulta también los Términos y Condiciones.',

  // 404
  'meta.404.title': 'Página no encontrada — noxell.dev',
  'err404.code': '404',
  'err404.title': 'Esta página no existe.',
  'err404.text': 'El enlace puede estar roto o la dirección mal escrita.',
  'err404.home': '← Volver al inicio',
} as const;

export type DictKey = keyof typeof es;

const en: Record<DictKey, string> = {
  // meta
  'meta.home.title': 'noxell.dev — Custom software development',
  'meta.home.description':
    'A software and AI development studio: web, SaaS, automations, chatbots and game servers. Custom solutions for companies.',
  'meta.blog.title': 'Blog — noxell.dev',
  'meta.blog.description':
    'Ideas and resources about web development, artificial intelligence, Astro, SEO and digital products.',
  'meta.terms.title': 'Terms & Conditions — noxell.dev',
  'meta.terms.description': 'Terms & Conditions of noxell.dev.',
  'meta.privacy.title': 'Privacy Policy — noxell.dev',
  'meta.privacy.description':
    'How we handle your data at noxell.dev: purposes, legal bases, retention and your rights under the GDPR.',

  // nav
  'nav.menu': 'Menu',
  'nav.open': 'Open menu',
  'nav.close': 'Close menu',
  'nav.skip': 'Skip to content',
  'nav.services': 'Services',
  'nav.portfolio': 'Portfolio',
  'nav.blog': 'Blog',
  'nav.method': 'Methodology',
  'nav.contact': 'Contact',
  'nav.cta': "Let's talk",

  // language switch
  'lang.switch': 'Switch language',

  // hero
  'hero.overline': 'SOFTWARE · AI · GAMING',
  'hero.title': "Custom software for ideas that don't fit a template.",
  'hero.lead':
    'We combine advanced development and artificial intelligence to build real technology: from corporate SaaS to game servers.',
  'hero.cta': 'Start your project',
  'hero.secondary': 'See how we work',
  'hero.note': '// we reply within 24 h',

  // terminal
  'terminal.cmd': 'noxell init "your-project"',
  'terminal.line1': 'discovery ················· done',
  'terminal.line2': 'building ················ in progress',

  // services
  'services.overline': 'SERVICES',
  'services.title': 'What we build',
  'services.lead':
    'A complete development ecosystem, split into key areas to boost your digitalization and performance.',
  'services.web.title': 'Web & SaaS Development',
  'services.web.text':
    'Modern websites, custom platforms and highly scalable software as a service.',
  'services.ai.title': 'Artificial Intelligence',
  'services.ai.text':
    'Complex automations (n8n, workflows) and smart chatbots for sales or technical support.',
  'services.gaming.title': 'Gaming & Servers',
  'services.gaming.text':
    'Setup, configuration and optimization of game servers. FiveM specialists.',
  'services.scripts.title': 'Custom Scripts',
  'services.scripts.text':
    'Custom-coded scripts and mechanics adapted to the exact needs of your project.',

  // portfolio
  'portfolio.overline': 'PORTFOLIO',
  'portfolio.title': 'Work that speaks for itself.',
  'portfolio.lead':
    'A sample of what we build: platforms, artificial intelligence, servers and custom-made scripts.',
  'portfolio.item1': 'Corporate SaaS',
  'portfolio.item2': 'AI chatbot',
  'portfolio.item3': 'FiveM server',
  'portfolio.item4': 'Custom website',

  // blog
  'blog.overline': 'BLOG',
  'blog.title': 'Ideas for building better.',
  'blog.lead':
    'Notes on web development, artificial intelligence, performance and the decisions that turn an idea into a solid product.',
  'blog.read': 'Read article',
  'blog.all': 'See all articles',
  'blog.back': '← Back to the website',

  // methodology
  'method.overline': 'METHODOLOGY',
  'method.title': 'How we work',
  'method.lead':
    'Seven clear phases to guarantee your transparency and full control of the project.',
  'method.step1.title': 'Initial contact',
  'method.step1.text': 'We listen and analyze your idea or need.',
  'method.step2.title': 'Technical proposal',
  'method.step2.text': 'A roadmap with estimated timelines and budget.',
  'method.step3.title': 'Planning',
  'method.step3.text': 'We define the milestones and structural phases of development.',
  'method.step4.title': 'Iterative build',
  'method.step4.text': 'We build with constant communication and progress reports.',
  'method.step5.title': 'Review',
  'method.step5.text': 'We validate progress together and apply the necessary adjustments.',
  'method.step6.title': 'Delivery',
  'method.step6.text': 'We launch the final product: 100% functional and optimized.',
  'method.step7.title': 'Ongoing support',
  'method.step7.text':
    'We stay with you after launch to fix issues and keep everything stable.',

  // cta
  'cta.title': 'Have a project in mind?',
  'cta.lead':
    "Tell us what you need and we'll get back to you with a clear proposal. No strings attached.",
  'cta.button': 'Write to us',

  // footer
  'footer.tagline': 'Custom software, AI and gaming, built to last.',
  'footer.contact': 'Contact',
  'footer.social': 'Social',
  'footer.external': 'opens in a new tab',
  'footer.legal': 'Legal',
  'footer.terms': 'Terms & Conditions',
  'footer.privacy': 'Privacy Policy',
  'footer.rights': '© 2026 noxell.dev — All rights reserved.',

  // terms page
  'terms.h1': 'Terms & Conditions',
  'terms.updated': 'Last updated: September 2026',
  'terms.s1h': '1. Purpose and acceptance',
  'terms.s1':
    'These terms govern access to, browsing of and use of the noxell.dev website (the “site”), as well as the engagement of the services offered through it. By using the site or hiring our services you accept these terms in full. If you do not agree, please do not use the site.',
  'terms.s2h': '2. Site ownership',
  'terms.s2':
    'In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE): Owner: [COMPANY NAME] · Tax ID (NIF): [NIF] · Registered address: [REGISTERED ADDRESS] · Email: hola@noxell.dev.',
  'terms.s3h': '3. Services',
  'terms.s3':
    'noxell.dev provides software and AI development services: web and SaaS development, automations and chatbots, game servers (FiveM specialists) and custom scripts. The definitive description of each service — scope, price and timelines — is set out in the written technical proposal accepted by the client.',
  'terms.s4h': '4. Engagement and methodology',
  'terms.s4':
    'Every engagement follows our seven-phase process: initial contact, technical proposal, milestone planning, iterative build, review, delivery and ongoing support. Budget, schedule and payment terms are fixed in each project’s technical proposal; any change to the agreed scope requires a new agreement.',
  'terms.s5h': '5. Client obligations',
  'terms.s5':
    'The client agrees to provide the information and materials needed for development, respond to review requests within reasonable times, make payments as agreed and use the deliverables lawfully.',
  'terms.s6h': '6. Intellectual property',
  'terms.s6':
    'The contents of this site belong to noxell.dev. Unless otherwise agreed in writing, source code developed specifically for a client is transferred to their ownership once the project has been paid in full. noxell.dev reserves the right to reuse technical know-how, generic components and solutions that are not client-specific. Third-party components are governed by their own licenses.',
  'terms.s7h': '7. Confidentiality',
  'terms.s7':
    'Both parties agree to keep confidential the information and the technical and commercial exchanges of the projects, during the engagement and after it ends.',
  'terms.s8h': '8. Community and support',
  'terms.s8':
    'The noxell.dev community (Discord) and technical support are governed by a strict code of conduct based on mutual respect. Spam, unauthorized advertising and inappropriate (NSFW) content are not tolerated. Breaking these rules may lead to suspension or removal from the community.',
  'terms.s9h': '9. Liability',
  'terms.s9':
    'The information on this site is provided for informational purposes “as is”, with no warranty as to availability or accuracy. noxell.dev’s liability for its services is limited to what is set out in the corresponding technical proposal and applicable consumer law.',
  'terms.s10h': '10. Third-party links',
  'terms.s10':
    'This site may contain links to third-party platforms (such as GitHub, Discord or Instagram) whose content and privacy policies we neither control nor are responsible for.',
  'terms.s11h': '11. Governing law and jurisdiction',
  'terms.s11':
    'These terms are governed by Spanish law. For disputes involving consumers, the courts of the consumer’s domicile shall have jurisdiction; in any other case, the courts of [CITY].',
  'terms.s12h': '12. Changes',
  'terms.s12':
    'We may update these terms by publishing the current version on this page, along with its update date.',
  'terms.back': '← Back to home',
  'terms.cross': 'See also our Privacy Policy.',

  // privacy page
  'privacy.h1': 'Privacy Policy',
  'privacy.updated': 'Last updated: September 2026',
  'privacy.s1h': '1. Data controller',
  'privacy.s1':
    'Owner: [COMPANY NAME] · Tax ID (NIF): [NIF] · Registered address: [REGISTERED ADDRESS] · Contact email: hola@noxell.dev.',
  'privacy.s2h': '2. Data we process and its source',
  'privacy.s2':
    'We only process the data you voluntarily provide: your name and email address when you write to us, and the content of your messages, tickets or conversations in our official channels (including Discord). We do not obtain data from third parties nor use trackers.',
  'privacy.s3h': '3. Purposes and legal bases',
  'privacy.s3':
    'Answering your enquiries and preparing quotes (consent and pre-contractual measures, Art. 6.1.a and 6.1.b GDPR); executing development contracts (Art. 6.1.b GDPR); running the community and support (Art. 6.1.b and 6.1.f GDPR); and complying with legal, accounting and tax obligations (Art. 6.1.c GDPR).',
  'privacy.s4h': '4. Retention period',
  'privacy.s4':
    'We keep your data for as long as our relationship lasts and, afterwards, only for the periods required by tax and commercial legislation. Commercial enquiries that do not lead to a contract are deleted after 12 months.',
  'privacy.s5h': '5. Recipients and processors',
  'privacy.s5':
    'We do not disclose your data to third parties except when legally required. Certain providers process data as processors (web hosting, email). If you join our Discord community, Discord Inc. processes your data as controller of its own platform; please read their privacy policy.',
  'privacy.s6h': '6. Your rights',
  'privacy.s6':
    'You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to hola@noxell.dev with sufficient identification. You may also file a claim with the Spanish Data Protection Agency (www.aepd.es).',
  'privacy.s7h': '7. Cookies and local storage',
  'privacy.s7':
    'This site does not use first-party or third-party cookies. We only use local storage (localStorage) to remember your language preference: it is not identifying data and does not require consent.',
  'privacy.s8h': '8. Minors',
  'privacy.s8':
    'The site is not aimed at children under 14. We do not process children’s data without the consent of their legal guardians.',
  'privacy.s9h': '9. Security',
  'privacy.s9':
    'We apply proportionate technical and organisational measures to protect your data against loss, misuse or unauthorised access.',
  'privacy.s10h': '10. Changes',
  'privacy.s10':
    'We may update this policy by publishing the current version on this page, along with its update date.',
  'privacy.back': '← Back to home',
  'privacy.cross': 'See also our Terms & Conditions.',

  // 404
  'meta.404.title': 'Page not found — noxell.dev',
  'err404.code': '404',
  'err404.title': 'This page does not exist.',
  'err404.text': 'The link may be broken or the address mistyped.',
  'err404.home': '← Back to home',
};

export const dictionaries: Record<Lang, Record<DictKey, string>> = { es, en };
