"use client";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ActualTheme } from "./ActualTheme";
import { MEDIA_BLOG } from "@/constants/media-blog";
import { EmbassySwiper } from "../Main/Slider";
import { WelComeUzbekistan } from "./WelcomeUzbekistan";

const rawHTML = `
Республика Узбекистан расположена в Центральной Азии и занимает площадь 448,9 тыс. кв. км. Протяженность территории республики с запада на восток – 1425 километров, с севера на юг – 930 километров.<br /><br />
Территория на севере и северо-востоке граничит с Казахстаном, на востоке и юго-востоке – с Кыргызстаном и Таджикистаном, на западе — с Туркменистаном, на юге – с Афганистаном. Общая длина государственной границы составляет 6221 километр. Протяженность границ с Афганистаном – 137 км., с Казахстаном – 2203 км., с Кыргызстаном – 1099 км., с Таджикистаном – 1161 км. и с Туркменистаном – 1621 км. 
(<a href="https://www.gov.uz/ru/pages/administrative_division" target="_blank" rel="noopener noreferrer" class="underline">
административно-территориальное деление Республики Узбекистан</a>).<br /><br />
Республика Узбекистан обрела независимость 1 сентбря 1991 года. На сегодняшний день наша страна установила дипломатические отношения с 134 государствами мира. 
В городе Ташкенте функционируют 45 посольств и консульств зарубежных государств, ряд представительств международных организаций, торговые дома. 
С дипломатическими миссиями Узбекистана за рубежом можно ознакомиться по 
<a href="https://mfa.uz/ru" target="_blank" rel="noopener noreferrer" class="underline">следующей ссылке</a>.
`;

export const AboutUzbekistanMain = () => {
  const t = useTranslations();
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
              },
              href: "/",
            },
            {
              label: {
                ru: "О Узбекистане",
                uz: "O‘zbekiston haqida",
                en: "About Uzbekistan",
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
            className="lg:text-[15px] whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: rawHTML }}
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
      <ActualTheme />
            <EmbassySwiper slides={MEDIA_BLOG} />
            <WelComeUzbekistan />
    </section>
  );
};
