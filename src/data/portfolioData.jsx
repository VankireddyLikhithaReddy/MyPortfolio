// Icon imports removed from data file
// Icons are now rendered directly in components to avoid JSX in data

export const personalInfo = {
  name: "Likhitha Reddy Vankireddy",
  title: "Software Developer",
  email: "likhithareddyv05@gmail.com",
  phone: "+1 234-567-9147",
  linkedin: "https://www.linkedin.com/in/likhithareddy-v/",
  github: "https://github.com/VankireddyLikhithaReddy",
  resumeLink: "/Likhithareddy_V_Software_Engineer.pdf", // Make sure your resume is in public/
  bio: "Software Developer with 3 years of experience designing, developing, testing, and deploying scalable web applications, enterprise platforms, and cloud-based solutions. Strong expertise in frontend and backend development using Python, Java, JavaScript, TypeScript, React.js, Node.js, and REST APIs.",
  shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "University of North Texas (UNT), Dallas, Texas",
    degree: "Master of Science in Computer Science",
    // duration: "Aug 2024 – May 2026",
  },
  {
    institution: "Vellore Institute of Technology (VIT), Chennai",
    degree: "Integrated Software Engineer",
    // duration: "Aug 2019 – May 2024",
  },
];

export const certifications = [];

export const experience = [
  {
    role: "Software Developer",
    company: "Capgemini",
    location: "Bangalore, India",
    duration: "Jul 2022 – Jun 2024",
    tech: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "FastAPI",
      "Django",
      "Python",
      "PostgreSQL",
      "MySQL",
      "JWT",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "CI/CD"
    ],
    points: [
      "Developed and enhanced enterprise web applications using React.js, JavaScript, and TypeScript based on business requirements.",
      "Designed and implemented backend microservices using FastAPI, Django, Python, and REST APIs for workflow automation and reporting systems.",
      "Built modules for customer onboarding, dashboards, transaction processing, and internal operations platforms.",
      "Optimized SQL queries and database performance in PostgreSQL and MySQL, improving response time by 30%.",
      "Integrated secure authentication and authorization using JWT, RBAC, and secure session handling.",
      "Collaborated with QA engineers, business analysts, and cross-functional teams to deliver sprint releases on time.",
      "Supported SIT, UAT, production releases, post-deployment validations, and defect fixes within SLA timelines.",
      "Performed code reviews, debugging, root cause analysis, and application performance improvements.",
      "Assisted DevOps teams with Docker, Jenkins, GitHub Actions, and CI/CD pipelines for smooth deployments.",
    ],
  },
  {
    role: "Junior Software Developer – Internship",
    company: "Capgemini",
    location: "Bangalore, India",
    duration: "May 2021 – Jun 2022",
    tech: [
      "Flask",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "MySQL",
      "Docker",
      "Jira"
    ],
    points: [
      "Developed internal web applications and reusable modules using Flask, Python, HTML, CSS, JavaScript, and React.js.",
      "Built frontend pages, forms, dashboards, and integrated APIs based on functional specifications.",
      "Created CRUD operations, backend services, and REST APIs for internal workflow and reporting systems.",
      "Wrote SQL queries, joins, views, and procedures in MySQL to support reporting and data processing needs.",
      "Worked on enhancements, defect fixes, and change requests as part of Agile sprint deliverables.",
      "Participated in unit testing, SIT support, deployment validation, and release activities.",
      "Assisted in containerizing applications using Docker and maintaining development and test environments.",
      "Coordinated with developers, QA teams, and project managers to meet project timelines.",
      "Maintained project documentation, status updates, and issue tracking in Jira.",
    ],
  },
];

