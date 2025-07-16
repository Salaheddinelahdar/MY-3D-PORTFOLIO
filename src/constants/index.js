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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "UI | UX Designer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "React.js Developer",
    company_name: "University Project – Fitness Ecommerce Store",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2024 - February 2025",
    points: [
      "Developed and maintained a full-stack e-commerce web application for selling fitness products using React.js, Tailwind CSS, and MongoDB..",
      "Collaborated with peers and instructors to design intuitive UI components and implement efficient data handling for product listings, cart, and user authentication.",
      "Applied responsive design principles to ensure seamless user experience across devices.",
      "Followed best practices in component-based architecture, and participated in testing and debugging to deliver a polished and functional project.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "University Project – Stock Management System",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "February 2025 - April 2025",
    points: [
      "Developed a full-stack web application to manage and track university inventory using React.js for the frontend, Tailwind CSS for styling, and Laravel for backend logic and database management.",
      "Implemented features such as item registration, stock tracking, and user role management to streamline administrative tasks.",
      "Ensured a clean and responsive user interface for ease of use across devices.",
      "Focused on secure API integration, modular code structure, and maintainability for long-term use.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "OCP Groupe – Machine Management System",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2025 - May 2025",
    points: [
      "Built a custom web application for managing industrial machines at OCP Groupe using React.js, Tailwind CSS, and Laravel.",
      "Developed modules for machine tracking, maintenance scheduling, and status monitoring to enhance operational visibility and reduce downtime.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fitness Store",
    description:
      "E-commerce web application for selling fitness products, built as a university project. Users can browse products, manage their cart, and place orders in a responsive, modern UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "University Stock Management System",
    description:
      "Web-based platform developed to help university staff manage inventory efficiently. Includes item tracking, user roles, and real-time updates to streamline stock control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Salaheddinelahdar/OFFPT-MANAGMENT-SALAH-user.git",
  },
  {
    name: "OCP Groupe – Machine Management System",
    description:
      "A web-based platform designed to help OCP Groupe manage their industrial machines more effectively. Features include real-time monitoring, maintenance scheduling, and performance analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Salaheddinelahdar/OCP-PROJECT-FINAL.git",
  },
];

export { services, technologies, experiences, testimonials, projects };