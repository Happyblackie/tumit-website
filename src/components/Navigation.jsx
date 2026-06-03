import { logout } from '@/actions/auth';
import getAuthUser from '@/lib/getAuthUser';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

export default async function Navbar() {

  const authUser = await getAuthUser();
  // console.log(authUser);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full max-w-5xl mx-auto p-4 py-3">
        <div className="flex flex-row justify-between items-center w-full gap-4">
          
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={65} // Reduced size so it doesn't push the nav
              height={65}       
              className="w-10 md:w-14 lg:w-16 h-auto object-contain"
              style={{ height: 'auto' }}
              priority
            />
          </Link>

          <nav className="flex items-center gap-8 text-sm">
          
              {authUser ? (
                <div className="flex items-center gap-4">
                  <NavLink label="Dashboard" href="/dashboard"/>
                  <form action={logout}>
                    <i className="bi bi-box-arrow-in-right"></i>
                    <button className=" py-2bg-gray-200 text-gray-800 rounded-full 
                      hover:text-black transition duration-200  cursor-pointer">
                      Logout
                    </button> 
                  </form>
                </div>

              
              )
              :(
                <>
                  <NavLink 
                    label={<><i className="bi bi-box-arrow-in-right mr-1"></i>Signup</>} 
                    href="/signup" 
                  />
                  <NavLink 
                      label={<><i className="bi bi-box-arrow-in-right mr-1"></i>Signin</>} 
                      href="/signin" 
                  />
                  </>
                
              )}
            
                  
          </nav>

        </div>
      </div>
    </header>         
  );
}