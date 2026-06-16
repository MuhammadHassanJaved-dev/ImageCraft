import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ImageCraft AI | Image Compressor, Background Remover & Converter",
  description:
    "ImageCraft AI is a powerful SaaS tool for compressing images, removing backgrounds, and converting formats instantly.",
  icons: {
    icon: "/logo.png", // 👈 change this to your new logo file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Optional: global layout wrapper */}
        <div className="min-h-screen flex flex-col">

          {/* Navbar */}
          <NavBar />

          {/* Page content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </div>
      </body>
    </html>
  );
}