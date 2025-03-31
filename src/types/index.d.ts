export type Repo = {
  name: string;
  url: string;
  stargazerCount: number;
  description: string;
  forkCount: number;
  homepageUrl: string;
  languages: {
    name: string;
    color: string;
  }[];
};

export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  contact: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    email: string;
    resume: string;
  };
};
