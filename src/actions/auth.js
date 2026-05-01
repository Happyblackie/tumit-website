'use server'
import { RegisterFormSchema } from "@/lib/rules";
import { Noto_Sans_Phoenician } from "next/font/google";

export async function signup(state, formData){
    //await new Promise((resolve) => setTimeout(resolve, 3000));

   const validatedFields = RegisterFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
  }

  console.log(validatedFields);
}