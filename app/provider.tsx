import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface MijuLayoutProps {
  children?: React.ReactNode;
}

export default function MijuLayout({ children }: MijuLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="mt-20 p-10 min-h-[80vh]">{children}</div>
      <Footer />
    </>
  );
}
