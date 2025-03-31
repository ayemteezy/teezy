import { TopTracks } from "./components/about/components/personal-life/components/top-tracks";
import {
  CodeIcon,
  CoffeeIcon,
  CpuIcon,
  HeartIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ServerIcon,
  MusicIcon,
  BookOpenIcon,
  TvIcon,
  GlobeIcon,
  Gamepad2Icon,
  AwardIcon,
} from "lucide-react";

import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
        progress: 90,
      },
      {
        name: "TailwindCSS",
        progress: 90,
      },
      {
        name: "Framer Motion",
        progress: 90,
      },
      {
        name: "React Native",
        progress: 90,
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
        progress: 80,
      },
      {
        name: "NeonDB",
        progress: 75,
      },
      {
        name: "Hono.js",
        progress: 75,
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
        progress: 80,
      },
      {
        name: "CI/CD (GitHub Actions)",
        progress: 75,
      },
    ],
    libTitle: "Development, Deployment & APIs",
    lib: ["CloudFlare", "Bun", "Postman", "NodeMailer", "Resend", "VS Code"],
  },
];

export const contacts = [
  {
    icon: MailIcon,
    title: "Email",
    details: `${siteConfig.links.email}`,
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    details: `${siteConfig.contact}`,
  },
  {
    icon: MapPinIcon,
    title: "Location",
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
    image: "/travel.jpg",
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
    image: "/music.jpg",
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
    image: "/watching.jpg",
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
    image: "/reading.jpg",
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
    image: "/gaming.jpg",
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
    image: "/eleceed.png",
    title: "Eleceed",
    author: "Son Je-Ho (손제호)",
    type: "manhwa",
    quote: "True strength is shown through kindness.",
  },
  {
    image: "/paper-towns.png",
    title: "Paper Towns",
    author: "John Green",
    type: "Novel",
    quote: "A person is simply a person.",
  },
  {
    image: "/solo-leveling.png",
    title: "Solo Leveling",
    author: "Chugong",
    type: "manhwa",
    quote: "I'll show you what it means to be the strongest hunter.",
  },
  {
    image: "/blue-period.png",
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
  "Outran the cops in a high-speed chase in GTA RP.",
  "Successfully integrated Drizzle ORM with Neon DB and Convex DB.",
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
    question: "Which programming language do I use the most?",
    options: ["TypeScript", "Python", "C++", "Java"],
    correctAnswer: 0,
  },
  {
    question: "What is the name of my Spotify playlist?",
    options: ["Chill Vibes", "her name", "Code Beats", "Lo-Fi Lounge"],
    correctAnswer: 1,
  },
  {
    question: "Which project am I currently working on?",
    options: [
      "E-commerce app",
      "Wattpad clone",
      "AI Chatbot",
      "Fitness tracker",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which game best describes my GTA RP character?",
    options: [
      "Need for Speed",
      "GTA Online",
      "Euro Truck Simulator",
      "F1 Racing",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What social media platform do I reinstall just to complain about it?",
    options: ["Instagram", "TikTok", "Twitter", "Reddit"],
    correctAnswer: 2,
  },
  {
    question: "What is my faction in Torn?",
    options: ["Dark Matter", "Torn Faction", "Illuminati", "Blood Brothers"],
    correctAnswer: 1,
  },
  {
    question: "What element of art do I always mention first?",
    options: ["Perspective", "Illusion", "Composition", "Symmetry"],
    correctAnswer: 1,
  },
  {
    question: "Which bot hosts my 'Tap to Earn' game?",
    options: [
      "@dogecoin_bot",
      "@iamdog_bot",
      "@tapmaster_bot",
      "@crypto_earn_bot",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is my go-to ORM for my projects?",
    options: ["Prisma", "Drizzle ORM", "TypeORM", "Sequelize"],
    correctAnswer: 1,
  },
  {
    question: "Which database am I using for real-time features?",
    options: ["MongoDB", "PostgreSQL", "Neon DB", "Firebase"],
    correctAnswer: 2,
  },
  {
    question: "What is my favorite way to escape the police in GTA RP?",
    options: [
      "Hiding in an alley",
      "Bribing them",
      "Insane car chases",
      "Switching cars",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which feature am I adding to my Wattpad clone for collaboration?",
    options: [
      "Live chat",
      "Co-writing with roles",
      "Story AI generator",
      "Voice narration",
    ],
    correctAnswer: 1,
  },
  {
    question: "What type of content will my Wattpad clone NOT have (for now)?",
    options: ["Monetization", "Genres", "Bookmarks", "Reading lists"],
    correctAnswer: 0,
  },
  {
    question: "What color theme am I using for my portfolio?",
    options: [
      "Black and Red",
      "Black and Blue",
      "White and Gold",
      "Dark Green",
    ],
    correctAnswer: 1,
  },
  {
    question: "What am I using to host images in my projects?",
    options: ["Cloudinary", "Firebase Storage", "AWS S3", "Imgur"],
    correctAnswer: 0,
  },
  {
    question: "What database am I using for my Wattpad clone?",
    options: ["Firebase", "Neon DB", "Supabase", "PlanetScale"],
    correctAnswer: 1,
  },
  {
    question:
      "What feature am I considering for my Wattpad clone's premium version?",
    options: [
      "AI Story Writing",
      "Offline Reading",
      "Voice Acting",
      "NFT Stories",
    ],
    correctAnswer: 1,
  },
  {
    question: "What am I adding to my Wattpad clone to enhance engagement?",
    options: [
      "Polls & Reader Choices",
      "NFT-based Stories",
      "Crypto Rewards",
      "AI Reviews",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which app am I making to track ratings and reviews?",
    options: [
      "Game Tracker",
      "Story Hub",
      "Review Haven",
      "All-in-One Rating App",
    ],
    correctAnswer: 3,
  },
  {
    question: "What kind of lists will my All-in-One Rating App support?",
    options: [
      "Only anime",
      "Only books",
      "Custom lists",
      "Friends' recommendations only",
    ],
    correctAnswer: 2,
  },
  {
    question: "What am I using to implement my Trello clone?",
    options: ["Vue.js", "React", "Next.js", "Angular"],
    correctAnswer: 2,
  },
  {
    question: "What UI library do I use in my projects?",
    options: ["Material UI", "ShadCN", "Chakra UI", "Bootstrap"],
    correctAnswer: 1,
  },
  {
    question: "What is the main purpose of my IoT earthquake alarm project?",
    options: [
      "To detect intruders",
      "To predict weather",
      "To warn about earthquakes",
      "To measure humidity",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is my smart voting system missing?",
    options: [
      "Biometrics",
      "Secure encryption",
      "Offline support",
      "Multiple voting methods",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of these is NOT part of my reusable relief box system?",
    options: [
      "RFID Access",
      "GPS Tracking",
      "Temperature Sensor",
      "Inventory Management",
    ],
    correctAnswer: 2,
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
