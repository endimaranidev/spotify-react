import type { Metadata } from "next";
import '@/app/global.css'

export const metadata: Metadata = {
  title: "Spotify React - Alura",
  description: "Cópia da página inicial do React proposto pela Imersão Front-End da Alura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
