export interface LanguageTranslations {
  title: string;
  // Header
  nav_projects: string;
  nav_skills: string;
  nav_contact: string;
  resume: string;
  // Hero
  hero_label: string;
  hero_title_1: string;
  hero_title_highlight: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_btn_view_projects: string;
  hero_btn_contact: string;
  // Skills
  skills_title: string;
  skills_subtitle: string;
  skills_categories: {
    title: string;
    items: string[];
  }[];
  // Projects
  projects_title: string;
  projects_view_code: string;
  projects_demo: string;
  projects_list: {
    category: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    codeLink?: string;
    demoLink?: string;
  }[];
  // Contact
  contact_title: string;
  contact_subtitle: string;
  contact_location: string;
  // Footer
  footer_text: string;
}
