import { auth } from "@/auth";
import Footer from "@/components/Footer";
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
        <Footer />
      </main>
    </>
  );
}
