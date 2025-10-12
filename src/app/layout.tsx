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
  title: `Brave new mongolia`,
  description: `Mongolian tourism website`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="Brave new mongolia logo" href="/round.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
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
