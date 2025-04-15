import * as z from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );


export const contactSchema = z.object({
  fullName: z.string().min(1, { message: "fullName" }),
  email: z.string().email({ message: "email" }),
  phone: z.string().min(1, { message: "phone" }).regex(phoneRegex ,{ message: "phone" } ),
  message: z.string().min(1, { message: "message" }),
  file: z
    .any()
    .optional()
    .refine(
      (file) => !file || file instanceof FileList || file instanceof File,
      {
        message: "file",
      }
    ),

});
