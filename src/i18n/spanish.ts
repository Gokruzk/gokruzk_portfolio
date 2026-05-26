import type { LanguageTranslations } from './types';

export const spn: LanguageTranslations = {
  title: "NIGELL JAMA | Portafolio Técnico",
  nav_projects: "Proyectos",
  nav_skills: "Habilidades",
  nav_contact: "Contacto",
  resume: "Currículum",
  hero_label: "Ingeniero Full-Stack",
  hero_title_1: "Construyendo ",
  hero_title_highlight: "Herramientas Digitales",
  hero_title_2: " Robustas",
  hero_subtitle: "Comprometido con el aprendizaje continuo, la eficiencia en entornos de desarrollo modernos y la entrega de soluciones funcionales y bien estructuradas",
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
      items: ["Django (DRF)", "FastAPI", "Prisma", "SQLAlchemy"]
    },
    {
      title: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS"]
    },
    {
      title: "Bases de Datos",
      items: ["PostgreSQL", "MSSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Herramientas y Entorno",
      items: ["Linux", "Docker", "Git", "Neovim", "JWT"]
    },
    {
      title: "Cloud",
      items: ["Vercel", "AWS", "GCP", "Github", "Gitlab"]
    }
  ],
  projects_title: "Proyectos Destacados",
  projects_view_code: "Ver Código",
  projects_demo: "Ver",
  projects_list: [
    {
      category: 'Plataforma ConTech',
      title: 'Payconer Centro de Construcción',
      description: 'Una plataforma robusta de tecnología de construcción (ConTech) diseñada para optimizar los flujos de trabajo de proyectos y la gestión de recursos. Construida sobre un backend de Django de alta disponibilidad junto con un frontend moderno de Next.js para manejar operaciones de campo en tiempo real y métricas con seguridad de primer nivel.',
      tags: ['Python', 'TypeScript', 'Django', 'Next.js', 'PostgreSQL', 'JWT', 'GitLab', 'Linux'],
      image: '/payconer.png',
      demoLink: 'https://www.payconer.com/'
    },
    {
      category: 'Operaciones Académicas',
      title: 'Sistema de Inventario ESPOCH',
      description: 'Un sistema seguro de gestión de inventarios diseñado y desarrollado desde cero para los departamentos universitarios de la ESPOCH. Cuenta con APIs REST de alto rendimiento, levantamiento riguroso de requerimientos con los stakeholders y bases de datos limpias para auditar eficientemente los activos institucionales.',
      tags: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'Prisma' ,'PostgreSQL', 'JWT', 'GitHub'],
      image: '/inventarioespoch.png',
      demoLink: 'https://inventariosoftware.espoch.edu.ec/'
    },
    {
      category: 'Desarrollo Full-Stack',
      title: 'Fitness Application',
      description: 'Diseñé y desarrollé una aplicación móvil full-stack para la planificación de entrenamientos y gestión de rutinas en gimnasios. Desarrollé el frontend reactivo en React Native junto con un backend de alto rendimiento en FastAPI y MySQL. Integré Amazon S3 para el almacenamiento de medios, implementé WebSockets para alertas en tiempo real entre usuarios y entrenadores, y gestioné notificaciones automatizadas por correo con GCP.',
      tags: ['Python', 'TypeScript', 'React Native', 'FastAPI', 'Prisma' ,'MySQL', 'WebSockets', 'JWT', 'AWS', 'GCP'],
      image: '/fitness.png'
    },
    {
      category: 'Ingeniería Full-Stack',
      title: 'Device Integration & Backend',
      description: 'Lideré el diseño e implementación de una aplicación multiplataforma de alto rendimiento y su backend utilizando FastAPI, Next.js y React Native. Diseñé una Arquitectura Hexagonal (Puertos y Adaptadores) para desacoplar la lógica de negocio, implementando WebSockets y Server-Sent Events (SSE) para el flujo bidireccional de datos entre dispositivos y el frontend. Apliqué patrones de diseño avanzados (Singleton, Factory, Repository) e integré GCP para autenticación segura.',
      tags: ['Python', 'TypeScript', 'FastAPI', 'React Native', 'Next.js', 'WebSockets', 'Prisma', 'PostgreSQL' ,'JWT', 'GCP'],
      image: '/device_backend.png'
    },
    {
      category: 'Desarrollo Backend',
      title: 'Photo Manager Service',
      description: 'Desarrollé un backend de gestión de fotos diseñado con flexibilidad arquitectónica. Utilizando FastAPI, Alembic y Prisma dentro de una Arquitectura Hexagonal, el sistema desacopla la lógica de negocio permitiendo cambiar de ORM sin fricciones. Implementé OAuth2 para seguridad y utilicé uv para un desarrollo rápido y reproducible.',
      tags: ['Python', 'FastAPI', 'Alembic', 'Prisma' ,'MySQL', 'PostgreSQL', 'JWT'],
      image: '/photo_manager.png',
      codeLink: 'https://github.com/Gokruzk/photo_manager'
    },
    {
      category: 'Desarrollo Full-Stack',
      title: 'Collaborative Survey Platform',
      description: 'Desarrollé una plataforma de encuestas colaborativas utilizando Django Rest Framework y PostgreSQL. Utilicé Django Channels para implementar WebSockets para actualizaciones de encuestas en vivo. Mi trabajo incluyó la gestión y creación de migraciones semilla para asegurar entornos de desarrollo y producción consistentes.',
      tags: ['Python', 'TypeScript', 'Django', 'Next.js', 'PostgreSQL', 'WebSockets', 'JWT'],
      image: '/survey_platform.png'
    },
    {
      category: 'Desarrollo Full-Stack',
      title: 'Plataforma de Reservas de Restaurante',
      description: 'Diseñé y desarrolló una aplicación móvil y web full-stack para la gestión de reservas de restaurantes. Construí una API RESTful de alto rendimiento utilizando FastAPI y SQLAlchemy para la gestión de ORM, e integré acceso seguro mediante autenticación JWT. Desarrollé una interfaz frontend interactiva para gestionar operaciones CRUD eficientes de reservas y disponibilidad de mesas en tiempo real.',
      tags: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'PostgreSQL', 'SQLAlchemy', 'JWT'],
      image: '/comedor_app.png',
      codeLink: 'https://github.com/Gokruzk/comedor_app/tree/refactor_backend'
    }
  ],
  contact_title: "Iniciar Conexión",
  contact_subtitle: "¿Listo para discutir tu próximo desafío técnico? Estoy disponible para consultoría estratégica y revisión de proyecto.",
  contact_location: "Ecuador / Remoto",
  footer_text: "Portafolio Técnico"
};
