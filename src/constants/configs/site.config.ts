export type AvailabilityStatus = "available" | "busy" | "offline" | "maintenance";


export const AVAILABILITY_CONFIG: Record<
  AvailabilityStatus,
  { label: string; }
> = {
  available: { label: "available for work" },
  busy: { label: "currently busy" },
  offline: { label: "unavailable" },
  maintenance: { label: "under maintenance" },
};


export const SITE = {
  meta: {
    title: "Teezy",
    description:
      "Portfolio of Laurence Lester Cariño — Full Stack Developer building clean, performant web applications.",
    keywords: [
      "full stack developer",
      "web developer",
      "portfolio",
      "React developer",
      "TypeScript",
    ],
    ogImage: "/images/og-image.jpg",
    siteUrl: "http://localhost:3000/",
    twitterHandle: "@your-username",
  },

  favicon: {
    light: "/log-dark.svg",
    dark: "/logo-dark.svg",
    ico: "/favicon.ico",
  },

  profile: {
    name: "Laurence Lester Cariño", // Hero heading + likely SEO/meta later
    title: "Full Stack Developer / Aspiring Software Engineer", // Hero + SEO

    cv: {
      // used by both CTA (download button) and Navbar (mobile CV button)
      path: "/documents/CV.pdf",
      filename: "Laurence_Lester_Carino_CV.pdf",
    },

    availability: {
      status: "maintenance" as AvailabilityStatus,
    },

  },

  socials: [
    { label: "github", href: "https://github.com/your-username" },
    { label: "linkedin", href: "https://linkedin.com/in/your-username" },
    { label: "x", href: "https://x.com/your-username" },
  ],

} as const