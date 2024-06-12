import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import "leaflet/dist/leaflet.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            data-theme="black"
            className="mb-32 bg-gradient-circular"
            lang="en"
        >
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
