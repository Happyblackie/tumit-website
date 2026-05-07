'use server'
import bcrypt from "bcrypt";
import { getCollection } from "@/lib/db";
import { RegisterFormSchema, SigninFormSchema } from "@/lib/rules";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/sessions";

//signup js
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
  await createSession(results.insertedId.toString());

  // Redirect
  redirect("/dashboard");

 
}

//sigin js
export async function signin(state, formData){
  // console.log(formData.get("email"));
  //Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  // Check if any form fields are valid
  if (!validatedFields.success){
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      email:formData.get('email')
    }
  }

  // Extract form fields
  const {email, password} = validatedFields.data

  //Check if email exists
  const userCollection = await getCollection("users");
  if (!userCollection) return {errors: {email:"Server error"}};

  const existingUser = await userCollection.findOne({email});
  if (!existingUser) return {errors: {email:"Invalid credentials."}};

  //Check password 
  const matchedPassword = await bcrypt.compare(password, existingUser.password);
  if (!matchedPassword) return {errors:{email: "Invalid credentials."}};

  //Create a session
  await createSession(existingUser._id.toString());
  console.log(existingUser);

  //Redirect
  redirect ('/dashboard');

}