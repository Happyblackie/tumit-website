import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    username: z.string().min(1, { message: "Please enter username." }).trim(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    phone: z.string().min(1, { message: "Please enter phone number." })
            .regex(/^[+]?[0-9]+$/, { 
                    message: "Phone must contain only digits and can optionally start with '+'" 
                })
            .trim(),
    password: z
            .string()
            .trim()
            .min(5, { message: "Be at least 5 characters long" })
            .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
            .regex(/[0-9]/, { message: "Contain at least one number." })
            .regex(/[^a-zA-Z0-9]/, {
              message: "Contain at least one special character.",
            }),
    confirmPassword: z.string().trim(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password fields do not match.",
        path: ["confirmPassword"],
      });
    }
  });