import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  rv_logo,
  chaaya_logo,
  toyoto,

  uberclone,
  loanguru,
  livedocs,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AI-ML Enthusiast",
    icon: backend,
  },
  {
    title: "Basketball Player",
    icon: creator,
  },
  {
    title: "Public Speaker ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Placement Coordinator",
    company_name: "R V Institute of Technology and Management",
    icon: rv_logo,
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      "Led and coordinated placement drives across 3+ RV institutions, boosting eligible student participation by 20%.",
      "Acted as the primary liaison between students and recruiters, resolving queries and ensuring smooth communication.",
      "Managed and streamlined large-scale data collection, validation, and reporting for placement drives.",

    ],
  },
  {
    title: "Club President",
    company_name: "Chaaya-Media and Mass Communication Club",
    icon: chaaya_logo,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Organized exclusive workshops on content writing & public speaking led by The Hindu editor, giving members professional exposure.",
      "Hosted and produced a podcast with the Principal on soft skills & leadership, bridging academia with student learning.",
      "Directed multifunctional creative teams (Content, PR, Design, Video) to deliver high-quality media projects and campus-wide campaigns",
      "Spearheaded events and recruitment drives, building Chaaya into RVITM’s go-to platform for creativity and communication.",
    ],
  },
  {
    title: "Technical Mentor",
    company_name: "Toyoto",
    icon: toyoto,
    iconBg: "#383E56",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Guided student teams in project development, real-time debugging, and solution refinement across domains.",
      "Mentored participants on AI concepts, model integration, and team coordination.",
      "Supported hardware projects including Arduino and IoT-based robot car development, providing technical direction and troubleshooting assistance",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Led the placement drives efficiently, improving eligible student participation by 20% and ensuring smooth communication between students and recruiters",
    name: "RVITM Students",
    designation: "Student Placement Coordinator",
    company: "RVITM",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Organized workshops, podcasts, and campus-wide campaigns, providing members with professional exposure and enhancing the club’s engagement.",
    name: "Chaaya Club Members",
    designation: "Club President",
    company: "Chaaya-Media and Mass Communication Club",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Provided guidance on project development, AI integration, and hardware projects, enabling student teams to deliver high-quality solutions effectively.!",
    name: "Toyoto Participants",
    designation: "Technical Mentor",
    company: "Toyoto Hackothon",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Loan Guru",
    description:
      "Developed a web-based platform that automates credit score prediction and loan eligibility checks. It streamlines lending decisions by providing secure, data-driven insights and personalized loan offers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: loanguru,
    source_code_link: "https://github.com/Apekshajawali/LoanGuru?tab=readme-ov-file",
  },
  {
    name: "Uber Clone",
    description:
      "Developed a secure ride-hailing application with email/Google OAuth authentication, live location tracking, Google Maps/Places search, and real-time ride booking.",
    tags: [
      
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Zustland",
        color: "pink-text-gradient",
      },
    ],
    image: uberclone,
    //source_code_link: "https://github.com/",
  },

  {
    name: "Live Docs",
    description:
      "Built LiveDocs, a Google Docs clone with real-time collaboration using Next.js, Liveblocks, and TailwindCSS. Features include secure  document management, sharing, comments, and live presence indicators.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "ShadCN",
        color: "red-text-gradient",
      },
    ],
    image: livedocs,
    //source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
