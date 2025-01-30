import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], style:[ "normal", "italic"] });

export const metadata: Metadata = {
  title: "Trigona Consulting LLC",
  description: "Organizational change management, human capital consulting"
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Need to override font from theme
    <html className="scroll-pt-20 lg:scroll-pt-60 overflow-x-hidden" lang="en" data-theme="wireframe">
      <body className={`text-base-content ${raleway.className} p-0`}> 
        {children}
      </body>
    </html>
  );
}


