import type { Metadata } from "next";
import { Zain, Poppins } from "next/font/google";
import "./globals.css";
import "./hamburguer.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const zain = Zain({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-zain",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guaymayen",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${zain.variable} ${poppins.variable} antialiased`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
