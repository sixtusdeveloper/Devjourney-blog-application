// import Navbar from "@/components/Navbar";

// export default function Layout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <main className="font-work-sans">
//       <Navbar />
//       {children}
//     </main>
//   );
// }

// New code to implement the Hamburger menu
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <>
      <main>
        <Navbar session={session} />
        {children}
      </main>
    </>
  );
}
