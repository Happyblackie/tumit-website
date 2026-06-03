"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ authUser }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <i className="bi bi-list text-3xl"></i>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg p-3">

          <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 mb-4">
            <i className="bi bi-person-fill"></i>
          </div>

          {authUser ? (
            <>
              <Link href="/dashboard" className="block py-2">
                Dashboard
              </Link>

              <Link href="/settings" className="block py-2">
                Settings
              </Link>

              <button className="block py-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/signup" className="block py-2">
                Sign Up
              </Link>

              <Link href="/signin" className="block py-2">
                Sign In
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}