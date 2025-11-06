import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/contexts/themeProvider";
import Footer from "@/components/Footer/Footer";
import Providers from "./providers";
import { Toaster } from "sonner";
import Banner from "@/components/Header/Banner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Picksy - Your Online Store for Everything",
  description:
    "Discover a wide range of products at Picksy. Shop now for the best deals and quality items!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/picksyIcon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Providers>
              <Banner />
              <Navbar />
              {children}
              <Toaster position="top-center" />
            </Providers>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
