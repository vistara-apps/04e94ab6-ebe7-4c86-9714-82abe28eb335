import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "Zara Agent Portfolio",
  description: "AI-powered portfolio management and agent-assisted trading on Base",
  openGraph: {
    title: "Zara Agent Portfolio",
    description: "AI-powered portfolio management and agent-assisted trading on Base",
    images: ["/zara-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
