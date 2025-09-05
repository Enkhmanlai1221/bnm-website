import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="position-relative overflow-hidden  flex flex-col min-h-screen bg-[#E8EFFF]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
