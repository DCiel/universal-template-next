import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { inter } from "@/styles/fonts";
import { cn } from "@/common/utils";
import { LayoutProps } from "../../.next/types/app/layout";

const titleSite = "DCiel Template";
const descriptionSite = "Default template studio";

export const metadata: Metadata = {
  title: titleSite,
  description: descriptionSite,
  authors: {
    name: "DCiel | Vingrig",
    url: "https://github.com/faes763"
  },
  creator: "dciel",
  openGraph: {
    title: titleSite,
    description: descriptionSite,
    siteName: "DCiel",
    locale: "ru-RU",
    type: "website",
    images: [
      {
        url: "/other/graph.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appLinks: {
    web: {
      url: "http://localhost:3000",
      should_fallback: true,
    }
  },
  category: 'technology',
  bookmarks: ["https://nextjs.org/blog/next-15","https://zustand.docs.pmnd.rs/guides/tutorial-tic-tac-toe","https://ui.shadcn.com/docs",],

};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000",
}


const RootLayout: React.FC<LayoutProps> = ({
  children,
}) =>  {
  return (
    <html lang="en">
      <body
        className={cn(inter.className,`antialiased`)}
      >
        {children}
      </body>
    </html>
  );
}



export default RootLayout;
