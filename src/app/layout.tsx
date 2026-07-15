import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/src/lib/ThemeProvider";
import Preloader from "@/src/components/Preloader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lider Stone \u00B7 Premium Natural Stone Atelier in Tashkent",
  description:
    "Premium marble, quartzite, granite, onyx, and travertine slabs sourced from the world's finest quarries and finished in Tashkent, Uzbekistan.",
  keywords: [
    "natural stone",
    "marble Tashkent",
    "quartzite",
    "granite",
    "onyx",
    "travertine",
    "stone atelier",
    "Uzbekistan stone",
    "countertops",
    "interior design",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem("ls-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()` }} />
      </head>
      <body className="noise flex min-h-full flex-col bg-obsidian text-stone-100 antialiased">
        <ThemeProvider>
          <Preloader>{children}</Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}
