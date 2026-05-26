import type { LanguageTranslations } from './types';

export const eng: LanguageTranslations = {
  title: "NIGELL JAMA | Technical Portfolio",
  nav_projects: "Projects",
  nav_skills: "Skills",
  nav_contact: "Contact",
  resume: "Resume",
  hero_label: "Full-Stack Engineer",
  hero_title_1: "Building Robust ",
  hero_title_highlight: "Digital Tools",
  hero_title_2: "",
  hero_subtitle: "Committed to continuous learning, efficiency in modern development environments, and delivering functional, wellstructured solutions.",
  hero_btn_view_projects: "View Projects",
  hero_btn_contact: "Get In Touch",
  skills_title: "Technical Stack",
  skills_subtitle: "A curated selection of tools used to engineer high-availability enterprise solutions.",
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
  projects_title: "Featured Projects",
  projects_view_code: "View Code",
  projects_demo: "View",
  projects_list: [
    {
      category: 'ConTech Platform',
      title: 'Payconer Construction Hub',
      description: 'A robust Construction Technology (ConTech) platform engineered to optimize project workflows and resource management. Built on a high-availability Django backend coupled with a modern Next.js frontend to handle real-time field operations and construction metrics with top-tier security.',
      tags: ['Python', 'TypeScript', 'Django', 'Next.js', 'PostgreSQL', 'JWT', 'GitLab', 'Linux'],
      image: '/payconer.png',
      demoLink: 'https://www.payconer.com/'
    },
    {
      category: 'Academic Operations',
      title: 'ESPOCH Inventory System',
      description: 'A secure inventory management system designed and developed from scratch for university departments at ESPOCH. Features high-performance REST APIs, rigorous stakeholder requirements gathering, and clean databases to efficiently track and audit institutional assets.',
      tags: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'Prisma' ,'PostgreSQL', 'JWT', 'GitHub'],
      image: '/inventarioespoch.png',
      demoLink: 'https://inventariosoftware.espoch.edu.ec/'
    },
    {
      category: 'Full-Stack Development',
      title: 'Fitness Application',
      description: 'Designed and developed a full-stack mobile application for gym workout planning and routine management. Developed the reactive frontend in React Native alongside a high-performance FastAPI and MySQL backend. Integrated Amazon S3 for media storage, implemented WebSockets to provide real-time alerts between users and trainers, and managed automated email notifications with GCP.',
      tags: ['Python', 'TypeScript', 'React Native', 'FastAPI', 'Prisma' ,'MySQL', 'WebSockets', 'JWT', 'AWS', 'GCP'],
      image: '/fitness.png'
    },
    {
      category: 'Full-Stack Engineering',
      title: 'Device Integration & Backend',
      description: 'Led the design and implementation of a high-performance cross-platform application and its backend using FastAPI, Next.js, and React Native. Engineered a Hexagonal Architecture (Ports and Adapters) to decouple business logic, implementing WebSockets and Server-Sent Events (SSE) for bi-directional data flow between devices and frontend. Applied advanced design patterns (Singleton, Factory, Repository) alongside GCP for secure authentication.',
      tags: ['Python', 'TypeScript', 'FastAPI', 'React Native', 'Next.js', 'WebSockets', 'Prisma','PostgreSQL', 'JWT', 'GCP'],
      image: '/device_backend.png'
    },
    {
      category: 'Backend Development',
      title: 'Photo Manager Service',
      description: 'Developed a photo management backend emphasizing architectural flexibility. Designed with FastAPI, Alembic, and Prisma using a Hexagonal Architecture, the system successfully decouples business logic to allow seamless switching between different ORMs. Implemented OAuth2 for security and utilized uv for a highly reproducible and fast development environment.',
      tags: ['Python', 'FastAPI', 'Alembic', 'Prisma' ,'MySQL', 'PostgreSQL', 'JWT'],
      image: '/photo_manager.png',
      codeLink: 'https://github.com/Gokruzk/photo_manager'
    },
    {
      category: 'Full-Stack Development',
      title: 'Collaborative Survey Platform',
      description: 'Developed a collaborative survey platform using Django Rest Framework and PostgreSQL. I utilized Django Channels to implement WebSockets for live survey updates. My work included managing and creating seed migrations to ensure consistent development and production environments.',
      tags: ['Python', 'TypeScript', 'Django', 'Next.js', 'PostgreSQL', 'WebSockets', 'JWT'],
      image: '/survey_platform.png'
    },
    {
      category: 'Full-Stack Development',
      title: 'Restaurant Booking Platform',
      description: 'Designed and developed a full-stack restaurant booking and management application. Built a high-performance RESTful API using FastAPI and SQLAlchemy for robust ORM management, securing endpoints with JWT authentication. Integrated an interactive Next.js frontend to handle efficient real-time CRUD operations, table status tracking, and booking schedules.',
      tags: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
      image: '/comedor_app.png',
      codeLink: 'https://github.com/Gokruzk/comedor_app/tree/refactor_backend'
    }
  ],
  contact_title: "Initiate Handshake",
  contact_subtitle: "Ready to discuss your next technical challenge? I'm available for strategic consulting and project review.",
  contact_location: "Ecuador / Remote",
  footer_text: "Technical Portfolio"
};
