import "./globals.css";
import { Jakarta_Sans } from "next/font/google";

const jakarta = Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: "VocaLearn Dashboard",
  description: "Pantau perkembangan belajar anak dengan dashboard VocaLearn.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="font-sans bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
