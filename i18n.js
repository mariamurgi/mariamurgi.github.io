// Diccionario de traducciones: cada clave tiene su versión en español (es) e inglés (en)
const traducciones = {
  "nav-sobre":        { es: "Sobre mí",   en: "About me" },
  "nav-experiencia":  { es: "Experiencia", en: "Experience" },
  "nav-formacion":    { es: "Formación",  en: "Education" },
  "nav-proyectos":    { es: "Proyectos",  en: "Projects" },
  "nav-galeria":      { es: "Galería",    en: "Gallery" },
  "nav-contacto":     { es: "Contacto",   en: "Contact" },

  "hero-tag": { es: "Junior Project Manager · Comunicación &amp; Digital", en: "Junior Project Manager · Communication &amp; Digital" },

  "sobre-titulo": { es: "¿Quién soy?", en: "Who am I?" },
  "sobre-p1": {
    es: "Junior Project Manager con base en comunicación y marketing, y ahora también en tecnología. He trabajado en una división de emprendimiento municipal coordinando proyectos, agencias y proveedores externos, y generando contenidos y campañas, con conocimientos de SEO y SEM aplicados en un proyecto propio y en mi Trabajo de Fin de Grado.",
    en: "Junior Project Manager with a background in communication and marketing, and now in technology too. I have worked in a municipal entrepreneurship division coordinating projects, agencies and external vendors, and creating content and campaigns, with SEO and SEM knowledge applied to a personal project and my final degree project."
  },
  "sobre-p2": {
    es: "He liderado iniciativas multidisciplinares, gestionado toolkits de contenido digital y coordinado eventos de innovación para el Ayuntamiento de Oporto. También he creado la nueva página web de ScaleUp Porto, pensando sus nuevas funcionalidades, su formato y su diseño, y desarrollando fuertes competencias en gestión de stakeholders, planificación y ejecución.",
    en: "I have led cross-functional initiatives, managed digital content toolkits, and coordinated innovation events for the Porto City Council. I also created the new ScaleUp Porto website, designing its new features, format and design, and developing strong skills in stakeholder management, planning, and execution."
  },
  "sobre-p3": {
    es: "Bilingüe en euskera y español, con inglés avanzado (C1) y alta capacidad de adaptación. Estoy cursando el Máster en Desarrollo Full Stack (Angular, Node.js) para unir gestión, comunicación y producto digital en un mismo perfil, y esta web es parte de esa práctica.",
    en: "Bilingual in Basque and Spanish, with advanced English (C1) and strong adaptability. I am studying a Master's in Full Stack Development (Angular, Node.js) to bring management, communication and digital product together in one profile, and this website is part of that practice."
  },

  "experiencia-titulo": { es: "Experiencia", en: "Experience" },
  "exp1-fecha": { es: "Ene 2026 – Jul 2026", en: "Jan 2026 – Jul 2026" },
  "exp1-rol": {
    es: "Junior Project Manager — Comunicación y Marketing · División de Emprendimiento, Ayuntamiento de Oporto",
    en: "Junior Project Manager — Communication and Marketing · Entrepreneurship Division, Porto City Council"
  },
  "exp1-li0": { es: "Creación de una nueva página web para ScaleUp Porto, definiendo las nuevas funcionalidades, el formato y el diseño.", en: "Creation of a new website for ScaleUp Porto, defining its new features, format and design." },
  "exp1-li1": { es: "Generación y redacción de contenidos para newsletter, blog y presentaciones institucionales.", en: "Content creation and writing for newsletters, blog posts, and institutional presentations." },
  "exp1-li2": { es: "Coordinación con agencias externas en la revisión y ajuste de contenidos e identidad visual.", en: "Coordination with external agencies on content review and visual identity adjustments." },
  "exp1-li3": { es: "Diseño e impulso de una estrategia de marca (imagen, propuesta de valor, mensajes) por iniciativa propia.", en: "Design and rollout of a brand strategy (image, value proposition, messaging) on my own initiative." },
  "exp1-li4": { es: "Elaboración de un toolkit editorial de inversión, incluyendo investigación y redacción estructurada.", en: "Development of an investment editorial toolkit, including research and structured writing." },
  "exp1-li5": { es: "Representación de ScaleUp Porto en ferias de empleo, gestionando el stand y la relación con candidatos.", en: "Representing ScaleUp Porto at career fairs, managing the booth and candidate relations." },
  "exp1-li6": { es: "Seguimiento y análisis de convocatorias y oportunidades de financiación para startups.", en: "Monitoring and analysis of calls and funding opportunities for startups." },

  "exp2-rol": { es: "Cofundadora y Responsable de Gestión · Mondragon Team Academy", en: "Co-founder & Business Manager · Mondragon Team Academy" },
  "exp2-li1": { es: "Cofundación y gestión de dos empresas reales con clientes activos e ingresos en marcha.", en: "Co-founded and managed two real companies with active clients and revenue." },
  "exp2-li2": { es: "Gestión del posicionamiento SEO de la web de la empresa y planificación de proyectos con clientes.", en: "Managed the company website's SEO positioning and client project planning." },
  "exp2-li3": { es: "Coordinación de equipo, seguimiento de objetivos y preparación de entregables y presentaciones.", en: "Coordinated team tasks, tracked objectives, and prepared deliverables and presentations." },
  "exp2-li4": { es: "Liderazgo de la gestión financiera y de clientes en seis proyectos de startups.", en: "Led financial and client management across six startup projects." },

  "formacion-titulo": { es: "Formación &amp; Idiomas", en: "Education &amp; Languages" },
  "col-formacion": { es: "Formación", en: "Education" },
  "col-idiomas": { es: "Idiomas", en: "Languages" },
  "edu1-titulo": { es: "Máster en Desarrollo Full Stack", en: "Full Stack Development Master's Degree" },
  "edu2-titulo": { es: "Grado en LEINN", en: "LEINN Degree" },
  "edu2-escuela": { es: "Liderazgo, Emprendimiento e Innovación · Mondragon Unibertsitatea · 2020–2024", en: "Entrepreneurial Leadership and Innovation · Mondragon Unibertsitatea · 2020–2024" },
  "edu3-titulo": { es: "Bachillerato Científico", en: "High School Diploma in Science" },

  "lang-es": { es: "Español", en: "Spanish" },
  "lang-es-nivel": { es: "Nativo", en: "Native" },
  "lang-eu": { es: "Euskera", en: "Basque" },
  "lang-en": { es: "Inglés", en: "English" },
  "lang-pt": { es: "Portugués", en: "Portuguese" },
  "lang-pt-nivel": { es: "Básico", en: "Basic" },

  "proyectos-titulo": { es: "Proyectos", en: "Projects" },
  "proyectos-subtitulo": { es: "Desliza para descubrirlos todos →", en: "Scroll to discover them all →" },
  "tile-noticia-link": { es: "Leer la noticia →", en: "Read the news article →" },
  "tile-figma-link": { es: "Ver caso de estudio →", en: "View case study →" },
  "galeria-link": { es: "Ver mis fotos artísticas →", en: "See my artistic photos →" },

  "p-scaleupfigma-rol": { es: "Nueva web · Funcionalidades, formato y diseño", en: "New website · Features, format and design" },
  "tile-scaleupfigma-titulo": { es: "ScaleUp Porto<br>Nueva web", en: "ScaleUp Porto<br>New website" },
  "p-scaleupfigma-desc": {
    es: "Creación de la nueva web de ScaleUp Porto: planteamiento de las nuevas funcionalidades, del formato y del diseño en Figma, con navegación responsive, sección de eventos y noticias, y aplicación de la nueva identidad visual de marca.",
    en: "Creation of ScaleUp Porto's new website: planning its new features, format and design in Figma, with responsive navigation, an events and news section, and the new brand visual identity."
  },
  "p-scaleupfigma-skill1": { es: "UX/UI Design", en: "UX/UI Design" },
  "p-scaleupfigma-skill2": { es: "Diseño responsive", en: "Responsive design" },
  "p-scaleupfigma-skill3": { es: "Identidad visual", en: "Visual identity" },

  "p-scaleupig-rol": { es: "Social Media · Monitorización y contenido", en: "Social Media · Monitoring and content" },
  "p-scaleupig-desc": {
    es: "Seguimiento del Instagram de ScaleUp Porto, aportando ideas de contenido y colaborando en las creaciones visuales publicadas en el canal.",
    en: "Monitoring of ScaleUp Porto's Instagram, contributing content ideas and collaborating on the visual creations published on the channel."
  },
  "p-scaleupig-skill1": { es: "Social media", en: "Social media" },
  "p-scaleupig-skill2": { es: "Ideación de contenido", en: "Content ideation" },

  "p-skyjob-rol": { es: "Trabajo de Fin de Grado · Producto digital", en: "Final Degree Project · Digital product" },
  "p-skyjob-desc": {
    es: "Plataforma digital de comparación de empleo pensada para jóvenes sin experiencia previa, con una campaña de anuncios SEM y una estrategia de marketing propia para darle visibilidad al proyecto.",
    en: "Digital job-comparison platform designed for young people with no prior experience, with an SEM ad campaign and a dedicated marketing strategy to give the project visibility."
  },
  "p-skyjob-skill1": { es: "Estrategia SEM", en: "SEM strategy" },
  "p-skyjob-skill2": { es: "Marketing digital", en: "Digital marketing" },
  "p-skyjob-skill3": { es: "Diseño de producto", en: "Product design" },

  "p-suliit-rol": { es: "Communication Lead · Product design", en: "Communication Lead · Product design" },
  "p-suliit-desc": {
    es: "Proyecto creado para demostrar que un cambio significativo puede empezar con pequeñas acciones: botellas reutilizables de acero inoxidable, con diseños predefinidos y opción de personalización total.",
    en: "Project created to show that meaningful change can start with small actions: reusable stainless steel bottles, with predefined designs and full customization options."
  },
  "p-suliit-skill1": { es: "Gestión de clientes y proveedores", en: "Client and supplier management" },
  "p-suliit-skill2": { es: "Diseño de producto", en: "Product design" },
  "p-suliit-skill3": { es: "Creatividad", en: "Creativity" },

  "p-velti-rol": { es: "Project &amp; Financial Lead · Product design", en: "Project &amp; Financial Lead · Product design" },
  "p-velti-desc": {
    es: "Proyecto para promover el #buylessbuywell: pañuelos versátiles diseñados para poder llevarse de 1.000 formas distintas, como alternativa al consumo masivo.",
    en: "Project promoting #buylessbuywell: versatile scarves designed to be worn in 1,000 different ways, as an alternative to mass consumption."
  },
  "p-velti-skill1": { es: "Gestión financiera", en: "Financial management" },
  "p-velti-skill2": { es: "Diseño de producto", en: "Product design" },

  "p-natives-rol": { es: "Project Lead · Servicio educativo", en: "Project Lead · Educational service" },
  "p-natives-desc": {
    es: "Servicio para poner en práctica lo aprendido en idiomas a través de competiciones, juegos y conversaciones con hablantes nativos, frente al problema global de no practicar lo estudiado.",
    en: "A service to put language learning into practice through competitions, games and conversations with native speakers, addressing the global problem of not practicing what is studied."
  },
  "p-natives-skill1": { es: "Diseño de experiencia de usuario", en: "User experience design" },
  "p-natives-skill2": { es: "Comunicación", en: "Communication" },

  "p-tekirola-rol": { es: "Proyecto colaborativo · Transformación digital", en: "Collaborative project · Digital transformation" },
  "p-tekirola-desc": {
    es: "Estudios y soluciones digitales personalizadas para organizaciones deportivas, con el objetivo de identificar necesidades y diseñar estrategias de transformación digital para el sector.",
    en: "Studies and custom digital solutions for sports organizations, aiming to identify needs and design digital transformation strategies for the sector."
  },
  "p-tekirola-skill1": { es: "Estudios de digitalización", en: "Digitalization studies" },

  "p-ikusmin-rol": { es: "Communication Lead · Servicio cultural", en: "Communication Lead · Cultural service" },
  "p-ikusmin-desc": {
    es: "Proyecto para promover la lectura y escritura en euskera entre jóvenes, incorporando nuevas tecnologías al proceso creativo. Impacto: 16 jóvenes participantes.",
    en: "Project to promote reading and writing in Basque among young people, incorporating new technologies into the creative process. Impact: 16 young participants."
  },
  "p-ikusmin-skill1": { es: "Facilitación de sesiones", en: "Session facilitation" },

  "p-konekta-rol": { es: "Financial Lead · Servicio tecnológico", en: "Financial Lead · Technology service" },
  "p-konekta-desc": {
    es: "Proyecto para cerrar la brecha digital generacional: talleres digitales presenciales para personas mayores, impartidos por jóvenes de la Generación Z. Impacto: ~200 personas entre sus dos ediciones.",
    en: "Project to close the generational digital divide: in-person digital workshops for older adults, delivered by young Gen Z volunteers. Impact: ~200 people across both editions."
  },
  "p-konekta-skill1": { es: "Facilitación con adultos mayores", en: "Facilitating sessions with older adults" },
  "p-konekta-skill2": { es: "Prototipado", en: "Prototyping" },

  "galeria-titulo": { es: "Galería", en: "Gallery" },
  "galeria-desc": { es: "Una selección de mis fotos artísticas.", en: "A selection of my artistic photos." },

  "galeria-hint": { es: "Haz clic en una foto para verla en grande", en: "Click a photo to view it larger" },

  "hero-scroll": { es: "Desliza", en: "Scroll" },
  "mq-1": { es: "Gestión de proyectos", en: "Project management" },
  "mq-2": { es: "Comunicación y contenidos", en: "Communication & content" },
  "mq-3": { es: "Gestión de stakeholders", en: "Stakeholder management" },
  "mq-4": { es: "Coordinación de proveedores", en: "Supplier coordination" },
  "stat-1": { es: "empresas reales cofundadas", en: "real companies co-founded" },
  "stat-2": { es: "proyectos de startups · 2020–2024", en: "startup projects · 2020–2024" },
  "stat-3": { es: "personas en los talleres de Konekta-Tu", en: "people in Konekta-Tu workshops" },
  "stat-4": { es: "idiomas", en: "languages" },

  "contacto-titulo": { es: "Contacto", en: "Contact" },
  "contacto-direccion": { es: "Oñati, Gipuzkoa (España)", en: "Oñati, Gipuzkoa (Spain)" },

  "caso-back": { es: "← Volver al portfolio", en: "← Back to portfolio" },
  "caso-eyebrow": { es: "Caso de estudio · UX/UI y gestión de proyecto", en: "Case study · UX/UI and project management" },
  "caso-titulo": { es: "Nueva web de ScaleUp Porto", en: "New ScaleUp Porto website" },
  "caso-lead": { es: "De las necesidades del ecosistema a un diseño listo para construir: analicé qué necesitaba la web, definí sus funcionalidades, propuse la tecnología y diseñé la interfaz.", en: "From the ecosystem's needs to a design ready to build: I analysed what the website needed, defined its features, proposed the technology and designed the interface." },
  "caso-m1-t": { es: "Rol", en: "Role" },
  "caso-m1-v": { es: "Junior Project Manager · análisis, requisitos y diseño UX/UI", en: "Junior Project Manager · analysis, requirements and UX/UI design" },
  "caso-m2-t": { es: "Cliente", en: "Client" },
  "caso-m2-v": { es: "ScaleUp Porto · Ayuntamiento de Oporto", en: "ScaleUp Porto · Porto City Council" },
  "caso-m3-t": { es: "Herramientas", en: "Tools" },
  "caso-m3-v": { es: "v0 · Figma · documentación de requisitos", en: "v0 · Figma · requirements documentation" },
  "caso-m4-t": { es: "Año", en: "Year" },
  "caso-m4-v": { es: "2026", en: "2026" },
  "caso-ctx-t": { es: "Contexto", en: "Context" },
  "caso-ctx-p": { es: "ScaleUp Porto es la iniciativa de la división de emprendimiento del Ayuntamiento de Oporto que apoya el ecosistema de startups y scaleups de la ciudad. Necesitaba una web nueva que sirviera de referencia oficial para fundadores, inversores, enablers y público internacional.", en: "ScaleUp Porto is the Porto City Council's entrepreneurship initiative supporting the city's startup and scaleup ecosystem. It needed a new website to act as the official reference for founders, investors, enablers and international audiences." },
  "caso-ret-t": { es: "El reto", en: "The challenge" },
  "caso-ret-p": { es: "La información del ecosistema estaba fragmentada y la web debía funcionar como plataforma, no como una web corporativa. Además tenía que ser fácil de entender, crecer con el tiempo sin rediseñarse y permitir que el equipo de comunicación la actualizase sin depender de desarrolladores.", en: "The ecosystem's information was fragmented, and the site had to work as a platform rather than a corporate website. It also had to be easy to understand, grow over time without a redesign, and let the communications team update it without depending on developers." },
  "caso-pro-t": { es: "Proceso", en: "Process" },
  "caso-s1-t": { es: "Análisis de necesidades", en: "Needs analysis" },
  "caso-s1-p": { es: "Estudié qué necesitaba cada audiencia y comparé los tipos de CMS (tradicionales, headless, en la nube y generadores estáticos), con sus ventajas y límites para un contexto institucional.", en: "I studied what each audience needed and compared CMS types (traditional, headless, cloud and static generators), with their strengths and limits for an institutional context." },
  "caso-s2-t": { es: "Requisitos de la web", en: "Website requirements" },
  "caso-s2-p": { es: "Definí los objetivos y las funcionalidades clave: menú fijo con mega-menús, navegación por etapas para fundadores, toolkit modular para inversores, mapa del ecosistema, y secciones de eventos, noticias y enablers gestionadas desde el CMS. Con una home ligera que actúa de puerta de entrada.", en: "I defined the objectives and key features: a fixed header with mega-menus, stage-based navigation for founders, a modular investor toolkit, an ecosystem map, and events, news and enablers sections managed from the CMS. With a light homepage acting as a gateway." },
  "caso-s3-t": { es: "Propuesta tecnológica", en: "Technology proposal" },
  "caso-s3-p": { es: "Propuse una arquitectura desacoplada: un CMS headless para gestionar el contenido y un frontend ligero, alojados en infraestructura institucional. Comparé opciones (WordPress, Strapi, Directus) con criterios claros: control, mantenimiento, velocidad, seguridad y autonomía del equipo.", en: "I proposed a decoupled architecture: a headless CMS to manage content and a lightweight frontend, hosted on institutional infrastructure. I compared options (WordPress, Strapi, Directus) against clear criteria: control, maintenance, speed, security and team autonomy." },
  "caso-s4-t": { es: "Primer prototipo en v0", en: "First prototype in v0" },
  "caso-s4-p": { es: "Para validar la dirección rápido, generé un primer diseño de la home con v0 y lo usé para alinear al equipo antes de invertir tiempo en el diseño final.", en: "To validate the direction quickly, I generated a first homepage design with v0 and used it to align the team before investing time in the final design." },
  "caso-s5-t": { es: "Diseño final en Figma", en: "Final design in Figma" },
  "caso-s5-p": { es: "Llevé el diseño a Figma aplicando la nueva identidad visual de marca, con navegación responsive y tarjetas dinámicas para eventos y noticias.", en: "I moved the design to Figma applying the new brand identity, with responsive navigation and dynamic cards for events and news." },
  "caso-dis-t": { es: "De la idea al diseño final", en: "From idea to final design" },
  "caso-dis-p": { es: "La primera versión seguía el criterio de requisitos (azul como base y naranja para las acciones). En Figma el diseño pasó a la identidad propia de ScaleUp Porto: rojo y negro, con una imagen de la ciudad en la cabecera, más cercano a la marca.", en: "The first version followed the requirements brief (blue as the base and orange for actions). In Figma the design moved to ScaleUp Porto's own identity: red and black, with a city image in the header, closer to the brand." },
  "caso-img1": { es: "Primer prototipo (v0)", en: "First prototype (v0)" },
  "caso-img2": { es: "Diseño final (Figma)", en: "Final design (Figma)" },
  "caso-apr-t": { es: "Qué aprendí", en: "What I learned" },
  "caso-a1": { es: "A convertir necesidades de negocio en requisitos claros y decisiones técnicas.", en: "To turn business needs into clear requirements and technical decisions." },
  "caso-a2": { es: "A explicar opciones tecnológicas a perfiles no técnicos con comparativas sencillas.", en: "To explain technology options to non-technical people with simple comparisons." },
  "caso-a3": { es: "A iterar rápido: prototipo para validar y diseño final para pulir.", en: "To iterate fast: a prototype to validate and a final design to polish." },
  "caso-btn-figma": { es: "Ver el diseño en Figma →", en: "View the design in Figma →" },
  "caso-btn-v0": { es: "Ver el primer prototipo →", en: "View the first prototype →" },
  "caso-ad-t": { es: "Antes y después", en: "Before and after" },
  "caso-ad-p": { es: "A la izquierda, la web de ScaleUp Porto antes del cambio. A la derecha, el diseño que propuse. Recorre cualquiera de los dos marcos y el otro se mueve a la vez.", en: "On the left, the ScaleUp Porto website before the change. On the right, the design I proposed. Scroll either frame and the other moves along." },
  "caso-ad-antes": { es: "Antes · web actual", en: "Before · current website" },
  "caso-ad-despues": { es: "Después · mi propuesta", en: "After · my proposal" },
  "caso-ch-t": { es: "Lo que cambia", en: "What changes" },
  "caso-ch1": { es: "Un mensaje claro desde el primer momento: la cabecera explica qué es ScaleUp Porto y ofrece dos caminos, explorar el ecosistema o ir a fundadores.", en: "A clear message from the start: the header explains what ScaleUp Porto is and offers two paths, explore the ecosystem or go to founders." },
  "caso-ch2": { es: "Navegación por audiencias (fundadores, inversores y enablers) en lugar de un menú de secciones sueltas.", en: "Navigation by audience (founders, investors and enablers) instead of a menu of separate sections." },
  "caso-ch3": { es: "Eventos y noticias reunidos en un solo bloque, con etiqueta, fecha, hora y lugar a primera vista.", en: "Events and news brought together in one block, with tag, date, time and place at a glance." },
  "caso-ch4": { es: "Cifras clave y mapa del ecosistema integrados en la home, en vez de estar solo en un enlace externo.", en: "Key figures and the ecosystem map built into the homepage, instead of only behind an external link." },
  "caso-ad-hint": { es: "Desliza dentro del marco", en: "Scroll inside the frame" },
  "caso-ad-nota": { es: "El diseño usa contenido de ejemplo.", en: "The design uses sample content." }
};

function aplicarIdioma(idioma) {
  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (traducciones[clave]) {
      elemento.innerHTML = traducciones[clave][idioma];
    }
  });
  document.documentElement.lang = idioma;
  document.getElementById("lang-toggle").textContent = idioma === "es" ? "EN" : "ES";
  localStorage.setItem("idioma", idioma);
}

function cambiarIdioma() {
  const actual = document.documentElement.lang === "es" ? "en" : "es";
  aplicarIdioma(actual);
}

// Al cargar la página, usa el idioma guardado la última vez (o español por defecto)
document.addEventListener("DOMContentLoaded", () => {
  const guardado = localStorage.getItem("idioma") || "es";
  aplicarIdioma(guardado);
});