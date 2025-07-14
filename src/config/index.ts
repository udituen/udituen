import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Uduak Ituen — Machine Learning Engineer",
  author: "Uduak Monday Ituen",
  description:
    "Canada-based Machine Learning Engineer with 2 years of experience as a Software Engineer and 3 years in Machine Learning Engineering. Specialized in the research and application of state-of-the-art machine learning solutions, from development to production.",
  lang: "en",
  siteLogo: "/udituen-small.webp",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Hugging Face", href: "https://huggingface.co/udituen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/uduak-ituen/" },
    { text: "Github", href: "https://github.com/udituen" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Uduak Ituen",
    specialty: "Machine Learning & MLOps Engineer",
    summary:
      "Canada-based Machine Learning Engineer with over 2 years of experience as a Software Engineer and over 3 years in Machine Learning Engineering. Specialized in the research and application of state-of-the-art machine learning solutions, from development to production.",
    email: "udituen@gmail.com",
  },
  experience: [
    {
      company: "Agriculture and Agri-food Canada",
      position: "Machine Learning & Data Research Assistant (Contract)",
      startDate: "Feb 2025",
      endDate: "June 2025",
      summary: [
        "Collaborated with a cross-functional research team to translate business requirements into technical solutions, ensuring seamless integration between research and production environments",
        "Architected production-ready ML infrastructure for model serving using Docker, Apache Airflow, and MLflow within 5 months to accelerate ongoing research workflows",
        "Implemented automated CI/CD pipelines for ML model deployment, enabling rapid model iteration and consistent research workflow automation",
        "Initiated active learning methodology for continuous model improvement, automating uncertainty-based data selection to optimize and reduce the cost of wet lab experiments and enhance model accuracy",
        "Developed comprehensive documentation for data and deployment strategies, following MLOps and project managament standards. Enabling knowledge transfer among members of the team"
      ],
    },
    {
      company: "The University of the Fraser Valley",
      position: "Software Engineering Instructor (Contract)",
      startDate: "August 2024",
      endDate: "December 2024",
      summary: [
        "Delivered technical training to 94 students on modern development practices including Git version control, CI/CD pipelines, and Agile methodologies",
        "Designed hands-on curriculum featuring project-based assessments aligned with industry DevOps practices",
        "Mentored students on troubleshooting complex technical problems and communicating solutions effectively", 
        "Guided students through full software development lifecycles, from requirement gathering to deployment",
      ],
    },
    {
      company: "The University of Alberta",
      position: "Graduate Research Assistant - Machine Learning",
      startDate: "May 2022",
      endDate: "June 2024",
      summary: [
        "Fine-tuned self-supervised ML models (VIME, TabNet) for telecom fraud detection, demonstrating measurable performance gains over classical supervised learning approaches",
        "Enhanced model accuracy by 2% through TabGAN implementation for synthetic data generation, optimizing performance against baseline supervised models",
        "Conducted literature reviews and comparative analysis of state-of-the-art fraud detection techniques, establishing benchmarks and evaluation metrics for model performance assessment",
        "Orchestrated large-scale model training using AWS SageMaker and Canada’s High-Performance Computing infrastructure for GPU-accelerated deep learning workflows",
      ],
      },
    {
      company: "Fidelity Bank",
      position: "Software Engineer",
      startDate: "August 2019",
      endDate: "July 2021",
      summary: [
        "Maintained critical product-level banking systems serving thousands of users, ensuring 99.9% uptime through proactive monitoring",
        "Automated cross-departmental processes eliminating manual workflows and improving operational efficiency",
        "Managed ETL operations for enterprise data warehouse, optimizing data pipelines and reducing processing errors by 25%",
        "Developed monitoring dashboards for real-time system performance tracking and KPI reporting",
        "Provided technical support for internal applications including hardware inventory systems and investigation portals",
        "Collaborated with full-stack development team on product-level system redesign projects, implementing enterprise-grade software engineering principles and improving user engagement by 30%",
      ]
    },
  ],
  projects: [
    {
      name: "AgriQuery (Ongoing)",
      summary: "A RAG-based LLM Q&A app for agricultural researchers.",
      linkPreview: "/",
      linkSource: "https://github.com/udituen/AgriQuery",
      image: "/agriquery.png",
    },
    // {
    //   name: "UCI-Diabetes Readmission Prediction",
    //   summary: "A supervised algorithm used in predicting the readmission of diabetes patients in UCI",
    //   linkPreview: "/",
    //   linkSource: "",
    //   image: "/pred.jpg",
    // },
    {
      name: "Chemical Active Agent Prediction (Active)",
      summary: "A supervised model trained to process SMILES chemicals and output a prediction of active or not active reagents",
      linkPreview: "/",
      linkSource: "https://huggingface.co/spaces/udituen/chemicals_lab",
      image: "/chemical_lib.png",
    },
  ],
  about: {
    description: `
    Hi, I’m Uduak Ituen — a mathematics enthusiast with a passion for transforming mathematical concepts into real-world solutions through machine learning. With a strong background in computer science, software engineering, and research, I thrive on translating theory into robust, end-to-end machine learning pipelines ready for production. I began my professional journey as a software engineer in the financial industry, where I honed agile practices and object-oriented design principles—skills I now apply to building scalable ML systems. Eager to deepen my technical foundation, I pursued a master’s degree at the University of Alberta, focusing on machine learning research. I see ML engineering as an extension of software development—both require structured thinking, iterative design, and real-world validation. I’m especially excited about applying ML in health and biotech, where I’ve built several projects at the intersection of data and biology. Through coursework and personal experimentation, I’ve explored large language models, generative techniques, and self-supervised learning, with a focus on precision, interpretability, and scalability.
    `,
    image: "/20250711_154627.jpg",
  },
};

// #5755ff
