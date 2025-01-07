import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";

// Define server action functions outside the component
const handleSignOut = async () => {
  "use server";
  await signOut({ redirectTo: "/" });
};

const handleSignIn = async () => {
  "use server";
  await signIn("github");
};

// Navbar Component
const Navbar = async () => {
  const session = await auth();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm font-work-sans">
      <nav className="px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/post/create">
                <span>Create</span>
              </Link>

              <form action={handleSignOut}>
                <button type="submit" className="hover:text-red-600">
                  Logout
                </button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
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
    </header>
  );
};

export default Navbar;

// Code working correctly just not fiexed on scroll
// import Link from "next/link";
// import Image from "next/image";
// import { auth, signOut, signIn } from "@/auth";

// // Define server action functions outside the component
// const handleSignOut = async () => {
//     "use server";
//     await signOut({ redirectTo: "/" });
// };

// const handleSignIn = async () => {
//     "use server";
//     await signIn("github");
// };

// // Use these functions in the form actions
// const Navbar = async () => {
//     const session = await auth();
//     return (
//         <header className="px-5 py-3 bg-white-100 shadow-sm font-work-sans">
//             <nav className="flex justify-between items-center">
//                 <Link href="/">
//                     <Image src="/logo.png" alt="Logo" width={30} height={30} />
//                 </Link>

//                 <div className="flex items-center gap-5">
//                     {session && session?.user ? (
//                         <>
//                             <Link href="/startup/create">
//                                 <span>Create</span>
//                             </Link>

//                             <form action={handleSignOut}>
//                                 <button type="submit">Logout</button>
//                             </form>

//                             <Link href={`/user/${session?.user?.id}`}>
//                                 <span>{session?.user?.name}</span>
//                             </Link>
//                         </>
//                     ) : (
//                         <form action={handleSignIn}>
//                             <button type="submit">Signin</button>
//                         </form>
//                     )}
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;
