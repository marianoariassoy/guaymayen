import type { Metadata } from "next";
import { Zain, Poppins } from "next/font/google";
import "./globals.css";
import "./hamburguer.css";
import "./animations.css";
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
  title: "Alfajores Guaymallén",
  description:
    "Desde 1945, haciendo alfajores con el corazón. Nuestra historia empezó en 1945, cuando Ulpiano Fernández comenzó operando desde las instalaciones de una panadería alquilada y en 1972 ya contaba con una planta de 1200 mt2, 60 empleados y una producción de 180.000 alfajores diarios.",
  icons: {
    icon: "/assets/favicon.jpg",
  },
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
