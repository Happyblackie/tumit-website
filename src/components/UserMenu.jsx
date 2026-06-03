"use client";

import { logout } from '@/actions/auth';
import Link from "next/link";
import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button" onClick={(e) => {e.stopPropagation(); setOpen(!open);}} 
        className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500"
      >
        <i className="bi bi-person-fill cursor-pointer"></i>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">
          <Link
            href="/settings"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Settings
          </Link>

          <form action={logout}>
                <button
                    type="submit"
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    Logout
                </button>
          </form>
        </div>
      )}
    </div>
  );
}
// <i className="bi bi-box-arrow-in-right"></i>