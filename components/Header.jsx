"use client";
import i18next from "i18next";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

// Components
import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "./ui/button";

console.log(i18next.language);
const Header = () => {
  const [isLangue, setLang] = useState("");
  const { t } = useTranslation();

  function changeLang() {
    if (i18next.language === "fr") {
      i18next.changeLanguage("en");
      setLang("fr");
    } else {
      i18next.changeLanguage("fr");
      setLang("en");
    }
  }
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={""}>
          <h1 className="text-4xl font-semibold">
            Brahim<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*Desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>{t("hireme")}</Button>
          </Link>
        </div>
        <Button
          onClick={changeLang}
          className="hidden xl:flex"
          variant="outline"
        >
          <ReactCountryFlag
            style={{ width: "20px" }}
            countryCode={`${i18next.language === "fr" ? "FR" : "US"}`}
            svg
          />
        </Button>
        {/** mobile nav */}
        <div className="xl:hidden">
          <MobileNav>
            <Button
              onClick={changeLang}
              variant={"outline"}
              className="items-center w-24 h-12"
            >
              <ReactCountryFlag
                style={{ width: "20px" }}
                countryCode={`${i18next.language === "fr" ? "FR" : "US"}`}
                svg
              />
            </Button>
          </MobileNav>
        </div>
      </div>
    </header>
  );
};

export default Header;
