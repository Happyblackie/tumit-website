
import getAuthUser from '@/lib/getAuthUser';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import NavLink from './NavLink';
import UserMenu from './UserMenu';

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
              className="w-8 sm:w-10 md:w-12 lg:w-16 h-auto object-contain"
              style={{ height: 'auto' }}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
          
              {authUser ? (
                <div className="flex items-center">
                  <NavLink label="Dashboard" href="/dashboard"/>
                  
                    <div className="ml-12 lg:ml-20">
                      <UserMenu />
                    </div>
                    
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

          <div className="md:hidden">
            <MobileMenu authUser={authUser} />
          </div>

        </div>
      </div>
    </header>         
  );
}