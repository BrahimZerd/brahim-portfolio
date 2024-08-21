import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/i18n/i18n-context";
import { detectLanguage } from "@/i18n/server";
import { dir } from "i18next";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Brahim Zerd Website",
  description: "Portfolio of brahim zerd",
};

export default async function RootLayout({ children }) {
  const lng = await detectLanguage();

  return (
    <I18nProvider language={lng}>
      <html lang={lng} dir={dir(lng)}>
        <body className={JetBrainsMono.className}>
          <Header />
          <Toaster />

          <StairTransition />

          {children}
        </body>
      </html>
    </I18nProvider>
  );
}
