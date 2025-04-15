import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/ // стандартный паттерн
);

export const contactSchema = z.object({
  full_name: z.string().min(1, { message: "full_name" }),
  email: z.string().email({ message: "email" }),
  phone: z.string().min(1, { message: "phone" }).regex(phoneRegex, { message: "phone" }),
  message: z.string().min(1, { message: "message" }),
});
