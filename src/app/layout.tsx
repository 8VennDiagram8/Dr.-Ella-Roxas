import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. Jowela Elaine E. Roxas, DMD (Denteetha) | Smiles Dental Hub",
  description: "Official boutique website of Dr. Jowela Elaine E. Roxas, DMD (Denteetha), CEO of Hello po! Smiles Dental Hub in 147 Malipampang, San Ildefonso, Bulacan. Our lifetime mission is your lifetime smile.",
  keywords: [
    "Dr. Jowela Elaine E. Roxas",
    "Dr. Ella Roxas",
    "Denteetha",
    "Dentist San Ildefonso Bulacan",
    "Smiles Dental Hub",
    "Hello po!",
    "Dentist Bulacan",
    "Teeth whitening",
    "Dental braces",
    "Oral prophylaxis",
    "Aesthetic dentistry"
  ],
  authors: [{ name: "Dr. Jowela Elaine E. Roxas, DMD" }],
  openGraph: {
    title: "Dr. Jowela Elaine E. Roxas, DMD | Smiles Dental Hub",
    description: "Our lifetime mission is your lifetime smile. Modern, chic, and gentle dentistry in San Ildefonso, Bulacan.",
    siteName: "Smiles Dental Hub",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#06b6d4] selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
