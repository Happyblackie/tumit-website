"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({label, href}){
      const pathname = usePathname()

    return (
        <Link className={`flex items-center justify-center gap-2 h-10 px-5 text-gray-800 rounded-full not-only:hover:bg-gray-300 hover:text-black transition duration-200  ${pathname === href ? "flex items-center justify-center gap-2 h-10 px-5 bg-gray-200 text-gray-800 rounded-full            hover:bg-gray-300 hover:text-black transition duration-200 border":""}`} href={href}>
            {label}
        </Link>
    )
}