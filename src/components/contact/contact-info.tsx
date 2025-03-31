"use client";

import Link from "next/link";
import { toast } from "sonner";
import { contacts, socialLinks } from "@/consts";

import { ContactForm } from "./contact-form";
import { BlurFade } from "../magicui/blur-fade";

export const ContactInfo = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      className: "text-blue-500",
    });
  };

  return (
    <div className="relative overflow-hidden">
      <BlurFade
        inView
        delay={0.5}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:px-34 px-4"
      >
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Contact Information
          </h3>
          <div className="space-y-6 mb-6">
            {contacts.map((contact) => (
              <div
                className="flex items-center cursor-pointer"
                key={contact.title}
              >
                <div className="bg-primary/10 p-4 rounded-full mr-4">
                  <contact.icon className="size-4" />
                </div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">
                    {contact.title}
                  </h4>

                  <p
                    onClick={() => handleCopy(contact.details)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            {socialLinks.map((socialLink) => (
              <Link
                key={socialLink.name}
                href={socialLink.link}
                target="_blank"
                className="bg-card p-3 rounded-full hover:bg-primary hover:text-white-foreground transition-colors"
              >
                <socialLink.icon className="size-5" />
                <span className="sr-only text-sm lg:text-base">
                  {socialLink.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <ContactForm />
      </BlurFade>
    </div>
  );
};
