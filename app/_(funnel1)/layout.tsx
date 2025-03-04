import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/app/_components/nav-bar";
import logo from '@/public/images/logo_title.png'

export default function FunnelLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>
        <Image className=""  src={logo} alt="Trigona Consulting LLC" height={100} />
        <div className="w-full h-1 bg-red-800"></div>
      </header>
      {children}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
           <aside>
            <p>Copyright © 2025 - All rights reserved by Trigona Consulting LLC</p>
          </aside>
        </footer>

    </>
  );
}


