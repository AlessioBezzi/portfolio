import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Award,
  Cloud,
  Code2,
  Laptop,
  Cpu,
  Rocket,
  Server,
  GraduationCap,
  BookA
} from "lucide-react";

export type Language = "it" | "en";

export type SectionId =
  | "home"
  | "journey"
  | "projects"
  | "skills"
  | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type Accent = "blue" | "teal" | "violet" | "green" | "amber";

export type Feature = {
  title: string;
  body: string;
  icon: LucideIcon;
  accent: Accent;
};

export type TimelineItem = {
  year: string;
  title: string;
  body: string;
  icon: LucideIcon;
  accent: Accent;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: "blue" | "teal" | "violet" | "green";
  href: string;
  githubHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
  icon: LucideIcon;
  accent: Accent;
};

export type HeroImageCard = {
  id: "code" | "pipeline" | "workflow";
  src: string;
  alt: string;
};

export type PortfolioContent = {
  meta: {
    name: string;
    cvHref: string;
    email: string;
    github: string;
    linkedin: string;
    portraitSrc?: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headlinePrefix: string;
    body: string;
    quoteAuthor: string;
    primaryCta: string;
    secondaryCta: string;
    imageCards: HeroImageCard[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    signature: string;
    focus: Feature[];
  };
  journey: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: TimelineItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Project[];
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    cvLabel: string;
  };
  footer: {
    rights: string;
  };
};

