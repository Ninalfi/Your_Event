import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: [ "100","200", "400", "500", "600", "800"],
});

export const metadata = {
  metadataBase: new URL("https://your-event-theta.vercel.app"),

  title: {
    default: "YourEvent | Discover & Join Amazing Events",
    template: "%s | YourEvent",
  },

  description:
    "YourEvent is a modern event management platform where users can discover, join, and manage conferences, workshops, meetups, and networking events.",

  keywords: [
    "event management",
    "events platform",
    "conferences",
    "workshops",
    "meetups",
    "tech events",
    "networking events",
  ],

  authors: [
    {
      name: "YourEvent",
      url: "https://your-event-theta.vercel.app",
    },
  ],

  creator: "YourEvent",
  applicationName: "YourEvent",

  icons: {
    icon: "https://i.ibb.co/LD6KM4Fr/logo.png",
    shortcut: "https://i.ibb.co/LD6KM4Fr/logo.png",
    apple: "https://i.ibb.co/LD6KM4Fr/logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "YourEvent | Discover & Join Amazing Events",
    description:
      "Explore conferences, workshops, meetups, and networking events. Join events easily with YourEvent.",
    url: "https://your-event-theta.vercel.app",
    siteName: "YourEvent",
    images: [
      {
        url: "https://i.ibb.co/rRYmMb7d/image.png",
        width: 1200,
        height: 630,
        alt: "YourEvent Home Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YourEvent | Discover & Join Amazing Events",
    description:
      "Discover conferences, workshops, meetups, and networking events with EventSphere.",
    images: ["https://i.ibb.co/rRYmMb7d/image.png"],
  },

  alternates: {
    canonical: "https://eventsphere.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
          {children}
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
