'use server'
import { getCollection } from "@/lib/db";
import { RegisterFormSchema } from "@/lib/rules";
import { redirect } from "next/navigation";


export async function signup(state, formData){
    //await new Promise((resolve) => setTimeout(resolve, 3000));

  // Validate form fields
   const validatedFields = RegisterFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // If any form fields are invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
  }
   
  // Extract form fields
  const { email, password } = validatedFields.data;

  // Check if email is already registered
  const userCollection = await getCollection("users");
  if (!userCollection) return { errors: { email: "Server error!" } };

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return {
      errors: {
        email: "Email already exists in our database!",
      },
    };
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save in DB
  const results = await userCollection.insertOne({
    email,
    password: hashedPassword,
  });

  // Create a session

  // Redirect
  redirect("/dashboard");

 
}