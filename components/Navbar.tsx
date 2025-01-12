// Updated the code to implement page active status
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BadgePlus, LogOut, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { handleSignOut, handleSignIn } from "@/lib/server-actions";
import { usePathname } from "next/navigation"; // Import usePathname

interface NavbarProps {
  session: { user?: { id: string; name: string; image?: string } } | null;
}

const Navbar = ({ session }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getLinkClassNames = (href: string) => {
    // Add gradient underline if the link is active
    const isActive = pathname === href;
    return isActive
      ? "text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 underline underline-offset-4"
      : "text-base hover:text-blue-600";
  };

  return (
    <header className="fixed border-b border-slate-100 top-0 left-0 w-full z-50 bg-slate-200 shadow-sm font-work-sans">
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
          <Link href="/about" className={getLinkClassNames("/about")}>
            About
          </Link>
          <Link href="/FAQ" className={getLinkClassNames("/FAQ")}>
            FAQ
          </Link>
          <Link href="/career" className={getLinkClassNames("/career")}>
            Courses
          </Link>
          <Link href="/career" className={getLinkClassNames("/docs")}>
            Docs
          </Link>
          <Link
            href="https://www.sixtusdev.net"
            target="_blank"
            className={getLinkClassNames("https://www.sixtusdev.net")}
          >
            My Website
          </Link>
          <Link href="/contact" className={getLinkClassNames("/contact")}>
            Contact
          </Link>
          {session && session?.user ? (
            <>
              <div className="flex items-center justify-center gap-2">
                <Link
                  href="/post/create"
                  className="inline-flex gap-1 items-center text-center py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide max-sm:hidden"
                >
                  <BadgePlus className="size-5 text-white" />
                  <span className="ml-1 text-base">Create</span>
                </Link>

                <form action={handleSignOut}>
                  <button
                    type="submit"
                    className="hover:text-red-600 ring-1 px-4 py-2 items-center text-center rounded-lg inline-flex gap-1"
                  >
                    <LogOut className="size-5 text-purple-500 hover:text-red-500" />
                    <span className="ml-1 text-base">Logout</span>
                  </button>
                </form>
              </div>
              <Link
                href={`/user/${session?.user?.id}`}
                className="cursor-not-allowed"
              >
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
                className="inline-flex gap-1 items-center text-center py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide"
              >
                <FaGithub className="size-5 text-white" />
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
                href="/about"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/FAQ"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="https://www.sixtusdev.net"
                target="_blank"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                My Website
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-400"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            {session && session?.user ? (
              <>
                <li>
                  <Link
                    href="/post/create"
                    onClick={toggleMenu}
                    className="inline-flex gap-1 items-center text-center py-3 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide"
                  >
                    <BadgePlus className="size-6 sm:hidden text-white" />
                    <span className="ml-1">Create</span>
                  </Link>
                </li>
                <li>
                  <form action={handleSignOut}>
                    <button
                      type="submit"
                      className="hover:text-red-600 text-center items-center inline-flex gap-1 ring-1 px-4 py-3 rounded-lg"
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
                  <button
                    type="submit"
                    className="inline-flex gap-1 items-center text-center py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide"
                  >
                    <FaGithub className="size-5 text-white" />
                    <span className="ml-1 text-base">Signin</span>
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

// Original code
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { BadgePlus, LogOut, Menu, X } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import { AvatarImage, Avatar } from "@/components/ui/avatar";
// import { handleSignOut, handleSignIn } from "@/lib/server-actions";

// interface NavbarProps {
//   session: { user?: { id: string; name: string; image?: string } } | null;
// }

// const Navbar = ({ session }: NavbarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="fixed border-b border-slate-100 top-0 left-0 w-full z-50 bg-slate-200 shadow-sm font-work-sans">
//       <nav className="px-5 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <div className="flex items-center gap-2 logo p-2 rounded-xl">
//             <Image src="/logo.png" alt="logo" width={30} height={30} />
//             <span className="text-base font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//               Devjoruney
//             </span>
//           </div>
//         </Link>

//         {/* Hamburger Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="sm:hidden text-gray-800 focus:outline-none"
//         >
//           {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden sm:flex items-center gap-8">
//           <Link href="/about" className="hover:text-blue-600 text-base">
//             About
//           </Link>
//           <Link href="/FAQ" className="hover:text-blue-600 text-base">
//             FAQ
//           </Link>
//           <Link href="/career" className="hover:text-blue-600 base">
//             Courses
//           </Link>
//           <Link
//             href="https://www.sixtusdev.net"
//             target="_blank"
//             className="hover:text-blue-600 text-base"
//           >
//             My Website
//           </Link>
//           <Link href="/contact" className="hover:text-blue-600 base">
//             Contact
//           </Link>
//           {session && session?.user ? (
//             <>
//               <div className="flex items-center justify-center gap-2">
//                 <Link
//                   href="/post/create"
//                   className="inline-flex gap-1 items-center text-center py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide max-sm:hidden"
//                 >
//                   <BadgePlus className="size-5 text-white" />
//                   <span className="ml-1 text-base">Create</span>
//                 </Link>

//                 <form action={handleSignOut}>
//                   <button
//                     type="submit"
//                     className="hover:text-red-600 ring-1 px-4 py-2 items-center text-center rounded-lg inline-flex gap-1"
//                   >
//                     <LogOut className="size-5 text-purple-500 hover:text-red-500" />
//                     <span className="ml-1 text-base">Logout</span>
//                   </button>
//                 </form>
//               </div>
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
//               <button
//                 type="submit"
//                 className="inline-flex gap-1 items-center text-center py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide"
//               >
//                 <FaGithub className="size-5 text-white" />
//                 <span className="ml-1 text-base">Signin</span>
//               </button>
//             </form>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 flex flex-col justify-center items-center text-white z-40 sm:hidden">
//           <button
//             onClick={toggleMenu}
//             className="absolute top-4 right-4 text-white text-2xl"
//           >
//             <X className="size-8" />
//           </button>
//           <ul className="flex flex-col items-center gap-6 text-lg">
//             <li>
//               <Link
//                 href="/about"
//                 className="hover:text-blue-400"
//                 onClick={toggleMenu}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/FAQ"
//                 className="hover:text-blue-400"
//                 onClick={toggleMenu}
//               >
//                 FAQ
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/career"
//                 className="hover:text-blue-400"
//                 onClick={toggleMenu}
//               >
//                 Courses
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="https://www.sixtusdev.net"
//                 target="_blank"
//                 className="hover:text-blue-400"
//                 onClick={toggleMenu}
//               >
//                 My Website
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="hover:text-blue-400"
//                 onClick={toggleMenu}
//               >
//                 Contact
//               </Link>
//             </li>
//             {session && session?.user ? (
//               <>
//                 <li>
//                   <Link
//                     href="/post/create"
//                     onClick={toggleMenu}
//                     className="inline-flex gap-1 items-center text-center py-3 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide"
//                   >
//                     <BadgePlus className="size-6 sm:hidden text-white" />
//                     <span className="ml-1">Create</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <form action={handleSignOut}>
//                     <button
//                       type="submit"
//                       className="hover:text-red-600 text-center items-center inline-flex gap-1 ring-1 px-4 py-3 rounded-lg"
//                     >
//                       <span className="ml-1">Logout</span>
//                       <LogOut className="size-6 text-purple-500" />
//                     </button>
//                   </form>
//                 </li>
//                 <li>
//                   <Link
//                     href={`/user/${session?.user?.id}`}
//                     onClick={toggleMenu}
//                   >
//                     <Avatar className="size-12">
//                       <AvatarImage
//                         src={session?.user?.image || "/avatar.jpg"}
//                         alt={session?.user?.name || "User Avatar"}
//                       />
//                     </Avatar>
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <form action={handleSignIn}>
//                   <button
//                     type="submit"
//                     className="inline-flex gap-1 items-center text-center py-2 px-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide"
//                   >
//                     <FaGithub className="size-5 text-white" />
//                     <span className="ml-1 text-base">Signin</span>
//                   </button>
//                 </form>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
