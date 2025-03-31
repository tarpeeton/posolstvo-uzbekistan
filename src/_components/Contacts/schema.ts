import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/ // стандартный паттерн
);

export const contactSchema = z.object({
  firstName: z.string().min(1, { message: "firstName" }),
  lastName: z.string().min(1, { message: "lastName" }),
  email: z.string().email({ message: "email" }),
  phone: z.string().min(1, { message: "phone" }).regex(phoneRegex, { message: "phone" }),
  message: z.string().min(1, { message: "message" }),
});
