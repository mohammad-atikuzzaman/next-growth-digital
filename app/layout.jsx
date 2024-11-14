import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "NextGrowth Digital",
  description:
    "Grow your business with data-driven advertising solution than deliver",
    icons: "/logo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
