import ReduxProvider from "@/providers/redux";
import "@/styles/global.css";
import "keen-slider/keen-slider.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { NuqsAdapter } from "nuqs/adapters/react";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `BNM website`,
  description: `BNM website`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <ReduxProvider>
            <MantineProvider>{children}</MantineProvider>
            <Toaster />
          </ReduxProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