export const content: Record<Language, PortfolioContent> = {
  it: {
    meta: {
      name: "Alessio Bezzi",
      cvHref: "/cv/CV-Bezzi-Ita.pdf",
      email: "alessiobezzi15@gmail.com",
      github: "https://github.com/AlessioBezzi/",
      linkedin: "https://www.linkedin.com/in/alessio-bezzi-2755bb22a/",
      portraitSrc: "/images/me.png",
    },
    nav: [
      { id: "projects", label: "Projects" },
      { id: "journey", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Backend Software Engineer",
      headlinePrefix: "Backend|Cloud|Architecture",
      body: "Simplicity is very hard to design, but it's easier to build and much easier to maintain.",
      quoteAuthor: "Rob Pike",
      primaryCta: "See projects",
      secondaryCta: "Contact me",
      imageCards: [
        {
          id: "code",
          src: "/images/cs_hero.png",
          alt: "Hero image one",
        },
        {
          id: "pipeline",
          src: "",
          alt: "Hero image two",
        },
        {
          id: "workflow",
          src: "/images/cityvg_hero.png",
          alt: "Hero image three",
        },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Software Engineer",
      body:
        "Mi lascio spesso guidare da ciò che non conosco: un luogo diverso, un sapore insolito, un’idea fuori strada. A volte sbaglio direzione, ma quasi sempre imparo qualcosa.",
      signature: "Alessio",
      focus: [
        {
          title: "Software Engineering",
          body: "Backend services, REST APIs, application pipelines, system integrations and authentication.",
          icon: Server,
          accent: "blue",
        },
        {
          title: "Cloud & Data Platforms",
          body: "GCP, Azure, BigQuery, cloud workflows and data processing pipelines",
          icon: Cloud,
          accent: "green",
        },
        {
          title: "Code Quality",
          body: "Static analysis, SonarQube, code smells, refactoring and code review.",
          icon: Code2,
          accent: "violet",
        },
        {
          title: "Complex Systems",
          body: "Distributed systems, concurrency, operating systems and reliability.",
          icon: Activity,
          accent: "amber",
        },
      ],
    },
    journey: {
      eyebrow: "My journey",
      title: "Percorso tecnico",
      subtitle: "",
      items: [
        {
          year: "2015 - 2020",
          title: "Diploma di Liceo Scientifico, Scienze Applicate",
          body: "I.I.S.S. Bertrand Russell",
          icon: BookA,
          accent: "blue",
        },
        {
          year: "2020 - 2023",
          title: "Laurea Triennale Ingegneria Informatica",
          body: "Politecnico di Milano",
          icon: Laptop,
          accent: "teal",
        },
        {
          year: "2023 - 2025",
          title: "M.Sc. Computer Science and Engineering",
          body: "Politecnico di Milano",
          icon: GraduationCap,
          accent: "violet",
        },
        {
          year: "2025+",
          title: "Software Engineer Consultant per Reply",
          body: "SocialThingum",
          icon: Rocket,
          accent: "amber",
        }
      ],
    },
    projects: {
      eyebrow: "Featured work",
      title: "I miei Progetti",
      subtitle: "",
      items: [
        {
          title: "Code Smells Detector",
          description:
            "Applicazione web basata su LLM per rilevare code smells nel codice sorgente.",
          tags: ["Python", "Langchain", "LLMs", "SonarQube"],
          accent: "violet",
          href: "#contact",
          githubHref: "",
          imageSrc: "/images/cs_logo.png",
          imageAlt: "",
        },
        {
          title: "CityVG App Project",
          description:
            "Applicazione multipiattaforma per pianificare tour guidati, generati sulla base delle preferenze inserite",
          tags: ["Python", "Flutter", "Firebase"],
          accent: "green",
          href: "#contact",
          githubHref: "https://github.com/AlessioBezzi/CityVG",
          imageSrc: "/images/cityvg_logo.png",
          imageAlt: "",
        },
        {
          title: "Clinical Trial Process",
          description:
            "Modellazione di workflow per clinical trial con BPMN, reti di Petri, Camunda e servizi RESTful.",
          tags: ["OpenAPI", "Javascripts", "BPMN", "Camunda"],
          accent: "blue",
          href: "#contact",
          githubHref: "https://github.com/AlessioBezzi/ProjectPSD",
          imageSrc: "/images/bpmn_logo.png",
          imageAlt: "",
        },
        {
          title: "MyShelfie",
          description:
            "Una replica multiplayer online a turni del gioco da tavolo My Shelfie.",
          tags: ["OOP", "Design Patterns", "Java", "TCP/RMI"],
          accent: "teal",
          href: "#contact",
          githubHref: "https://github.com/AlessioBezzi/MyShelfie",
          imageSrc: "/images/myshelfie_logo.PNG",
          imageAlt: "",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Come lavoro",
      subtitle:
        "",
      groups: [
        {
          title: "Sviluppo",
          items: ["C / C++", "Python", "Java", "Algoritmi"],
          icon: Code2,
          accent: "violet",
        },
        {
          title: "Sistemi",
          items: ["Sistemi operativi", "Concorrenza", "OpenMP", "MPI"],
          icon: Cpu,
          accent: "blue",
        },
        {
          title: "Piattaforme",
          items: ["Docker", "Kubernetes", "CI/CD", "GCP e Azure"],
          icon: Cloud,
          accent: "teal",
        },
        {
          title: "Qualità",
          items: ["Analisi statica", "SonarQube", "Code smells", "Design Patterns"],
          icon: Award,
          accent: "amber",
        },
      ],
    },
    contact: {
      eyebrow: "Let's build",
      title: "Let's build reliable software.",
      body:"",
      emailLabel: "Say hello",
      linkedinLabel: "Connect on LinkedIn",
      githubLabel: "View on GitHub",
      cvLabel: "Download CV",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  en: {
    meta: {
      name: "Alessio Bezzi",
      cvHref: "/cv/CV-Bezzi-Eng.pdf",
      email: "alessiobezzi15@gmail.com",
      github: "https://github.com/AlessioBezzi/",
      linkedin: "https://www.linkedin.com/in/alessio-bezzi-2755bb22a/",
      portraitSrc: "/images/me.png",
    },
    nav: [
      { id: "projects", label: "Projects" },
      { id: "journey", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Backend Software Engineer",
      headlinePrefix: "Backend|Cloud|Architecture",
      body: "Simplicity is very hard to design, but it's easier to build and much easier to maintain.",
      quoteAuthor: "Rob Pike",
      primaryCta: "See projects",
      secondaryCta: "Contact me",
      imageCards: [
        {
          id: "code",
          src: "/images/cs_hero.png",
          alt: "Hero image one",
        },
        {
          id: "pipeline",
          src: "",
          alt: "Hero image two",
        },
        {
          id: "workflow",
          src: "/images/cityvg_hero.png",
          alt: "Hero image three",
        },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Software Engineer",
      body:
        "I’m often drawn to the unfamiliar: a new place, an unexpected taste, an idea slightly off track. Sometimes I take the wrong turn, but I almost always learn something from it.",
      signature: "Alessio",
      focus: [
        {
          title: "Software Engineering",
          body: "Backend services, REST APIs, application pipelines, system integrations and authentication.",
          icon: Server,
          accent: "blue",
        },
        {
          title: "Cloud & Data Platforms",
          body: "GCP, Azure, BigQuery, cloud workflows and data processing pipelines",
          icon: Cloud,
          accent: "green",
        },
        {
          title: "Code Quality",
          body: "Static analysis, SonarQube, code smells, refactoring and code review.",
          icon: Code2,
          accent: "violet",
        },
        {
          title: "Complex Systems",
          body: "Distributed systems, concurrency, operating systems and reliability.",
          icon: Activity,
          accent: "amber",
        },
      ],
    },
    journey: {
      eyebrow: "My journey",
      title: "Technical Profile",
      subtitle: "",
      items: [
        {
          year: "2015 - 2020",
          title: "High School Diploma, Applied Sciences",
          body: "I.I.S.S. Bertrand Russell",
          icon: BookA,
          accent: "blue",
        },
        {
          year: "2020 - 2023",
          title: "B.Sc. Computer Science and Engineering",
          body: "Politecnico di Milano",
          icon: Laptop,
          accent: "teal",
        },
        {
          year: "2023 - 2025",
          title: "M.Sc. Computer Science and Engineering",
          body: "Politecnico di Milano",
          icon: GraduationCap,
          accent: "violet",
        },
        {
          year: "2025+",
          title: "Software Engineer Consultant for Reply",
          body: "SocialThingum",
          icon: Rocket,
          accent: "amber",
        }
      ],
    },
    projects: {
      eyebrow: "Featured work",
      title: "Selected projects",
      subtitle: "",
      items: [
       {
          title: "Code Smells Detector",
          description:
            "An LLM-based web application for detecting code smells in source code.",
          tags: ["Python", "Langchain", "LLMs", "SonarQube"],
          accent: "violet",
          href: "#contact",
          githubHref: "",
          imageSrc: "/images/cs_logo.png",
          imageAlt: "",
        },
        {
          title: "CityVG App Project",
          description:
            "A cross-platform app for planning guided tours based on the preferences you enter",
          tags: ["Python", "Flutter", "Firebase"],
          accent: "green",
          href: "#contact",
          githubHref: "https://github.com/AlessioBezzi/CityVG",
          imageSrc: "/images/cityvg_logo.png",
          imageAlt: "",
        },
        {
          title: "Clinical Trial Process",
          description:
            "Modelling clinical trial workflows using BPMN, Petri nets, Camunda and RESTful services.",
          tags: ["OpenAPI", "Javascripts", "BPMN", "Camunda"],
          accent: "blue",
          href: "#contact",
          githubHref: "https://github.com/AlessioBezzi/ProjectPSD",
          imageSrc: "/images/bpmn_logo.png",
          imageAlt: "",
        },
        {
          title: "MyShelfie",
          description:
            "An online turn-based multiplayer version of the board game My Shelfie.",
          tags: ["OOP", "Design Patterns", "Java", "TCP/RMI"],
          accent: "teal",
          href: "#contact",
          githubHref: "https://github.com/AlessioBezzi/MyShelfie",
          imageSrc: "/images/myshelfie_logo.PNG",
          imageAlt: "",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "How I work",
      subtitle:
        "",
      groups: [
        {
          title: "Development",
          items: ["C / C++", "Python", "Java", "Algorithms"],
          icon: Code2,
          accent: "violet",
        },
        {
          title: "Systems",
          items: ["Operating systems", "Concurrency", "OpenMP", "MPI"],
          icon: Cpu,
          accent: "blue",
        },
        {
          title: "Platforms",
          items: ["Docker", "Kubernetes", "CI/CD", "GCP and Azure"],
          icon: Cloud,
          accent: "teal",
        },
        {
          title: "Quality",
          items: ["Static analysis", "SonarQube", "Code smells", "Design Patterns"],
          icon: Award,
          accent: "amber",
        },
      ],
    },
    contact: {
      eyebrow: "Let's build",
      title: "Let's build reliable software.",
      body:"",
      emailLabel: "Say hello",
      linkedinLabel: "Connect on LinkedIn",
      githubLabel: "View on GitHub",
      cvLabel: "Download CV",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
