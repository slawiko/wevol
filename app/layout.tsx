import "./globals.css";
import { Open_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import { Metadata, ResolvingMetadata } from "next";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <body className={openSans.className}>{children}</body>
    </html>
  );
}

export function generateMetadata(params: unknown, parent: ResolvingMetadata): Metadata {
  return {
    title: "WeVOL",
    description: "WeVOL",
    themeColor: "#4EB5FF",
  };
}
