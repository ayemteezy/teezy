import {
  AwardIcon,
  BookOpenIcon,
  CodeIcon,
  CoffeeIcon,
  CpuIcon,
  Gamepad2Icon,
  GlobeIcon,
  HeartIcon,
  MailIcon,
  MapPinIcon,
  MusicIcon,
  PhoneIcon,
  ServerIcon,
  TvIcon,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { siteConfig } from "./config/site";

export const links = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

export const tabs = [
  {
    icon: CodeIcon,
    name: "Tech Stack",
    title: "My Tech Stack",
    description: "The technologies and tools I use to bring ideas to life.",
  },
  {
    icon: AwardIcon,
    name: "Certificates",
    title: "My Certifications",
    description:
      "Professional certifications and webinar-based trainings that validate my expertise and commitment to continuous learning.",
  },
  {
    icon: HeartIcon,
    name: "Passion",
    title: "My Hobbies & Interests",
    description:
      "Drag these cards around to explore my interests outside of coding! Click a card to flip it and discover more details.",
  },
  {
    icon: CoffeeIcon,
    name: "Personal Life",
    title: "Beyond Code",
    description:
      "Beyond coding, here's a glimpse into who I am, where I live, and what makes me unique.",
  },
];

export const techStack = [
  {
    icon: CodeIcon,
    name: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
    details: [
      {
        name: "React.js",
        progress: 90,
      },
      {
        name: "Next.js",
        progress: 80,
      },
      {
        name: "TailwindCSS",
        progress: 90,
      },
      {
        name: "Framer Motion",
        progress: 65,
      },
      {
        name: "React Native",
        progress: 75,
      },
    ],
    libTitle: "Frameworks & Libraries",
    lib: [
      "JavaScript",
      "TypeScript",
      "Radix UI",
      "ShadCN UI",
      "Zod",
      "TanStack Query",
    ],
  },
  {
    icon: ServerIcon,
    name: "Backend Development",
    description: "Building robust server-side applications and APIs",
    details: [
      {
        name: "Node.js",
        progress: 85,
      },
      {
        name: "Next.js API Routes",
        progress: 80,
      },
      {
        name: "Drizzle ORM",
        progress: 85,
      },
      {
        name: "NeonDB",
        progress: 75,
      },
      {
        name: "Hono.js",
        progress: 60,
      },
    ],
    libTitle: "Databases & ORMs",
    lib: [
      "Prisma ORM",
      "Convex DB",
      "Supabase",
      "Firebase",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
      "PHP",
      "Laravel",
    ],
  },
  {
    icon: CpuIcon,
    name: "Tools & DevOps",
    description:
      "Software and services for development, deployment, and collaboration",
    details: [
      {
        name: "Git & GitHub",
        progress: 95,
      },
      {
        name: "Vercel",
        progress: 90,
      },
      {
        name: "Figma",
        progress: 85,
      },
      {
        name: "Docker",
        progress: 60,
      },
      {
        name: "CI/CD (GitHub Actions)",
        progress: 65,
      },
    ],
    libTitle: "Development, Deployment & APIs",
    lib: ["CloudFlare", "Bun", "Postman", "NodeMailer", "Resend", "VS Code"],
  },
];

export const contacts = [
  {
    icon: MailIcon,
    details: `${siteConfig.links.email}`,
  },
  {
    icon: PhoneIcon,
    details: `${siteConfig.contact}`,
  },
  {
    icon: MapPinIcon,
    details: "Caloocan City, Philippines",
  },
];

export const socialLinks = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    link: `${siteConfig.links.linkedin}`,
  },
  {
    icon: FiGithub,
    name: "Github",
    link: `${siteConfig.links.github}`,
  },
  {
    icon: FaXTwitter,
    name: "X",
    link: `${siteConfig.links.twitter}`,
  },
];

