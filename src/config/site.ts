// site-config.ts
import { SiteConfig } from "@/types";
import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "Teezy",
  author: "Laurence Lester Cariño",
  description: "A modern and minimal personal website built with Next.js.",
  contact: "(+63) 991 969 3110",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/logo.svg`,
  links: {
    github: "https://github.com/ayemteezy",
    facebook: "https://facebook.com/krtcrvy",
    twitter: "https://x.com/ayemteezy",
    linkedin:
      "https://www.linkedin.com/in/laurence-lester-cari%C3%B1o-217b02221/",
    email: "laurencelestercarino@gmail.com",
    resume: "",
  },
};