export const projects = [
  {
    title: "Accessible Weather & Shelter Finder",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Geolocation", "Accessibility"],
    description: "Developed a full-stack MERN web application to help users locate nearby shelters during severe weather conditions. Built responsive and accessible user interfaces with keyboard navigation and screen-reader compatibility. Integrated real-time weather APIs for live alerts, weather forecasts, and emergency notifications. Implemented GPS-based location tracking and secure MongoDB data storage with sub-300ms REST API response time.",
    // date: "Oct 2025 – Present",
    githubLink: null,
    liveLink: "https://accessible-weather-shelter-1.onrender.com/",
    category: "Accessibility / Current Project",
    iconName: "FaUniversalAccess",
  },
  {
    title: "Three-Way Emotion Detection and Management System",
    tech: ["Python", "Flask", "TensorFlow", "Scikit-learn", "Pandas", "NLP", "REST APIs"],
    description: "Developed a multi-modal emotion detection platform using facial image analysis, voice recognition, and text sentiment analysis. Built backend services using Python and Flask to process user inputs and generate real-time emotion predictions. Implemented machine learning models using TensorFlow, Scikit-learn, and NLP techniques. Designed a chatbot recommendation engine providing personalized suggestions based on detected emotional state.",
    // date: "Jan 2024 – May 2024",
    githubLink: null,
    liveLink: null,
    category: "AI / Machine Learning",
    iconName: "FaDatabase",
  },
  //{
  //title: "Beyond Sight – Audible Graphs for the Visually Impaired",
  //tech: ["Python", "TensorFlow", "PyTorch", "OCR", "NLP", "TTS"],
  // description: "AI accessibility system converting graphs and images into speech for visually-impaired users using CNNs, OCR & TTS. Presented at ACM W4A 2024.",
  // date: "Aug 2023 – Oct 2024",
  // award: "https://wajdialjedaani.com/certificates/AccessbilityChallenge.pdf",
  // liveLink2: "https://wajdialjedaani.com/tools/tool.html?id=tool1",
  // category: "AI / Accessibility",
  // iconName: "FaUniversalAccess"
  //},
  {
    title: "Dynamic Pricing Prediction for Cabs",
    tech: ["Python", "Reinforcement Learning", "Supervised Learning"],
    description: "Developed ML models to predict dynamic cab pricing using supervised and reinforcement learning approaches. Processed trip datasets and trained models to estimate fares based on origin, destination and cab type.",
    // date: "Feb 2021 – Jun 2022",
    githubLink: null,

    category: "Machine Learning / Academic",
    iconName: "FaDatabase",
  },
  // {
  //   title: "AI-Based Talking Camera App",
  //   tech: ["Flutter", "Dart", "TensorFlow Lite", "Computer Vision", "Text-to-Speech (TTS)", "Object Detection"],
  //   description: "An AI-powered talking camera mobile application that helps blind and visually impaired users perceive their surroundings independently. The app captures real-time images, identifies objects using on-device ML models, and narrates the scene through natural text-to-speech, enabling hands-free, accessible environment understanding.",
  //   date: "Jan 2024 – Apr 2024",
  //   githubLink: null,
  //   liveLink: null,
  //   category: "Accessibility / Mobile AI",
  //   iconName: "FaCamera",
  // },
  {
    title: "Driver Drowsiness Detection Using CNN & HAAR",
    tech: ["Python", "TensorFlow", "OpenCV", "HAAR Cascades", "CNN"],
    description: "Developed convolutional neural networks to classify eye states (open/closed) using grayscale images from public datasets. Evaluated different CNN depths; results showed deep CNNs effectively learn facial features for eye detection. Hybrid feature sets did not improve accuracy, indicating CNNs can learn key features from raw pixels.",
    // date: "Feb 2021 – Jun 2021",
    githubLink: null,
    liveLink: null,
    category: "Computer Vision / Academic",
    iconName: "FaCode",
  },
  // {
  //   title: "2D Chess Game Using Python",
  //   tech: ["Python", "Pygame", "Object-Oriented Programming"],
  //   description: "Built a fully interactive 2D chess game with move validation, piece-specific logic, turn-based gameplay, and real-time board rendering. Implemented core chess rules including legal moves, captures, check, and checkmate detection using modular OOP design.",
  //   date: "May 2023 – Jul 2023",
  //   githubLink: null,
  //   liveLink: null,
  //   category: "Game Development / Personal",
  //   iconName: "FaChess",
  // },
  // {
  //   title: "House Price Prediction",
  //   tech: ["Python", "Pandas", "scikit-learn", "Regression"],
  //   description: "Built a regression-based ML pipeline to forecast housing prices. Collected and preprocessed a dataset (~10k entries) from Kaggle, performed feature engineering and model evaluation to support purchase decision-making.",
  //   date: "Feb 2021 – Jun 2021",
  //   githubLink: null,
  //   liveLink: null,
  //   category: "Machine Learning / Academic",
  //   iconName: "FaDatabase",
  // },
  // {
  //   title: "Basic Shell Interpreter",
  //   tech: ["C", "Unix System Calls", "fork", "pipes"],
  //   description: "Implemented a basic shell interpreter in C that parses and executes commands entered by the user. Used Unix system calls, implemented process management with fork(), and connected commands using pipes.",
  //   date: "Feb 2021 – Jun 2021",
  //   githubLink: null,
  //   liveLink: null,
  //   category: "Systems / Academic",
  //   iconName: "FaCode",
  // },
];

