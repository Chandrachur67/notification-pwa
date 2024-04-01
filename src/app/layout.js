import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  manifest: './manifest.json',
  title: "Notification App",
  description: "This is a notification app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#317EFB"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
