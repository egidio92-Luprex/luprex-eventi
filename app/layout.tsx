import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Luprex Eventi",
  description: "Gestione eventi demo senza Prisma",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
