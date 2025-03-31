import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters." })
    .max(100, { message: "Subject must be at most 100 characters." })
    .regex(/^[A-Za-z0-9\s]+$/, {
      message: "Subject can only contain letters, numbers, and spaces.",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be at most 1000 characters." }),
});
