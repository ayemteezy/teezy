"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contactSchema } from "@/schema";
import { siteConfig } from "./../../config/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function send(values: z.infer<typeof contactSchema>) {
  const result = contactSchema.safeParse(values);

  console.log(result);
  console.log("Resend API Key:", process.env.RESEND_API_KEY);

  if (!result.success) {
    return { error: "Invalid input fields" };
  }

  const { name, email, subject, message } = values;
  console.log(result.data);

  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <${email}>`,
      to: `${siteConfig.links.email}`,
      subject,
      text: message,
    });

    if (error) {
      return { error: error.message || "Failed to send email" };
    }

    return { success: "Your message has been sent successfully!" };
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
