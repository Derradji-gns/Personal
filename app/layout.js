import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Derradji Amine Abdelbasset",
  description: "hello ! I am derradji amine abdelbasset, junior web developer, cloud service associate and a ICT student at ENSTTIC , based on Algeria",
  keywords: [
    "derradji amine abdelbasset",
    "cloud associate",
    "web developer",
    "igenergy club",
    "ensttic",
    "telecommunication"
  ], 
  icons:{
    icon : "/public/graphics/myLogo.jpg"

  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
