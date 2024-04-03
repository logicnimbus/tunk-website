import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tunk || Voice to Text",
  description:
    "Voive to text app with AI and human transcription services, we offer faster transcription service with higher accuracy and fast delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
