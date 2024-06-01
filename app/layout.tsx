import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { NavBar } from "./_components/nav-bar";
import logo from '@/public/images/logo_title.png'

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trigona Consulting LLC",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    // Need to override font from theme
    <html lang="en" data-theme="wireframe">
      <body className={raleway.className}> 
        <header>
        <div className="flex justify-center" >
          <Image src={logo} alt="logo" width={650}/></div>
          <NavBar />
        </header>
        {children}
        <footer className="mt-7">
          <h5 className="font-serif text-center text-sm">Copyright © 2024 Trigona Consulting LLC</h5>
        </footer>
      </body>
    </html>
  );
}


