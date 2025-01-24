import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";

function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default WebsiteLayout;
