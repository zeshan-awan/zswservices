import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZWS Courier Service | Fast & Reliable Shipping",
  description: "Pakistan's leading courier and logistics service provider. Same-day delivery, domestic and international shipping available.",
  keywords: "courier, logistics, shipping, Pakistan, delivery, express",
  openGraph: {
    title: "ZWS Courier Service",
    description: "Fast and reliable courier service in Pakistan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
