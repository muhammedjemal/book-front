// import type { Metadata } from "next";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import { Source_Sans_3, Manrope } from "@next/font/google";

// import Footer from "@/components/Footer";
// import { siteDetails } from "@/data/siteDetails";

// import "./globals.css";

// const manrope = Manrope({ subsets: ["latin"] });
// const sourceSans = Source_Sans_3({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: siteDetails.metadata.title,
//   description: siteDetails.metadata.description,
//   openGraph: {
//     title: siteDetails.metadata.title,
//     description: siteDetails.metadata.description,
//     url: siteDetails.siteUrl,
//     type: "website",
//     images: [
//       {
//         url: "/images/adulis.png",
//         width: 1200,
//         height: 675,
//         alt: siteDetails.siteName,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteDetails.metadata.title,
//     description: siteDetails.metadata.description,
//     images: ["/images/twitter-image.jpg"],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${manrope.className} ${sourceSans.className} antialiased bg-hero-background`}
//       >
//         {siteDetails.googleAnalyticsId && (
//           <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
//         )}
//         {/* <Header /> */}
//         {/* <div className=" mt-[2rem]"> */}
//         {/* <SlidingBanner
//             // @ts-ignore
//             texts={[
//               "Welcome to our site!",
//               "Check out our deals!",
//               "Enjoy free shipping!",
//             ]}  
//           /> */}
//         {/* </div>  */}
//         <main>
//           {children}
//           {/* <DiscountButton /> */}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Source_Sans_3, Manrope } from "@next/font/google";
import { Toaster } from "react-hot-toast"; // Added for notifications

import Footer from "@/components/Footer";
import { siteDetails } from "@/data/siteDetails";
import { AuthProvider } from "@/context/AuthContext"; // Added Auth Context

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: "website",
    images: [
      {
        url: "/images/adulis.png",
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased bg-hero-background`}
      >
        <AuthProvider>
          {siteDetails.googleAnalyticsId && (
            <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
          )}
          {/* <Header /> */}
          {/* <div className=" mt-[2rem]"> */}
          {/* <SlidingBanner
            // @ts-ignore
            texts={[
              "Welcome to our site!",
              "Check out our deals!",
              "Enjoy free shipping!",
            ]}  
          /> */}
          {/* </div>  */}
          <main>
            {children}
            {/* <DiscountButton /> */}
          </main>
          <Footer />
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  ); 
}