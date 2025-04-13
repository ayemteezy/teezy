import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Manrope, Urbanist } from "next/font/google";

import { BackToTop } from "@/components/common/back-to-top";
import { Socials } from "@/components/common/socials";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ToastProvider } from "@/providers/toast-provider";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Zod",
    "Resend",
    "Magic UI",
    "Radix UI",
    "shadcn/ui",
    "React Query",
    "Portfolio",
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ayemteezy",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          manrope.variable,
          urbanist.variable,
          "font-manrope antialiased flex flex-col h-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ToastProvider />
          {children}
          <BackToTop />
          <Socials />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
