import type { Metadata } from "next";
import localFont from "next/font/local";
import "../assets/scss/globals.scss";
import { ToastProvider } from "@/components/ui/Toast";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

const futura = localFont({
  src: "../assets/fonts/FuturaPT-Demi.woff2",
  display: "swap",
  preload: true,
  variable: "--font-futura",
});

const jost = localFont({
  src: "../assets/fonts/Jost-Regular.woff2",
  display: "swap",
  preload: true,
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "XPEL - Paint Protection Film and Ceramic Coating",
  description: "XPEL - Leading manufacturer of paint protection film and ceramic coating products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sev3lti.css" />
      </head>
      <body className={`${futura.variable} ${jost.variable} antialiased`}
      >
        <ToastProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ToastProvider>
      </body>
    </html>
  );
}
