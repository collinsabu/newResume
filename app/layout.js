import { Poppins } from "next/font/google";
import "./globals.css";

// Importing Poppins font
const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Full-Stack Developer Portfolio | Collins Abu",
  description: "Portfolio of Collins Abu, a full-stack developer skilled in Next.js, React, Node.js, and modern web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Full-stack developer, Next.js, React.js, Node.js, Portfolio, JavaScript Developer" />
        <meta name="author" content="[Your Name]" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
