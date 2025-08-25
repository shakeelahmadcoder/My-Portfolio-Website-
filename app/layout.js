import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Shakeel Ahmed Webs Developer",
//   description: "Personal portfolio website of Shakeel Ahmed",
// };

export const metadata = {
  title: "Shakeel Ahmed | Web Developer",
  description: "Personal portfolio website of Shakeel Ahmed, showcasing web development projects, skills, and services.",
  keywords: ["Shakeel Ahmed", "Web Developer", "Portfolio", "Frontend Developer", "React", "Next.js"],
  authors: [{ name: "Shakeel Ahmed", url: "https://yourwebsite.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Shakeel Ahmed | Web Developer",
    description: "Explore the portfolio and projects of Shakeel Ahmed, a Mern Stack web developer.",
    url: "https://shakeelcodes.vercel.app/",
    siteName: "Shakeel Ahmed Portfolio",
    locale: "en_US",
    type: "website",
  }
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
