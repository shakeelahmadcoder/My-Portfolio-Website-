import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shakeel Portfolio",
  description: "Personal portfolio website of Shakeel Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={` overflow-x-hidden ${inter.className}`} >
      {children}
      </body>
    </html>
  );
}
