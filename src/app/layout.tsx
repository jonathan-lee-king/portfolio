import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Jonathan King&apos;s Portfolio</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Main Content */}
        {children}

        {/* Vercel Analytics Tracking:  https://vercel.com/docs/analytics/quickstart#add-the-analytics-component-to-your-app */}
        <Analytics />

        {/* Vercel Speed Insights:  https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app  */}
        <SpeedInsights />
      </body>
    </html>
  );
}