export const hobbies = [
  {
    title: "Traveling",
    icon: GlobeIcon,
    description: "Exploring new places, cultures, and cuisines.",
    image: "/images/travel.jpg",
    detailedInfo: {
      experience: "I love road trips and backpacking adventures.",
      funFact:
        "I haven't traveled internationally yet, but I've explored many local cities!",
      startedYear: "2015",
    },
    initialPosition: { x: 150, y: 250 },
    zIndex: 2,
  },

  {
    icon: MusicIcon,
    title: "Music",
    description: "Listening to various genres and discovering new artists.",
    image: "/images/music.jpg",
    detailedInfo: {
      experience:
        "I've been a music enthusiast for years, always exploring different sounds.",
      funFact: "I can sing and play guitar, drums, and piano.",
      startedYear: "2005",
    },
    initialPosition: { x: 100, y: 150 },
    zIndex: 4,
  },
  {
    title: "Watching",
    icon: TvIcon,
    description: "Binge-watching movies, series, and anime.",
    image: "/images/watching.jpg",
    detailedInfo: {
      experience:
        "From Hollywood blockbusters to indie films, I enjoy them all.",
      funFact: "I've watched over 500 movies and counting!",
      startedYear: "2012",
    },
    initialPosition: { x: 300, y: 200 },
    zIndex: 3,
  },
  {
    title: "Reading",
    icon: BookOpenIcon,
    description: "Diving into novels, manhwa, and manga.",
    image: "/images/reading.jpg",
    detailedInfo: {
      experience: "I read both fiction and non-fiction, especially fantasy.",
      funFact:
        "I enjoy reading novels, manhwa, and manga. My favorite genre is fantasy-romance.",
      startedYear: "2010",
    },
    initialPosition: { x: 200, y: 100 },
    zIndex: 2,
  },
  {
    title: "Gaming",
    icon: Gamepad2Icon,
    description: "Playing video games across different platforms.",
    image: "/images/gaming.jpg",
    detailedInfo: {
      experience: "Competitive and casual gaming, from FPS to RPGs.",
      funFact: "I once played a game for 12 hours straight.",
      startedYear: "2008",
    },
    initialPosition: { x: 250, y: 50 },
    zIndex: 1,
  },
];

export const books = [
  {
    image: "/images/eleceed.png",
    title: "Eleceed",
    author: "Son Je-Ho (손제호)",
    type: "manhwa",
    quote: "True strength is shown through kindness.",
  },
  {
    image: "/images/paper-towns.png",
    title: "Paper Towns",
    author: "John Green",
    type: "Novel",
    quote: "A person is simply a person.",
  },
  {
    image: "/images/solo-leveling.png",
    title: "Solo Leveling",
    author: "Chugong",
    type: "manhwa",
    quote: "I'll show you what it means to be the strongest hunter.",
  },
  {
    image: "/images/blue-period.png",
    title: "Blue Period",
    author: "Tsubasa Yamaguchi",
    type: "manga",
    quote: "Art is the exploration of your inner world.",
  },
];

export const genres = [
  "Fantasy",
  "Romance",
  "Mystery/Thriller",
  "Action",
  "Documentaries",
];

export const languages = [
  {
    name: "Filipino",
    level: 100,
  },
  {
    name: "English",
    level: 80,
  },
  {
    name: "Spanish",
    level: 25,
  },
];

export const achievements = [
  "Graduated college and officially a fresh graduate.",
  "Built a fullstack website on my own.",
];

export const bucketList = [
  "Amsterdam",
  "California",
  "New York",
  "Japan",
  "South Korea",
  "London",
];

export const topTracks = [
  { name: "Twice - Fancy", src: "/music/fancy.mp3" },
  { name: "UI - Love Wins All", src: "/music/love-wins-all.mp3" },
  { name: "TJ Monterde & KZ Tandingan - Palagi", src: "/music/palagi.mp3" },
];

