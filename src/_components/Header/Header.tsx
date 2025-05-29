"use client";
import { useState, useEffect } from "react";
import { Clock3 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { formatDate } from "@/utils/timeFormated";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import LanguageSwitcher from "../Switcher";
import Navbar from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { RiTelegramFill } from "react-icons/ri";

export function Header() {
  const [date, setDate] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = formatDate(date, locale);

  return (
    <header className="flex flex-col">
      <div className="flex flex-row items-center px-5 lg:px-[120px] border-b border-gray-300 md:justify-between py-3">
        <div className="flex flex-row items-center gap-2">
          <Clock3 />
          <p className="text-[13px] text-[#0B0D22] md:text-[14px]">
            {mounted ? formattedDate : null}
          </p>
        </div>
        <div className="hidden md:flex md:flex-row md:items-center gap-5">
          <Link target="_blank" href="link">
            <FaFacebook className="lg:w-[20px] lg:h-[20px]" />
          </Link>
          <Link target="_blank" href="link">
            <RiTelegramFill className="lg:w-[23.5px] lg:h-[23.5px]" />
          </Link>
          <Link target="_blank" href="link">
            <FaXTwitter className="lg:w-[20px] lg:h-[20px]" />
          </Link>
          <Link target="_blank" href="link">
            <FiInstagram className="lg:w-[20px] lg:h-[20px]" />
          </Link>
        </div>
      </div>
      <div className="flex border-b border-gray-300 flex-row px-5 lg:px-[120px] items-center py-3.5 justify-between">
        <div className="flex flex-row items-center gap-2.5">
          <Image
            alt="logo"
            src={"/LOGO.png"}
            quality={100}
            width={40}
            height={40}
            className="md:w-[60px] md:h-[55px] object-cover"
          />
          <Link
            href={"/"}
            className="text-[#569FFF] text-[12.3px] lg:text-[15px] font-medium whitespace-pre-wrap"
          >
            {t("title")}
          </Link>
        </div>
        <div className="block md:hidden">
          <MobileMenu />
        </div>
        <div className="hidden md:flex px-5 flex-row items-center gap-5">
          {/* <div className="relative w-[300px]">
            <IoIosSearch
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder={t("search")}
              className="w-full h-10 pl-10 pr-3 rounded-md border border-gray-300 text-gray-900 
                   focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </div> */}
          <LanguageSwitcher mobile={false} currentLocale={locale} />
        </div>
      </div>
      {/* <div className="relative md:hidden w-full mt-2 px-[20px]">
        <IoIosSearch
          size={20}
          className="absolute left-[30px] top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder={t("search")}
          className="w-full h-10 pl-10 pr-3 rounded-md border border-gray-300 text-gray-900 
               focus:outline-none focus:border-blue-500 placeholder-gray-400"
        />
      </div> */}
      <Navbar />
    </header>
  );
}
