import { Footer } from "@/components/share/footer";
import { Header } from "@/components/share/header";
import { MainWrapper } from "@/components/share/main-wrapper";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}