export const soundTracks = [
  "Ambient",
  "Jazz",
  "Lo-Fi Beats",
  "Classical Music",
];

export const miniGameQuestions = [
  {
    question: "What is my favorite flower?",
    options: ["Rose", "Sunflower", "Daisy", "Tulip"],
    correctAnswer: 3,
  },
  {
    question:
      "Which social media app do I reinstall just to complain about it?",
    options: ["Instagram", "TikTok", "Twitter", "Reddit"],
    correctAnswer: 2,
  },
  {
    question: "What is the name of my Spotify playlist?",
    options: ["Chill Vibes", "her name", "Code Beats", "Lo-Fi Lounge"],
    correctAnswer: 1,
  },
  {
    question: "What programming language do I use the most?",
    options: ["TypeScript", "Python", "C++", "Java"],
    correctAnswer: 0,
  },
  {
    question: "What is my go-to ORM?",
    options: ["Prisma", "Drizzle ORM", "TypeORM", "Sequelize"],
    correctAnswer: 1,
  },
  {
    question: "What do I use to host images in my projects?",
    options: ["Cloudinary", "Firebase Storage", "AWS S3", "UploadThing"],
    correctAnswer: 3,
  },
  {
    question: "What UI library do I use in my projects?",
    options: ["Material UI", "ShadCN", "Chakra UI", "Bootstrap"],
    correctAnswer: 1,
  },
  {
    question: "Which database do I prefer for real-time functionality?",
    options: ["MongoDB", "PostgreSQL", "Convex DB", "Firebase"],
    correctAnswer: 2,
  },
  {
    question: "What do I struggle with the most?",
    options: ["Waking up early", "Laundry", "Remembering names", "Directions"],
    correctAnswer: 1,
  },
  {
    question: "What is my preferred color theme?",
    options: [
      "Black and Red",
      "Black and Blue",
      "White and Gold",
      "Dark Green",
    ],
    correctAnswer: 1,
  },
  {
    question: "What do I prefer to drink?",
    options: ["Coffee", "Tea", "Soda", "Juice"],
    correctAnswer: 0,
  },
  {
    question: "Which season do I like the most?",
    options: ["Summer", "Winter", "Spring", "Rainy"],
    correctAnswer: 3,
  },
  {
    question: "Which do I prefer: movies or series?",
    options: ["Movies", "Series"],
    correctAnswer: 1,
  },
  {
    question: "What type of music do I listen to the most?",
    options: ["Pop", "Lo-Fi", "Rock", "EDM"],
    correctAnswer: 2,
  },
  {
    question: "How do I like my pizza?",
    options: ["With pineapple", "No pineapple"],
    correctAnswer: 0,
  },
  {
    question: "Which tool do I prefer for version control?",
    options: ["GitHub", "GitLab", "Bitbucket", "SVN"],
    correctAnswer: 0,
  },
  {
    question: "Which IDE or code editor do I use the most?",
    options: ["VS Code", "IntelliJ IDEA", "WebStorm", "Vim"],
    correctAnswer: 0,
  },
  {
    question: "What is my preferred way of deploying web apps?",
    options: ["Vercel", "Netlify", "AWS", "DigitalOcean"],
    correctAnswer: 0,
  },
  {
    question: "Which Linux distro do I like the most?",
    options: ["Ubuntu", "Arch Linux", "Fedora", "Debian"],
    correctAnswer: 0,
  },
];

export const certificates = [
  {
    name: "SAAS vs Traditional Software: Why Cloud is the Future",
    src: "/docs/webinar1.png",
  },
  {
    name: "Leverage AI to your Marketing Skills",
    src: "/docs/webinar2.png",
  },
  {
    name: "Artificial Intelligence & Prompt Engineering in Digital Literacy",
    src: "/docs/webinar3.png",
  },
  {
    name: "The Convergence of AI, Fintech, and Sustainable Finance",
    src: "/docs/webinar4.png",
  },
];
