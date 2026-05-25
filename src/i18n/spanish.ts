import type { LanguageTranslations } from './types';

export const spn: LanguageTranslations = {
  title: "NIGELL JAMA | Portafolio Técnico",
  nav_projects: "Proyectos",
  nav_skills: "Habilidades",
  nav_contact: "Contacto",
  resume: "Currículum",
  hero_label: "Ingeniero Full-Stack",
  hero_title_1: "Construyendo ",
  hero_title_highlight: "Arquitecturas Digitales",
  hero_title_2: " Robustas",
  hero_subtitle: "Diseñando sistemas escalables con precisión técnica. Especializado en microservicios distribuidos, APIs de baja latencia y frontends de alto rendimiento que definen los estándares de software moderno.",
  hero_btn_view_projects: "Ver Proyectos",
  hero_btn_contact: "Ponte en Contacto",
  skills_title: "Stack Tecnológico",
  skills_subtitle: "Una cuidada selección de herramientas utilizadas para diseñar soluciones empresariales de alta disponibilidad.",
  skills_categories: [
    {
      title: "Lenguajes",
      items: ["Python", "TypeScript", "SQL"]
    },
    {
      title: "Backend",
      items: ["Django (DRF)", "FastAPI"]
    },
    {
      title: "Frontend",
      items: ["Next.js", "React", "React Native", "Tailwind CSS"]
    },
    {
      title: "Bases de Datos",
      items: ["PostgreSQL", "MSSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Herramientas y Entorno",
      items: ["Linux", "Docker", "Git", "Neovim"]
    },
    {
      title: "Cloud",
      items: ["Vercel", "AWS"]
    }
  ],
  projects_title: "Arquitecturas Destacadas",
  projects_subtitle: "Sistemas del mundo real diseñados para escala, confiabilidad y precisión.",
  projects_view_code: "Ver Código",
  projects_demo: "Demo en Vivo",
  projects_list: [
    {
      category: 'Motor de Comercio Electrónico',
      title: 'Núcleo Transaccional Escalable',
      description: 'Un motor de comercio headless construido con Next.js, Stripe y Redis. Diseñado para manejar más de 10k pagos concurrentes con latencia inferior a 100ms.',
      tags: ['Next.js', 'Redis', 'Stripe'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDly6HSRNX1J2m-yZIBCKinv8_QWKs5mYOaLuIsaeBpSMOV39vPRcFJX6oBWgsOIpLQq29ySEqrSyVMvCwcmwGGJv4mV1O1lwGUhqDgtT8fcQ4LuHQkzT4_mMDMzshjCQ-chWwRJgW9EKOuuoZa4Gn9L4GqljlBBojKDQ3f0pe7SiggUuzre3WfMi9gLFtxIz5XJBfurU3h3hwHDs7pqiA6e2gz8_UQraj7mM18UTfvehTBzyGlgB6iNDfr5zjX0K0VCbxSjx9Ti-Ls',
      codeLink: '#',
      demoLink: '#'
    },
    {
      category: 'Panel de Análisis en Tiempo Real',
      title: 'Información Basada en Eventos',
      description: 'Plataforma de visualización en tiempo real que procesa datos de telemetría de sensores IoT a través de Apache Kafka y WebSockets.',
      tags: ['Kafka', 'WebSockets', 'D3.js'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmGPEAr1OTW6DgWFeOR97tR8iS3qVg8Icz4qy5WrOrqJvGPUj9jOixBmdDXrruDd9Q16pipfKOtxu87yE9DnGl0YMG2ohpTIRMMZ_fuCA_DmHS0rMI8YSvMaDGfpyQIgu4BJqaD-M4Ez2I6e6NwmxdKtNLj2rgqBis-AzRIEbfMU99RPRwK6Vf_dnE_SZAsQtM_9ggu0HNPoUKaVHIizJVvHhmgvLePiZQogjtuys62gz8rTryc4rYreKupwgdd1d2wxaL1cNJ7u_-',
      codeLink: '#',
      demoLink: '#'
    },
    {
      category: 'API de Grafo Social',
      title: 'Infraestructura Relacional',
      description: 'API GraphQL de alto rendimiento construida sobre Neo4j para gestionar relaciones complejas de usuarios y motores de recomendación.',
      tags: ['GraphQL', 'Neo4j', 'Node.js'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpmMEpyvslfDGRoN0gDm-IOmlwA2tT0iT3Q9FaFWL6taU62QJCztvKYBnacDLT007ev_IusyhWdBg5hqACQfbX0MSwJW3a43viyIVgKKXflRD-WNIyblUeJ98usRGfB1hykol-YwtWhhwJ3Y9TL08dNs7fIIoSPuOngh5yiZYYi1w0J2Sxh3URFG42un2Iq2GXeoT0wsvQNAnaAT3QS4mZ2DUEahq3fgqio4QZ9WlkoR9gt6XjRxyyoaN-LB0GKVZhjD3K8Mep0piw',
      codeLink: '#',
      demoLink: '#'
    }
  ],
  contact_title: "Iniciar Conexión",
  contact_subtitle: "¿Listo para discutir tu próximo desafío técnico? Estoy disponible para consultoría estratégica y revisión de arquitectura.",
  contact_location: "Ecuador / Remoto",
  footer_text: "Portafolio Técnico"
};
