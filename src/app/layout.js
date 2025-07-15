import { Geist, Geist_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Roboto
const roboto = Roboto({
  variable: "--font-roboto", // Define a CSS variable for Roboto
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor", 
  },
  description: "Car Repairing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>
      <AuthProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
      <ToastContainer position="top-center" />
        </body>
      </AuthProvider>
      
    </html>
  );
}