export const skills = {
  languages: [
    { name: "Python", iconName: "FaPython" },
    { name: "Java", iconName: "FaJava" },
    { name: "JavaScript", iconName: "SiJavascript" },
    { name: "TypeScript", iconName: "SiTypescript" },
    { name: "SQL", iconName: "SiMysql" },
    { name: "HTML5", iconName: "FaHtml5" },
    { name: "CSS3", iconName: "FaCss3Alt" },
    { name: "C++", iconName: "SiCplusplus" },
    { name: "PostgreSQL", iconName: "SiPostgresql" },
    { name: "MongoDB", iconName: "SiMongodb" },
    { name: "Redis", iconName: "SiRedis" },
    { name: "MySQL", iconName: "SiMysql" },
  ],

  frameworksAndLibraries: [
    { name: "React.js", iconName: "FaReact" },
    { name: "Node.js", iconName: "FaNodeJs" },
    { name: "Express.js", iconName: "SiExpress" },
    { name: "Next.js", iconName: "SiNextdotjs" },
    { name: "Django", iconName: "SiDjango" },
    { name: "FastAPI", iconName: "SiFastapi" },
    { name: "Flask", iconName: "SiFlask" },
    { name: "Spring Boot", iconName: "SiSpringboot" },
    { name: "Bootstrap", iconName: "SiBootstrap" },
    { name: "Tailwind CSS", iconName: "SiTailwindcss" },
    { name: "REST APIs", iconName: "FaCloud" },
    { name: "Microservices", iconName: "FaProjectDiagram" },
  ],

  aiAndDataEngineering: [
    { name: "TensorFlow", iconName: "SiTensorflow" },
    { name: "PyTorch", iconName: "SiPytorch" },
    { name: "Scikit-Learn", iconName: "SiScikitlearn" },
    { name: "Pandas", iconName: "SiPandas" },
    { name: "NumPy", iconName: "SiNumpy" },
    { name: "OCR", iconName: "FaEye" },
    { name: "NLP", iconName: "FaLanguage" },
    { name: "Spark", iconName: "SiApachespark" },
    { name: "ETL Pipelines", iconName: "FaCogs" },
  ],

  toolsAndPlatforms: [
    { name: "AWS", iconName: "FaAws" },
    { name: "Docker", iconName: "FaDocker" },
    { name: "Jenkins", iconName: "SiJenkins" },
    { name: "GitHub Actions", iconName: "SiGithubactions" },
    { name: "Git", iconName: "FaGitAlt" },
    { name: "Jira", iconName: "SiJira" },
    { name: "Postman", iconName: "SiPostman" },
    { name: "Swagger", iconName: "SiSwagger" },
    { name: "Linux", iconName: "FaLinux" },
    { name: "VS Code", iconName: "SiVscodium" },
    { name: "CI/CD", iconName: "FaProjectDiagram" },
  ],

  coreCompetencies: [
    { name: "Problem Solving", iconName: "FaLightbulb" },
    { name: "Data Structures & Algorithms", iconName: "FaProjectDiagram" },
    { name: "System Design", iconName: "FaSitemap" },
    { name: "API Design", iconName: "FaPlug" },
    { name: "Agile / Scrum", iconName: "FaRunning" },
    { name: "Test Driven Development", iconName: "FaCode" },
    { name: "SDLC", iconName: "FaCogs" },
    { name: "JWT / RBAC", iconName: "FaLock" },
    { name: "Communication", iconName: "FaComments" },
  ]
};


// export const leadershipAndInvolvement = [
//   {
//     role: "Accessibility Challenge – Judges' Award Winner",
//     organization: "Project: Beyond Sight – Audible Graphs for the Visually Impaired | Event: ACM W4A Accessibility Hackathon / Challenge",
//     duration: "",
//     points: [
//       "Awarded the Judges' Award for developing an AI-powered system that converts charts and visual graphs into meaningful audio explanations for blind and visually impaired users.",
//       "Built a pipeline combining OCR, NLP, and deep learning to interpret chart elements and generate speech-based insights.",
//       "Recognized for innovation, accessibility impact, and contributions to inclusive technology.",
//     ],
//   },
//   {
//     role: "Vice Captain – University Handball Team",
//     organization: "University of North Texas",
//     duration: "",
//     points: [
//       "Led the university handball team in intercollegiate tournaments as Vice Captain.",
//       "Organized practice sessions, guided team strategy, and motivated teammates during competitive events.",
//       "Improved team coordination, discipline, and overall performance through consistent leadership.",
//       "Demonstrated leadership, teamwork, and perseverance through sport.",
//     ],
//   },
//];
// export const leadershipAndInvolvement = [];


export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, iconName: "FaLinkedin" },
  github: { url: personalInfo.github, iconName: "FaGithub" },
  email: { url: `mailto:${personalInfo.email}`, iconName: "FaEnvelope" },
};
