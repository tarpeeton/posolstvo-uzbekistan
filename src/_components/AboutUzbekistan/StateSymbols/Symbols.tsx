"use client";
import { useRef, useState } from "react";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { GERB_HTML, FLAG_HTML, GIMN_HTML, GIMN } from "@/constants/symbols";

export const SomeSymbols = () => {
  const t = useTranslations();
  const locale = useLocale();

  const audioRef = useRef<HTMLAudioElement>(null);

  const [showControls, setShowControls] = useState(false);

  const handlePlay = () => {
    setShowControls(true);
    audioRef.current?.play();
  };
  return (
    <section className="pb-[60px] lg:pb-[120px]">
      <div className="mt-[20px] lg:mt-[24px] ">
        <Breadcrumb
          items={[
            {
              label: {
                ru: "Главная",
                uz: "Bosh sahifa",
                en: "Home",
                ur: "صفحہ اول",
              },
              href: "/",
            },
            {
              label: {
                ru: "О Узбекистане",
                uz: "O‘zbekiston haqida",
                en: "About Uzbekistan",
                ur: "ازبکستان کے بارے میں",
              },
              href: "/about-uzbekistan",
            },
            {
              label: {
                ru: "Государственные символы",
                uz: "Davlat ramzlari",
                en: "State Symbols",
                ur: "ریاستی علامات",
              },
              isCurrent: true,
            },
          ]}
        />
      </div>

      <h1 className="mt-[24px] text-[24px] lg:text-[32px] lg:mt-[48px]">
        {t("state_symbol_title")}
      </h1>

      <div className="flex flex-col gap-[30px] lg:gap-[70px]  mt-[20px] lg:mt-[27px]">
        <div className="flex flex-col gap-[16px]">
          <p className="title-text ">{t("stateEmblem")}</p>
          <Image
            width={100}
            height={100}
            src="https://ucarecdn.com/36ee4dd1-141c-485c-a614-f4f750fe7582/-/preview/274x284/"
            alt={t("stateEmblem")}
            quality={100}
            className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] object-cover"
          />
          <p
            className="lg:text-[15px] whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: GERB_HTML[locale] }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[30px] lg:gap-[70px]  mt-[20px] lg:mt-[27px]">
        <div className="flex flex-col gap-[16px]">
          <p className="title-text">{t("stateFlag")}</p>
          <Image
            width={100}
            height={100}
            src="https://ucarecdn.com/31aceef1-7a46-4923-9747-ea294cdcc4cf/-/preview/310x155/"
            alt={t("stateFlag")}
            quality={100}
            className="w-[150px] h-[80px] lg:w-[400px] lg:h-[200px] object-cover"
          />
          <p
            className="lg:text-[15px] whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: FLAG_HTML[locale] }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[30px] lg:gap-[70px] w-full  mt-[20px] lg:mt-[27px]">
        <div className="flex flex-col gap-[16px] w-full">
          <p className="title-text">{t("stateAnthem")}</p>
          <Image
            width={1000}
            height={600}
            src="https://ucarecdn.com/e4de081a-6893-4bce-aa13-b631cdbbe666/-/preview/1200x900/"
            alt={t("stateAnthem")}
            quality={100}
            className="w-[150px] h-[80px] lg:w-[800px] lg:h-[600px] object-cover"
          />
          <p
            className="lg:text-[15px] whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: GIMN_HTML[locale] }}
          />
          <p className=" whitespace-pre-wrap ">
            {locale === "ru" ? GIMN.ru : GIMN.uz}
          </p>

          <div className="flex flex-row lg:flex-row items-center  mt-4">
            <button
              className="cursor-pointer text-[23px]  text-blue-600 pr-1 rounded"
              onClick={handlePlay}
            >
              {t("listening")}
            </button>
            <p className="text-blue-600 pr-1">/</p>
            <a
              href="/madhiya.mp3"
              download
              className="cursor-pointer text-[23px] text-blue-600 "
            >
              {t("download")}
            </a>
          </div>
          <audio
            ref={audioRef}
            src="/madhiya.mp3"
            controls={showControls}
            className="w-full max-w-[300px]"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
};
