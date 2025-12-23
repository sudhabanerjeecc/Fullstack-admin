import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import '@/styles/bootstrap.ltr.css';
import "@/styles/style.css";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: "Shop Admin",
  description: "Shop Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={` ${roboto.className} antialiased font-bold`}
      >
        {children}
        <Toaster className="right-0 top-0! h-auto text-base!" />
      </body>
    </html>
  );
}
