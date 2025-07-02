import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Uduak Ituen — Machine Learning Engineer",
  author: "Uduak Monday Ituen",
  description:
    "Canada based Machine Learning Engineer with 2 years experience as a software engineer and 3 years machine learning engineering. Specialized in research and application of state-of-the-arts machine learning solutions, from development to production.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
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
      "Canada based Machine Learning Engineer with 2 years experience as a software engineer and 3 years machine learning engineering. Specialized in research and application of state-of-the-arts machine learning solutions, from development to production..",
    email: "udituen@gmail.com",
  },
  experience: [
    {
      company: "Agriculture and Agri-food Canada",
      position: "Machine Learning & Data Research Assistant (Contract)",
      startDate: "Feb 2025",
      endDate: "June 2025",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "The University of the Fraser Valley",
      position: "Software Engineering Instructor (Seasonal)",
      startDate: "August 2024",
      endDate: "December 2024",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "The University of Alberta",
      position: "Graduate Research Assistant - Machine Learning",
      startDate: "May 2022",
      endDate: "May 2024",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
    {
      company: "Fidelity Bank",
      position: "Software Engineer",
      startDate: "August 2019",
      endDate: "July 2021",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "AgriQuery",
      summary: "A RAG-based LLM Q&A app for agricultural researchers.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "UCI-Diabetes Readmission Prediction",
      summary: "A Supervised algorithm used in predicting the readmission of diabetes patients in UCI",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "Chemical Active Agent Prediction",
      summary: "A supervised model trained to process SMILES chemicals and output a prediction of active or not active reagents",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Uduak Ituen, a mathematics nerd with a passion for seeing mathematical functions come to life as machine learning models. With a strong background in computer science, as research methodologies, I thrive in the implementation of machine learning solutions from theory to full blown production.

      My professional journey began as a software engineer at a financial industry where I horned the skills of agile development and object-oriented programming. I had a growing desire to further my education and obtain a master's degree which I did at the University of Alberta. Here, I delved deeper into machine learning research. 
      
      As building a machine learning solution is similar to engineering a software solution, that is the intersection I bring. I am particularly excited about applying machine learning engineering in the field of health and biotech and have built a number of projects in this domain.
      My projects also range from large language models to generative and self-supervised models, all with a focus on performance, interpretability, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
