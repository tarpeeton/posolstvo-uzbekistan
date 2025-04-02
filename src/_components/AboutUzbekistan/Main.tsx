"use client";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { MEDIA_BLOG } from "@/constants/media-blog";
import { EmbassySwiper } from "../Main/Slider";
import { WelComeUzbekistan } from "./WelcomeUzbekistan";
import { ThemeContentItem } from "@/ui/ThemeContent";
import {
  UZBEKISTAN_NAV,
  ABOUT_COUNTRY_HTML,
} from "@/constants/about-uzbekistan";

export const AboutUzbekistanMain = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section>
      <div className="px-[20px] lg:px-[120px] flex flex-col gap-[25px] lg:gap-[48px] mt-[20px]">
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
              isCurrent: true,
            },
          ]}
        />

        <div className="flex flex-col gap-[16px]">
          <h1 className="lg:text-[32px] text-[28px] md:w-[40%]">
            {t("general_information")}
          </h1>
          <p
            className="lg:text-[15px] "
            dangerouslySetInnerHTML={{ __html: ABOUT_COUNTRY_HTML[locale] }}
          />
          <div className="lg:w-[60%]">
            <Image
              width={1000}
              alt="uzbekistan flag uzbekistan bayrogi"
              height={800}
              quality={100}
              src="https://ucarecdn.com/0ef9f62f-a161-452a-9a3b-d4b3cd81a4ba/-/preview/1000x671/"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-[20px] lg:mt-[120px] mt-[40px] lg:px-[120px]">
        <p className="mb-[20px] text-[20px] lg:text-[24px]">{t("topics")}</p>
        <div className="grid grid-cols-1 gap-[20px] lg:gap-[40px] lg:grid-cols-4  ">
          {UZBEKISTAN_NAV.map((item) => (
            <ThemeContentItem key={item.id} name={item.name} href={item.href} />
          ))}
        </div>
      </div>
      <EmbassySwiper slides={MEDIA_BLOG} />
      <WelComeUzbekistan />
    </section>
  );
};
