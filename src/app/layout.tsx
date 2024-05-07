import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "WA loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/> 
        {children}
      </body>
    </html>
  );
}
