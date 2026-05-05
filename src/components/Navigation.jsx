import Link from "next/link";
import NavLink from "./NavLink";

export default function(){
    return(
        <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-4">

              <Link className="font-bold text-2xl font-playfair" href={'/'}>
                Tumit 
              </Link>
              
              <nav className="flex items-center gap-8 text-sm">
                
              
                <NavLink label={'Dashboard'} href={'/dashboard'}></NavLink>
                                         
                <NavLink label={<><i className="bi bi-box-arrow-in-right"></i>Signup</>} 
                  href={'/signup'} 
                />
                <NavLink label={<><i className="bi bi-box-arrow-in-right"></i>Signin</>} 
                  href={'/signin'} 
                />
                              
                
              </nav>

            </div>
        </div>
    )
}