// import Link from "next/link";
// import Image from "next/image";
// import { auth, signOut, signIn } from "@/auth";
// import { BadgePlus, LogOut } from "lucide-react";
// import { AvatarImage, Avatar } from "@/components/ui/avatar";

// // Define server action functions outside the component
// const handleSignOut = async () => {
//   "use server";
//   await signOut({ redirectTo: "/" });
// };

// const handleSignIn = async () => {
//   "use server";
//   await signIn("github");
// };

// // Navbar Component
// const Navbar = async () => {
//   const session = await auth();
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-sm font-work-sans">
//       <nav className="px-5 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <Image src="/logo.png" alt="Logo" width={30} height={30} />
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex items-center gap-5">
//           {session && session?.user ? (
//             <>
//               <Link href="/post/create">
//                 <span className="py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-md text-white text-sm tracking-wide block max-sm:hidden">
//                   Create
//                 </span>
//                 <BadgePlus className="size-6 sm:hidden text-blue-500" />
//               </Link>

//               <form action={handleSignOut}>
//                 <button type="submit" className="hover:text-red-600">
//                   <span className="max-sm:hidden ring-1 px-4 py-2 rounded-md">
//                     Logout
//                   </span>
//                   <LogOut className="size-6 sm:hidden text-red-500" />
//                 </button>
//               </form>

//               <Link href={`/user/${session?.user?.id}`}>
//                 <Avatar className="size-10">
//                   <AvatarImage
//                     src={session?.user?.image || "/avatar.jpg"}
//                     alt={session?.user?.name || "User Avatar"}
//                   />
//                 </Avatar>
//               </Link>
//             </>
//           ) : (
//             <form action={handleSignIn}>
//               <button type="submit" className="hover:text-blue-600">
//                 Signin
//               </button>
//             </form>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// This is code is causing some errors as the "use client" directive is being used in a server component
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { BadgePlus, LogOut, Menu, X } from "lucide-react";
// import { AvatarImage, Avatar } from "@/components/ui/avatar";
// import { handleSignOut, handleSignIn } from "@/lib/server-actions";

// interface NavbarProps {
//   session: { user?: { id: string; name: string; image?: string } } | null;
// }

// const Navbar = ({ session }: NavbarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-sm font-work-sans">
//       <nav className="px-5 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <Image src="/logo.png" alt="Logo" width={30} height={30} />
//         </Link>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           onClick={toggleMenu}
//           className="sm:hidden text-gray-800 focus:outline-none"
//         >
//           {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
//         </button>

//         {/* Navigation Links */}
//         <div
//           className={`flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 transition-all ${
//             isMenuOpen ? "block" : "hidden sm:flex"
//           }`}
//         >
//           <Link href="/terms" className="hover:text-blue-600">
//             Terms
//           </Link>
//           <Link href="/privacy" className="hover:text-blue-600">
//             Privacy Policy
//           </Link>
//           <Link
//             href="https://mywebsite.com"
//             target="_blank"
//             className="hover:text-blue-600"
//           >
//             My Website
//           </Link>

//           {session && session?.user ? (
//             <>
//               <Link href="/post/create">
//                 <span className="max-sm:hidden">Create</span>
//                 <BadgePlus className="size-6 sm:hidden text-blue-500" />
//               </Link>

//               <form action={handleSignOut}>
//                 <button type="submit" className="hover:text-red-600">
//                   <span className="max-sm:hidden">Logout</span>
//                   <LogOut className="size-6 sm:hidden text-red-500" />
//                 </button>
//               </form>

//               <Link href={`/user/${session?.user?.id}`}>
//                 <Avatar className="size-10">
//                   <AvatarImage
//                     src={session?.user?.image || "/avatar.jpg"}
//                     alt={session?.user?.name || "User Avatar"}
//                   />
//                 </Avatar>
//               </Link>
//             </>
//           ) : (
//             <form action={handleSignIn}>
//               <button type="submit" className="hover:text-blue-600">
//                 Signin
//               </button>
//             </form>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// Adjustment
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BadgePlus, LogOut, Menu, X } from "lucide-react";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { handleSignOut, handleSignIn } from "@/lib/server-actions";

interface NavbarProps {
  session: { user?: { id: string; name: string; image?: string } } | null;
}

const Navbar = ({ session }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-sm font-work-sans">
      <nav className="px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/terms" className="hover:text-blue-600">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link
            href="https://mywebsite.com"
            target="_blank"
            className="hover:text-blue-600"
          >
            My Website
          </Link>
          {session && session?.user ? (
            <>
              <Link href="/post/create">
                <span className="hidden sm:block">Create</span>
                <BadgePlus className="size-6 sm:hidden text-blue-500" />
              </Link>
              <form action={handleSignOut}>
                <button type="submit" className="hover:text-red-600">
                  Logout
                </button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || "/avatar.jpg"}
                    alt={session?.user?.name || "User Avatar"}
                  />
                </Avatar>
              </Link>
            </>
          ) : (
            <form action={handleSignIn}>
              <button type="submit" className="hover:text-blue-600">
                Signin
              </button>
            </form>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 flex flex-col justify-center items-center text-white z-40">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <X className="size-8" />
          </button>
          <ul className="flex flex-col items-center gap-6 text-lg">
            <li>
              <Link
                href="/terms"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://mywebsite.com"
                target="_blank"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                My Website
              </Link>
            </li>
            {session && session?.user ? (
              <>
                <li>
                  <Link href="/post/create" onClick={toggleMenu}>
                    Create
                  </Link>
                </li>
                <li>
                  <form action={handleSignOut}>
                    <button type="submit" className="hover:text-red-400">
                      Logout
                    </button>
                  </form>
                </li>
                <li>
                  <Link
                    href={`/user/${session?.user?.id}`}
                    onClick={toggleMenu}
                  >
                    <Avatar className="size-12">
                      <AvatarImage
                        src={session?.user?.image || "/avatar.jpg"}
                        alt={session?.user?.name || "User Avatar"}
                      />
                    </Avatar>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <form action={handleSignIn}>
                  <button type="submit" className="hover:text-blue-400">
                    Signin
                  </button>
                </form>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
