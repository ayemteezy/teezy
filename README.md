# Personal Portfolio

This is my personal portfolio website built with [Next.js](https://nextjs.org), showcasing my work, skills, and projects.

## 🚀 Getting Started

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/ayemteezy/your-portfolio.git
cd your-portfolio
```

### 2. Install Dependencies

```bash
npm install  # or yarn install | pnpm install | bun install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the necessary environment variables:

```env
GH_ACCESS_TOKEN=your_github_access_token
GH_USERNAME=your_github_username
NEXT_PUBLIC_APP_URL=your_app_url
RESEND_API_KEY=your_resend_api_key
```

Modify these values based on your setup.

### 4. Start the Development Server

```bash
npm run dev  # or yarn dev | pnpm dev | bun dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## ✨ Features

- Built with **Next.js** for a fast and optimized experience
- **Responsive design** for seamless browsing on any device
- **Dark mode & Light mode** for better accessibility
- Showcases **projects, skills, and experience**
- Integrated **contact form** for easy communication

## 🛠 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## ⚙️ Site Configuration

You can customize your site settings in `site-config.ts`:

```ts
import { SiteConfig } from "@/types";
import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "Your Website Name",
  author: "Your Name",
  description: "Your Website Description",
  contact: "Your Contact Info",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/logo.svg`,
  links: {
    github: "Your GitHub URL",
    facebook: "Your Facebook URL",
    twitter: "Your Twitter URL",
    linkedin: "Your LinkedIn URL",
    email: "Your Email Address",
    resume: "Your Resume Link",
  },
};
```

Modify these settings to personalize your portfolio.

## 📦 Deployment

The portfolio is deployed on **Vercel**. To deploy your own version:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Deploy with one click!

Check out the official [Next.js deployment guide](https://nextjs.org/docs/deployment) for more details.

## 📄 License

This project is open-source and available under the **MIT License**.

---

🚀 **Let's connect!** Feel free to check out my portfolio and get in touch!
