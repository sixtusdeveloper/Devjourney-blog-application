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

// Adjustment

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BadgePlus, LogOut, Menu, User, X } from "lucide-react";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { handleSignOut, handleSignIn } from "@/lib/server-actions";

interface NavbarProps {
  session: { user?: { id: string; name: string; image?: string } } | null;
}

const Navbar = ({ session }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed border-b border-slate-200 top-0 left-0 w-full z-50 bg-slate-200 shadow-sm font-work-sans">
      <nav className="px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 logo p-2 rounded-xl">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
            <span className="text-base font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Devjoruney
            </span>
          </div>
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
          <Link href="/FAQ" className="hover:text-blue-600 text-base">
            FAQ
          </Link>
          <Link href="/terms" className="hover:text-blue-600 text-base">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-blue-600 base">
            Privacy Policy
          </Link>
          <Link
            href="https://www.sixtusdev.net"
            target="_blank"
            className="hover:text-blue-600 text-base"
          >
            My Website
          </Link>
          {session && session?.user ? (
            <>
              <div className="flex items-center justify-center gap-2">
                <Link
                  href="/post/create"
                  className="inline-flex gap-1 items-center text-center py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-md text-white text-sm tracking-wide max-sm:hidden"
                >
                  <BadgePlus className="size-5 text-white" />
                  <span className="ml-1 text-base">Create</span>
                </Link>

                <form action={handleSignOut}>
                  <button
                    type="submit"
                    className="hover:text-red-600 ring-1 px-4 py-2 items-center text-center rounded-md inline-flex gap-1"
                  >
                    <LogOut className="size-5 text-purple-500 hover:text-red-500" />
                    <span className="ml-1 text-base">Logout</span>
                  </button>
                </form>
              </div>
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
              <button
                type="submit"
                className="inline-flex gap-1 items-center text-center py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-md text-white text-sm tracking-wide"
              >
                <User className="size-5 text-white" />
                <span className="ml-1 text-base">Signin</span>
              </button>
            </form>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 flex flex-col justify-center items-center text-white z-40 sm:hidden">
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
                  <Link
                    href="/post/create"
                    onClick={toggleMenu}
                    className="inline-flex gap-1 items-center text-center py-3 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-md text-white text-sm tracking-wide"
                  >
                    <BadgePlus className="size-6 sm:hidden text-white" />
                    <span className="ml-1">Create</span>
                  </Link>
                </li>
                <li>
                  <form action={handleSignOut}>
                    <button
                      type="submit"
                      className="hover:text-red-600 text-center items-center inline-flex gap-1 ring-1 px-4 py-3 rounded-md"
                    >
                      <span className="ml-1">Logout</span>
                      <LogOut className="size-6 text-purple-500" />
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
