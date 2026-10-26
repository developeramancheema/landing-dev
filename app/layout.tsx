import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from "next/font/google";
import { BASE_URL, APP_NAME, contactInfo } from "@/lib/config";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GetSetTime – Smart Scheduling App for Booking Automation",
  description: "Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${BASE_URL}`,
  },
  openGraph: {
    title: "GetSetTime – Smart Scheduling App for Booking Automation",
    description: "Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.",
    url: `${BASE_URL}`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GetSetTime – Smart Scheduling App for Booking Automation",
    description: "Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.",
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — injects gtm.js (runs from head) */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBQPQS8H');
          `}
        </Script>

        {/* <Script src="//code.jivosite.com/widget/43NbnJgLyO" strategy="lazyOnload"></Script> */}
      </head>

      <body className={`${roboto.variable}`}>
        {/* Google Tag Manager (noscript) fallback — first thing under body */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-WBQPQS8H`} height={0} width={0} style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager"/>
        </noscript>

        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}