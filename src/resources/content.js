import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Anmol",
  lastName: "Tiwari",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "UI/UX Designer & Frontend Developer",
  avatar: "/images/avatar.jpg", // Replace with your image in /public/images/
  email: "oanmoltiwari7@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about frontend, UI/UX, and my experience with modern
      web development.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/anmoltiwari0712",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anmoltiwari0712",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting seamless digital experiences with design & code</>,
  featured: {
    display: true,
    title: (
      <>
        Featured project: <strong className="ml-4">AptiQuest</strong>
      </>
    ),
    href: "/work/aptiquest-aptitude-platform",
  },
  subline: (
    <>
      I'm Anmol, a UI/UX designer and frontend developer passionate about
      building intuitive
      <br /> and impactful digital interfaces for real-world users.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Anmol is a design-focused frontend developer with a passion for
        intuitive interfaces, responsive design, and solving real-world problems
        through digital products. He blends creative UI/UX design with strong
        frontend skills using React, Next.js, and design systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Sedin Technologies",
        timeframe: "Aug 2023 – Sep 2023",
        role: "UI/UX Design Intern",
        achievements: [
          <>
            Gained hands-on experience with Figma, wireframing, and real-world
            design practices.
          </>,
          <>
            Worked on interface design for internal product workflows and
            learned team collaboration workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Microsoft Learn Student Ambassador",
        timeframe: "Apr 2023 – Present",
        role: "Beta Student Ambassador",
        achievements: [
          <>
            Organized events and sessions to promote Microsoft technologies and
            community learning.
          </>,
          <>
            Created design-based learning materials and helped peers explore
            tech tools and careers.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "VIT Vellore (B.Tech CSE)",
        description: <>Pursuing Computer Science Engineering (2021–2025).</>,
      },
      {
        name: "Alagar Public School (CBSE)",
        description: <>Class XII – 79.6%, Class X – 87.8%</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Figma & UI/UX Design",
        description: (
          <>
            Designing modern, clean, and intuitive interfaces using Figma & UX
            tools.
          </>
        ),
        images: [],
      },
      {
        title: "React & Next.js",
        description: (
          <>
            Frontend development with a focus on component reusability and
            performance.
          </>
        ),
        images: [],
      },
      {
        title: "HTML, CSS, JavaScript",
        description: (
          <>Core frontend tech stack to bring designs to life on the web.</>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writings on tech and design",
  description: `Read what ${person.name} has been learning recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Personal projects and collaborations by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A creative showcase by ${person.name}`,
  images: [], // Optional: Add your own images in /public/images/gallery
};

export { person, social, newsletter, home, about, blog, work, gallery };
