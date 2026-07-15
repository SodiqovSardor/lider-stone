import { getDictionary } from "@/src/lib/i18n/get-dictionary";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import CustomCursor from "@/src/components/CustomCursor";
import PageTransition from "@/src/components/PageTransition";
import { locales, type Locale } from "@/src/lib/i18n/config";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
