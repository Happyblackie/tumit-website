'use server'

export async function signup(state, formData){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const username = formData.get("username");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");

    console.log(username);
    console.log(email);
    console.log(phone);
    console.log(password);
}