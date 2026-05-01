'use client'
import { signup } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";


export default function Signup() {

  const [state, action, isPending] = useActionState(signup, undefined);

  return (
    <section className="px-4 py-10">

        <div className="relative hidden md:block">
          <div className="bg-skew"></div>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
            <div>
              <h1 className="playfair font-bold">Create New Account</h1>
              <span className="text-gray-600 text-sm">
                Please enter your credentials to sign up.
              </span>
            </div>

          <form action={action} className="flex flex-col gap-4">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
              
              {/* Inputs */}
              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-bold" htmlFor="username">Enter username</label>
                <input type="text" name="username" className="p-2 border border-gray-400 rounded bg-white" />
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-bold" htmlFor="email">Enter email</label>
                <input type="text" name="email" className="p-2 border border-gray-400 rounded bg-white" />
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-bold" htmlFor="phone">Enter phone</label>
                <input type="text"  name="phone" className="p-2 border border-gray-400 rounded bg-white" />
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-bold" htmlFor="password">Enter password</label>
                <input type="password" name="password" className="p-2 border border-gray-400 rounded bg-white" />
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-bold" htmlFor="confirmPassword">Confirm password</label>
                <input type="password" name="confirmPassword" className="p-2 border border-gray-400 rounded bg-white" />
              </div>

            

              {/* Social row */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-600 whitespace-nowrap">
                  or sign in with
                </span>

                <a
                  href=""
                  className="flex items-center justify-center h-12 px-4 bg-gray-400 text-white rounded-full hover:bg-gray-600"
                >
                  Google
                </a>

                <a
                  href=""
                  className="flex items-center justify-center h-12 px-4 bg-gray-400 text-white rounded-full hover:bg-gray-600"
                >
                  Facebook
                </a>
              </div>


            </div>
            
          
            <div className="flex justify-center mt-2">
                <button  disabled={isPending}                   
                    className="flex items-center justify-center gap-2 h-10 px-5 bg-gray-200 text-gray-800 rounded-full 
                    hover:bg-gray-300 hover:text-black transition duration-200 border"
                >                  
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span className="text-sm"> {isPending ? "Loading..." : "Sign up"}</span>
                </button>
            </div>
          </form>
        </div>

    </section>
  );
}