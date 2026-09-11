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
  'footer.rights': '© 2026 noxell.dev — Todos los derechos reservados.',

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
  'footer.rights': '© 2026 noxell.dev — All rights reserved.',

  // 404
  'meta.404.title': 'Page not found — noxell.dev',
  'err404.code': '404',
  'err404.title': 'This page does not exist.',
  'err404.text': 'The link may be broken or the address mistyped.',
  'err404.home': '← Back to home',
};

export const dictionaries: Record<Lang, Record<DictKey, string>> = { es, en };
