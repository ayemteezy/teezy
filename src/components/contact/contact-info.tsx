"use client";

import Image from "next/image";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";

import { Button } from "../ui/button";
import { BlurFade } from "../magicui/blur-fade";
import memoji4 from "../../../public/images/memoji4.png";
import { ExternalLinkIcon, MailIcon } from "lucide-react";
import { contacts, socialLinks } from "@/consts";

export const ContactInfo = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="relative overflow-hidden">
      <BlurFade
        inView
        delay={0.5}
        className="w-full flex flex-col mx-auto items-start md:items-center justify-start md:justify-center px-4 lg:px-34"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={memoji4} alt="Person with a smile" className="size-30" />
          <p className="text-muted-foreground lg:text-base text-sm  max-w-lg text-center">
            I&apos;m currently available for freelance work and exciting new
            opportunities. Whether you have a project in mind or just want to
            say hello, I&apos;d love to hear from you!
          </p>
          <Button
            asChild
            size="lg"
            className="my-8 w-full md:w-60 flex items-center gap-4"
          >
            <a href={`mailto:${siteConfig.links.email}`}>
              <div className="flex items-center gap-2 justify-center">
                <MailIcon className="size-4" />
                <p>Contact Me</p>
              </div>
              <ExternalLinkIcon className="font-light size-3.5" />
            </a>
          </Button>
        </div>
        <div className="flex w-full flex-col md:flex-row  justify-center items-start md:items-center gap-2 md:gap-8 my-8">
          {contacts.map((contact) => (
            <div className="flex" key={contact.details}>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer"
                onClick={() => handleCopy(contact.details)}
              >
                <contact.icon className="size-5 text-primary mr-2" />
                {contact.details}
              </Button>
            </div>
          ))}
        </div>
        {/* Social Links - Show on Desktop Only */}
        <div className="flex flex-col items-start md:items-center justify-start md:justify-center mt-8">
          <p className="text-xs text-muted-foreground">Connect with me</p>
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map((socialLink) => (
              <Button
                key={socialLink.name}
                variant="default"
                size="icon"
                className="rounded-full bg-transparent cursor-pointer hover:bg-primary"
                asChild
              >
                <a href={socialLink.link}>
                  <socialLink.icon className="size-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </BlurFade>
    </div>
  );
};
