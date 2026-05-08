import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import getAuthUser from '@/lib/getAuthUser';

export default async function Navbar() {

  const authUser = await getAuthUser();
  // console.log(authUser);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
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
              <div className="">
                <NavLink label="Dashboard" href="/dashboard"/>
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
  );
}