export const profile = {
  name: "Mahnoor Faisal",
  role: "Software Engineer",
  location: "Karachi, Pakistan",
  email: "faisalmahnoor86@gmail.com",
  phone: "+923198972882",
  phoneDisplay: "+92 319 8972882",
  linkedin: "https://www.linkedin.com/in/mahnoor-faisal-2519a0245",
  medium: "https://medium.com/@mahnoorfaysal",
  resume: "/Resume/Mahnoor_JS_Software_Engineer.pdf",
  summary:
    "Frontend developer with 3 years of experience building web and mobile applications with React, Next.js and modern JavaScript. I use AI-assisted development daily (Claude Code, ChatGPT, Gemini) for code generation, debugging and refactoring, and I turn business requirements and Figma designs into responsive, user-friendly interfaces.",
};

export const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "15", label: "Products shipped" },
  { value: "3", label: "Platforms: Website, Application" },
  { value: "2", label: "Years building with AI tools" },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "1Percent Labs, UK",
    period: "Dec 2024 – Present",
    current: true,
    points: [
      "Leading frontend development for BuoyHub.com, shipping new features and improving existing functionality across the platform.",
      "Integrating AI assistants (Claude Code, Gemini, ChatGPT) into daily workflows for rapid React component generation, legacy code comprehension and automated refactoring.",
      "Building web apps with React.js, Next.js, TypeScript, JavaScript, HTML and CSS, and mobile apps with React Native.",
      "Turning Figma designs into responsive interfaces using Material UI, Tailwind CSS and other UI libraries.",
      "Customizing Twenty CRM to support business requirements.",
      "Using Python and Django to understand backend functionality and support API development.",
      "Coordinating with QA and other developers to resolve issues and deliver features on time.",
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Tailwind CSS",
      "MUI",
      "Django",
      "Claude Code",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "1Percent Labs, UK",
    period: "Dec 2023 – Nov 2024",
    points: [
      "Developed and maintained web pages with vanilla JavaScript, HTML5 and CSS3.",
      "Turned Figma designs into responsive, user-friendly interfaces using Bootstrap and custom CSS.",
      "Delivered frontend features incrementally in Agile sprints, modernizing legacy UI components and improving overall platform usability.",
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Figma", "Agile"],
  },
  {
    title: "Front End Development Intern",
    company: "Tixsee Lab, Karachi",
    period: "Aug 2023 – Oct 2023",
    points: [
      "Built and updated web interfaces with vanilla JavaScript, HTML5 and CSS3 under the guidance of senior developers.",
      "Translated Figma design files into responsive Bootstrap layouts aligned with client requirements.",
      "Joined code reviews and debugging sessions to rapidly improve code quality and foundational skills.",
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Figma"],
  },
];

export const education = {
  degree: "Bachelor of Software Engineering",
  school: "University of Karachi – UBIT",
  period: "Feb 2021 – Feb 2025",
};

export const featured = [
  {
    name: "BuoyHub",
    subtitle: "Business Services Web Portal",
    href: "https://buoyhub.com",
    points: [
      "Led frontend development and contributed to backend APIs built with Python and Django for a multi-product business services platform.",
      "Used Claude Code for ticket analysis, implementation, debugging, refactoring and testing.",
      "Worked with cross-functional teams to troubleshoot issues, validate functionality and ship enhancements.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Django", "Claude Code"],
  },
  {
    name: "SnuggleScript",
    subtitle: "AI bedtime stories · iOS app",
    href: "https://snugglescript.ai/",
    points: [
      "Built the mobile app frontend in React Native with responsive, friendly interfaces.",
      "Implemented UI animations and interactive elements to enrich the experience.",
      "Translated design requirements into polished screens with consistent layouts and smooth transitions.",
    ],
    tags: ["React Native", "Animations", "iOS"],
  },
  {
    name: "NLP TaskPro",
    subtitle: "Academic project · AI task management",
    points: [
      "Led development, building the frontend with Next.js and using Firebase for backend services and data.",
      "Built a voice command system with the Gemini API and Web Speech API to create, assign and move tasks through natural language.",
      "Applied prompt engineering and structured JSON parsing to turn commands into actionable tasks.",
    ],
    tags: [
      "Next.js",
      "Firebase",
      "Gemini API",
      "Web Speech API",
      "Tailwind CSS",
    ],
  },
];

export const projects = [
  {
    name: "Nature Cafe & Bar",
    description: "Ordering platform: website, admin portal and Android app",
    platforms: ["Web", "Android"],
  },
  {
    name: "KeyView AI",
    description: "AI camera analytics for property monitoring",
    platforms: ["iOS"],
  },
  {
    name: "SnuggleScript",
    description: "AI bedtime stories made from your child's day",
    platforms: ["iOS"],
  },
  {
    name: "BuoyHub",
    description: "All-in-one platform for IT, HR and CRM",
    platforms: ["Web"],
  },
  {
    name: "USDFI",
    description: "DeFi platform for swaps, liquidity, farming and staking",
    platforms: ["Web"],
  },
  {
    name: "PRISM",
    description: "IT & telecom expense intelligence for enterprises",
    platforms: ["Web"],
  },
  {
    name: "Carcat Automotive",
    description: "Garage management system for jobs, customers and vehicles, as a web app and desktop application",
    platforms: ["Web", "Desktop"],
  },
  {
    name: "EDGE CRM",
    description: "Custom CRM built around the team's own sales and customer workflows",
    platforms: ["Web"],
  },
  {
    name: "IEEPA Concierge",
    description: "Guided concierge portal that walks clients through their IEEPA process step by step",
    platforms: ["Web"],
  },
  {
    name: "IEEPA Third Party",
    description: "Partner-facing portal for third parties to submit and track IEEPA cases",
    platforms: ["Web"],
  },
  {
    name: "MyGIG",
    description: "Web platform that connects people with gig opportunities in one place",
    platforms: ["Web"],
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS"],
  "Front-end": [
    "React",
    "Next.js",
    "Electron.js",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
    "Redux Toolkit",
    "React Query",
    "Zustand",
    "React Hook Form",
    "Zod",
  ],
  "Mobile & desktop": [
    "React Native (iOS & Android)",
    "Android Studio (Gradle)",
    "Xcode",
  ],
  "Back-end & data": [
    "Django",
    "Django REST Framework",
    "NestJS",
    "Supabase",
    "Twenty CRM",
  ],
  "AI & prompting": [
    "Claude Code",
    "Anthropic Claude API",
    "OpenAI",
    "Gemini",
    "ChatGPT",
    "Prompt engineering",
    "Document parsing",
    "AI-generated insights",
  ],
  Web3: ["Ethers.js", "Smart contract integration", "Wallet integration"],
  "DevOps & practices": [
    "Git & GitHub",
    "Figma",
    "Vite",
    "CI/CD (Bitrise, Bitbucket Pipelines)",
    "Release management",
    "System architecture",
    "Performance",
    "Accessibility",
    "Code review & mentoring",
  ],
};

export const headlineStack = [
  "React Native",
  "TypeScript",
  "Next.js",
  "React",
  "Django",
  "Supabase",
  "Electron",
  "Claude API",
  "Ethers.js",
  "Firebase",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Claude Code",
  "ChatGPT",
  "Gemini",
  "Git",
  "GitHub",
  "Figma",
  "Vite",
];

export const articles = [
  {
    title: "Understanding Of DOM Essentials",
    image: "/article2.png",
    summary:
      "A look at the DOM and its tree-like structure, and why understanding it is pivotal for any web developer building interactive, dynamic experiences.",
    href: "https://medium.com/@mahnoorfaysal/understanding-of-dom-essentials-f3b66c0719eb",
  },
  {
    title: "Writing Loops In CSS For Dynamic Classes",
    image: "/article1.jpg",
    summary:
      "How Sass loops (@for, @each, @while) generate dynamic CSS classes, cutting duplication and keeping stylesheets clean, with practical examples.",
    href: "https://medium.com/@mahnoorfaysal/writing-loops-in-css-for-dynamic-classes-58bc29eb2fec",
  },
];
