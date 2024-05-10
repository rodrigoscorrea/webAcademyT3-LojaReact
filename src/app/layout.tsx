import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import BootstrapClient from "./components/BootstrapClient";
import { ReactQueryClientProvider } from "./components/ReactQueryClient";

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
        <ReactQueryClientProvider>
          <NavBar/> 
          {children}
          <BootstrapClient/>
        </ReactQueryClientProvider>
        
      </body>
    </html>
  );
}
