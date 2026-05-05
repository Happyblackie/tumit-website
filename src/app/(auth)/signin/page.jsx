'use client'
import { useActionState } from "react";

export default function Signin() {
  const [state, action, isPending] = useActionState(() => {}, undefined);

  return (
    <section className="px-4 py-10 min-h-screen flex items-center justify-center">
     
      <div className="relative hidden md:block">
        <div className="bg-skew"></div>
      </div>

      <div className="w-full max-w-md mx-auto flex flex-col gap-8 -mt-20">
    <div className="text-center">
        <h1 className="playfair font-bold text-2xl">Sign in to your account</h1>
        <span className="text-gray-600 text-sm">
            Please enter your email and password to sign in.
        </span>
    </div>

    <form action={action} className="flex flex-col gap-4">
        <div className="flex flex-col gap-5">
            {/* Input Fields */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold" htmlFor="email">Enter email</label>
                <input type="text" name="email" className="p-2 border border-gray-400 rounded bg-white" defaultValue={state?.email} />
                {state?.errors?.email && (
                    <p className="text-red-500 text-xs">{state.errors.email}</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold" htmlFor="password">Enter password</label>
                <input type="password" name="password" className="p-2 border border-gray-400 rounded bg-white"/>  
            </div>

            {/* 1. Sign In Button (Centered and narrow) */}
<div className="flex justify-center mt-2">
    <button disabled={isPending}                   
        className="flex items-center justify-center gap-2 h-11 px-10 bg-gray-200 text-gray-800 rounded-full 
        hover:bg-gray-300 hover:text-black transition duration-200 border w-fit"
    >                  
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="text-sm font-semibold"> {isPending ? "Loading..." : "Sign in"}</span>
    </button>
</div>


            {/* 2. Social Row */}
            <div className="flex items-center justify-center gap-3 mt-2">
                <span className="text-xs text-gray-600 whitespace-nowrap">
                    or sign in with
                </span>
                <a href="#" className="flex items-center justify-center h-10 px-4 bg-gray-400 text-white rounded-full hover:bg-gray-600 text-sm whitespace-nowrap">
                    Google
                </a>
                <a href="#" className="flex items-center justify-center h-10 px-4 bg-gray-400 text-white rounded-full hover:bg-gray-600 text-sm whitespace-nowrap">
                    Facebook
                </a>
            </div>

            {/* 3. Bottom Action Buttons - Same line and rounded style */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
    <button 
        type="button" 
        className="flex items-center justify-center h-11 px-6 bg-white text-gray-800 rounded-full border border-gray-300 w-full sm:w-auto 
                   cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95"
    >
        <span className="text-sm">Don't have an account? <span className="font-bold">Sign up</span></span>
    </button>
    
    <button 
        type="button" 
        className="flex items-center justify-center h-11 px-6 bg-white text-gray-800 rounded-full border border-gray-300 w-full sm:w-auto 
                   cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95"
    >
        <span className="text-sm">Forgot password?</span>
    </button>
</div>
        </div>
    </form>
</div>

    </section>
  );
}
