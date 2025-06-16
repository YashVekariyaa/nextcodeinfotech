import { NavItem } from "@/interfaces/main";
import { Metadata } from "next";
import { AiOutlineAndroid } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePaintBrush } from "react-icons/hi2";

export const COMPANY_NAME = "NextCode Infotech";

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
    subItems: [
      {
        icon: HiOutlinePaintBrush,
        label: "UI/UX Design",
        href: "/ui-ux",
      },
      {
        icon: FaLaptopCode,
        label: "Web Development",
        href: "/web",
      },
      {
        icon: AiOutlineAndroid,
        label: "App Development",
        href: "/app",
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const technologies = [
  {
    name: "ReactJS",
    image: "/technologies/reactjs.png",
    category: "Frontend",
  },
  {
    name: "Android Studio",
    image: "/technologies/android-studio--v3.png",
    category: "Frontend",
  },
  {
    name: "Flutter",
    image: "/technologies/flutter.png",
    category: "Frontend",
  },
  {
    name: "React Native",
    image: "/technologies/react-native.png",
    category: "Frontend",
  },
  {
    name: "Java",
    image: "/technologies/java.png",
    category: "Frontend",
  },
  {
    name: "Node.js",
    image: "/technologies/node-js.png",
    category: "Backend",
  },
  {
    name: "Express.js",
    image: "/technologies/express-js.png",
    category: "Backend",
  },
  {
    name: "Python",
    image: "/technologies/python.png",
    category: "Backend",
  },
  {
    name: "Laravel",
    image: "/technologies/laravel.png",
    category: "Backend",
  },
  {
    name: "CodeIgniter",
    image: "/technologies/codeigniter.png",
    category: "Backend",
  },
  {
    name: "MongoDB",
    image: "/technologies/mongo.png",
    category: "Database",
  },
  {
    name: "MySQL",
    image: "/technologies/mysql-logo.png",
    category: "Database",
  },
  {
    name: "Firebase",
    image: "/technologies/firebase.png",
    category: "Database",
  },
  {
    name: "DynamoDB",
    image: "/technologies/dynamodb.png",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    image: "/technologies/postgresql.png",
    category: "Database",
  },
];

export const services = [
  {
    image: "/icons/brush.svg",
    title: "UI / UX Design",
    description:
      "Enhance your online experience with professional UI/UX design expertise.",
  },
  {
    image: "/icons/pcweb.png",
    title: "Web Development",
    description:
      "Take your web applications to the next level with professional web development expertise.",
  },
  {
    image: "/icons/mobile-code.png",
    title: "Mobile App Development",
    description:
      "Boost your brand with our specialized mobile app development solutions.",
  },
];

export const uiUxServices = [
  {
    image: "/icons/services/user-research.png",
    title: "User Research",
    description:
      "Gain deep insights into your users' needs and behaviors to inform user-centric design solutions.",
  },
  {
    image: "/icons/services/wireframe.png",
    title: "Wireframing & Prototyping",
    description:
      "Visualize and validate your ideas with interactive wireframes and prototypes before final development.",
  },
  {
    image: "/icons/services/Visualization.png",
    title: "Visual (UI) Design",
    description:
      "Create visually stunning and brand-aligned interfaces that captivate and engage users.",
  },
  {
    image: "/icons/services/user-experience.png",
    title: "UX Design",
    description:
      "Develop user-centric experiences that are intuitive, accessible, and enhance user satisfaction.",
  },
  {
    image: "/icons/services/interaction.png",
    title: "Interaction Design",
    description:
      "Design seamless interactions that add life to your digital products and keep users engaged.",
  },
  {
    image: "/icons/services/usability-testing.png",
    title: "Usability Testing",
    description:
      "Identify and fix potential issues with usability testing to ensure your product performs flawlessly.",
  },
  {
    image: "/icons/services/responsive-design.png",
    title: "Responsive Design",
    description:
      "Ensure your design works beautifully across all devices, from mobile to desktop.",
  },
  {
    image: "/icons/services/user-strategy.png",
    title: "UX Strategy & Consulting",
    description:
      "Align business goals with user needs through strategic UI/UX consulting services.",
  },
  {
    image: "/icons/services/support-services.png",
    title: "UI/UX Support & Maintenance",
    description:
      "Receive continuous support to keep your product up-to-date and optimized for user satisfaction.",
  },
];

export const webDevelopmentServices = [
  {
    image: "/icons/services/website.png",
    title: "Website Development",
    description:
      "Design and develop scalable, responsive, and SEO-friendly websites tailored to your business needs.",
  },
  {
    image: "/icons/services/cms.png",
    title: "CMS Development",
    description:
      "Build custom CMS solutions (WordPress, Headless CMS) for easy content management and control.",
  },
  {
    image: "/icons/services/e-com.png ",
    title: "E-commerce Development",
    description:
      "Create robust online stores with smooth payments, product catalogs, and a rich shopping experience.",
  },
  {
    image: "/icons/services/web-app.png",
    title: "Web Application Development",
    description:
      "Develop interactive and scalable web applications with modern technologies and frameworks.",
  },
  {
    image: "/icons/services/web-maintenance.png",
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance and technical support to keep your website up-to-date and performing optimally.",
  },
  {
    image: "/icons/services/seo.png",
    title: "SEO Optimization",
    description:
      "Improve visibility and search rankings by optimizing your website’s structure and performance.",
  },
];

export const designProcess = [
  {
    step: 1,
    title: "Discovery & Research",
    description:
      "We start by understanding your business goals, user needs, and market landscape. This involves user interviews, surveys, and competitive analysis to gather insights that inform the design direction.",
    image: "/icons/research.svg",
  },
  {
    step: 2,
    title: "Wireframing & Ideation",
    description:
      "Next, we create wireframes and user flow diagrams to map out the structure of the interface. This step ensures that the design is logically organized and sets the stage for the user experience.",
    image: "/icons/wireframe.svg",
  },
  {
    step: 3,
    title: "Prototyping",
    description:
      "We build interactive prototypes to simulate the user experience and gather feedback. This allows for early testing of usability and functionality, helping refine the design before final development.",
    image: "/icons/prototype.svg",
  },
  {
    step: 4,
    title: "UI Design",
    description:
      "Our team crafts high-fidelity visuals that align with your brand identity. This step includes selecting color schemes, typography, and other visual elements to create an appealing interface.",
    image: "/icons/ui-design.svg",
  },
  {
    step: 5,
    title: "User Testing",
    description:
      "We test the design with real users to collect feedback and identify potential pain points. This data-driven step ensures that the design meets user expectations and is optimized for usability.",
    image: "/icons/usability-testing.svg",
  },
  {
    step: 6,
    title: "Iteration & Refinement",
    description:
      "Based on user feedback, we iterate and refine the design to address any issues or make enhancements. This ensures the final product is user-friendly and aligned with project goals.",
    image: "/icons/iteration.svg",
  },
  {
    step: 7,
    title: "Development Handoff",
    description:
      "Once the design is finalized, we prepare all assets and documentation for a seamless handoff to the development team, ensuring clarity and continuity for implementation.",
    image: "/icons/handoff.svg",
  },
  {
    step: 8,
    title: "Launch & Support",
    description:
      "After development, we assist with the launch and offer ongoing support to address any post-launch needs or improvements, keeping the product up-to-date and optimized.",
    image: "/icons/launch-support.svg",
  },
];

export const webDevelopmentProcess = [
  {
    step: 1,
    title: "Requirements & Analysis",
    description:
      "We gather your goals, requirements, and target audience details to align the website with your business needs.",
  },
  {
    step: 2,
    title: "Planning & Wireframing",
    description:
      "We create a clear site structure and wireframes to visualize page layouts and functionality.",
  },
  {
    step: 3,
    title: "Design Conversion",
    description:
      "Designs are converted into pixel-perfect, responsive code ready for development.",
  },
  {
    step: 4,
    title: "Development",
    description:
      "We implement scalable code, integrate back-end services, and connect databases to bring your site to life.",
  },
  {
    step: 5,
    title: "Quality Assurance",
    description:
      "We thoroughly test for bugs, performance, and compatibility across all devices and browsers.",
  },
  {
    step: 6,
    title: "Client Review & Approval",
    description:
      "We share a staging link with you to review, provide feedback, and approve the final product.",
  },
  {
    step: 7,
    title: "Performance Optimization",
    description:
      "We fine-tune code and delivery to maximize loading speeds, SEO, and overall performance.",
  },
  {
    step: 8,
    title: "Launch",
    description:
      "Once approved and tested, we deploy your website to a live environment smoothly.",
  },
  {
    step: 9,
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance and technical support to keep your website up-to-date and performing optimally.",
  },
];

export const portfolio = [
  {
    title: "Traveldate",
    image: "/portfolio/traveldate.png",
    url: "https://www.traveldate.org/",
    category: "Web Development",
  },
  {
    title: "Vianne",
    image: "/portfolio/vianne.png",
    url: "https://viannejewels.com/",
    category: "Web Development",
  },
  {
    title: "CanConnect",
    image: "/portfolio/canconnect.png",
    url: "https://development.canconnect.co/",
    category: "Web Development",
  },
  {
    title: "Ad Opus",
    image: "/portfolio/adopus.png",
    url: "http://adopusrecruitment.com/",
    category: "Web Development",
  },
  {
    title: "Stepmed Pharma",
    image: "/portfolio/stepmed.png",
    url: "https://stepmedpharma.vercel.app/",
    category: "Web Development",
  },
  // {
  //   title: "Lakedesk",
  //   image: "/portfolio/lakedesk.png",
  //   url: "https://www.traveldate.org/",
  //   category: "Web Development"
  // },
  {
    title: "Health Monitor",
    image: "/portfolio/health-monitor.png",
    url: "",
    category: "App Development",
  },
  {
    title: "Step Counter",
    image: "/portfolio/step-counter.png",
    url: "",
    category: "App Development",
  },
];

export const links = {
  instagram: "https://www.instagram.com/nextcode_infotech/",
};

export const contact = {
  email: "info.nextcodeinfotech@gmail.com",
  phoneNumber: "+91 97379 39226",
  whatsappNumber: "919081133075",
  whatsappText:
    "I'd like to get more information about the services you provide.",
  address:
    "C-45, Sumeru City Mall, near Sudama Chowk, Mota Varachha, Surat - 394101",
  location: "https://maps.app.goo.gl/EASuMqkbhPJStd8r7",
};

export const pages = [
  {
    title: "Pages",
    children: [
      {
        title: "Portfolio",
        url: "/",
      },
      {
        title: "Technologies",
        url: "/about-us",
      },
      {
        title: "Services",
        url: "",
      },
    ],
  },
  {
    title: "Support",
    children: [
      {
        title: "About Us",
        url: "/",
      },
      {
        title: "Contact Us",
        url: "/",
      },
    ],
  },
];

export const metadata: Record<string, Metadata> = {
  home: {
    title: `${COMPANY_NAME} | Software Development Company`,
    description: `${COMPANY_NAME} provides cutting-edge software solutions, web development, and IT consulting to drive business success.`,
    keywords: ["Next.js", "React", "Software Development", "Web Solutions"],
  },
  "about-us": {
    title: `About - ${COMPANY_NAME} | Software Development Company`,
    description: `Learn more about ${COMPANY_NAME}, our mission, values, and expertise in delivering innovative digital solutions.`,
    keywords: ["Next.js", "React", "Company Profile", "Tech Industry"],
  },
  services: {
    title: `Services - ${COMPANY_NAME} | Software Development Company`,
    description: `Explore our professional services, including web development, mobile apps, UI/UX design, DevOps, and cloud solutions.`,
    keywords: [
      "Software Development",
      "Web Apps",
      "Mobile Development",
      "Cloud Computing",
    ],
  },
  industries: {
    title: `Industries - ${COMPANY_NAME} | Software Development Company`,
    description: `We serve various industries such as healthcare, finance, education, and e-commerce with tailored digital solutions.`,
    keywords: ["Industries", "Healthcare", "Fintech", "E-commerce"],
  },
  careers: {
    title: `Career - ${COMPANY_NAME} | Join Our Team`,
    description: `Join ${COMPANY_NAME} and build a rewarding career in software development, engineering, and technology innovation.`,
    keywords: ["Tech Careers", "Software Jobs", "Join Us", "Engineering Roles"],
  },
  contact: {
    title: `Contact - ${COMPANY_NAME} | Get in Touch`,
    description: `Have questions? Contact ${COMPANY_NAME} for business inquiries, partnerships, and support services.`,
    keywords: ["Contact Us", "Support", "Business Inquiry", "Tech Solutions"],
  },
  "technology/reactjs": {
    title: `React.js Development Services | ${COMPANY_NAME}`,
    description: `Build modern and scalable web applications with our expert React.js development services.`,
    keywords: ["React.js", "Frontend Development", "Web Apps", "JavaScript"],
  },
  "technology/angular": {
    title: `Angular Development Services | ${COMPANY_NAME}`,
    description: `Leverage Angular for dynamic, high-performance web applications tailored to your business needs.`,
    keywords: [
      "Angular",
      "Frontend Framework",
      "Enterprise Apps",
      "JavaScript",
    ],
  },
  "technology/nodejs": {
    title: `Node.js Development Services | ${COMPANY_NAME}`,
    description: `Develop fast and scalable backend applications with our Node.js development expertise.`,
    keywords: ["Node.js", "Backend Development", "API", "JavaScript"],
  },
  "technology/typescript": {
    title: `TypeScript Development Services | ${COMPANY_NAME}`,
    description: `Enhance code quality and maintainability with our TypeScript development services.`,
    keywords: ["TypeScript", "Strong Typing", "JavaScript", "Web Development"],
  },
  "technology/mongodb": {
    title: `MongoDB Development Services | ${COMPANY_NAME}`,
    description: `Harness the power of NoSQL with MongoDB for scalable and efficient database solutions.`,
    keywords: ["MongoDB", "NoSQL Database", "Big Data", "Cloud Databases"],
  },
  "technology/aws": {
    title: `AWS Cloud Solutions | ${COMPANY_NAME}`,
    description: `Optimize your infrastructure with AWS cloud computing services, ensuring scalability and security.`,
    keywords: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
  },
  "services/digital-product-design": {
    title: `Digital Product Design | ${COMPANY_NAME}`,
    description: `Create intuitive and engaging digital experiences with our UI/UX design and product development expertise.`,
    keywords: ["Digital Design", "UI/UX", "User Experience", "Prototyping"],
  },
  "services/software-architecture": {
    title: `Software Architecture | ${COMPANY_NAME}`,
    description: `Design robust and scalable software architectures that drive high-performance applications.`,
    keywords: ["Software Architecture", "Scalability", "Tech Infrastructure"],
  },
  "services/engineering": {
    title: `Engineering & DevOps | ${COMPANY_NAME}`,
    description: `Accelerate your development workflow with our DevOps engineering and automation solutions.`,
    keywords: ["DevOps", "Engineering", "Cloud Solutions", "CI/CD"],
  },
  "services/mobile-app-development": {
    title: `Mobile App Development | ${COMPANY_NAME}`,
    description: `Build high-quality iOS and Android mobile apps with our expert development services.`,
    keywords: ["Mobile Apps", "iOS Development", "Android Development"],
  },
  "industries/healthcare": {
    title: `Healthcare Software Solutions | ${COMPANY_NAME}`,
    description: `Transform patient care with our healthcare software solutions, including EHR and telemedicine platforms.`,
    keywords: [
      "Healthcare Tech",
      "EHR Systems",
      "Telemedicine",
      "Medical Apps",
    ],
  },
  "industries/e-commerce": {
    title: `E-Commerce Solutions | ${COMPANY_NAME}`,
    description: `Drive online sales with our custom e-commerce development services for modern businesses.`,
    keywords: ["E-Commerce", "Online Stores", "Shopify", "Magento"],
  },
  "industries/digital-banking": {
    title: `Digital Banking Solutions | ${COMPANY_NAME}`,
    description: `Empower financial institutions with secure and efficient digital banking platforms.`,
    keywords: ["Fintech", "Digital Banking", "Payment Solutions"],
  },
};
