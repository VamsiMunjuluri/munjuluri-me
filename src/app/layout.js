import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/navbar";

export const metadata = {
  title: "Vamsi Munjuluri",
  description: "Welcome to my portfolio site!",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <main className="flex-grow">{children}</main>
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
