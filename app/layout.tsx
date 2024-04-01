"use client";

import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import {NotificationContainer} from 'react-notifications';

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
          <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PDNCPM88');
            `}
          </script>
      </head>
      

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDNCPM88"
      height="0" width="0" style={{display: 'none', visibility:'hidden'}}></iframe></noscript>

        <Providers>
          {children}
        </Providers>
        <NotificationContainer/>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

