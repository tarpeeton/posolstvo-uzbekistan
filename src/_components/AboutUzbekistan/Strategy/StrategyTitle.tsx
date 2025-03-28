import {
  STRATEGY_2030_TEXT,
  STRATEGY_OBJECTIVES,
  STRATEGY_DETAILS,
} from "@/constants/strategy";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { EmbassySwiper } from "@/_components/Main/Slider";
import { MEDIA_BLOG } from "@/constants/media-blog";

export const StrategyTitle = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className=" mt-6 lg:mt-7  mb-[20px] lg:mb-[40px]">
      <div className="px-[20px] lg:px-[120px]">
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
            },
            {
              label: {
                ru: "Стратегия 'Узбекистан-2030",
                uz: "O'zbekiston-2030 strategiyasi",
                en: "Uzbekistan-2030 Strategy",
              },
              isCurrent: true,
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-[16px] mt-[24px] lg:mt-[40px] px-[20px] lg:px-[120px]">
        <h1 className="text-[24px] lg:text-[32px]">{t("strategy_title")}</h1>
        <p
          className="lg:text-[16px] whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: STRATEGY_2030_TEXT[locale] }}
        />
      </div>
      <EmbassySwiper slides={MEDIA_BLOG} />

      <div className="flex flex-col gap-[30px] px-[20px] lg:px-[120px]">
        <div className="flex flex-col gap-[20px]">
          <p className="text-[23px] lg:text-[32px]">
            {t("strategy_title_question")}
          </p>
          <p className="text-[18px] lg:text-[20px]  font-medium">
            {t("strategy_title_qwest")}
          </p>
          <ul className="pl-[20px] lg:w-[80%]">
            {STRATEGY_OBJECTIVES.map((item, index) => (
              <li className="list-disc " key={index}>
                {item[locale]}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[20px] lg:gap-[28px]">
          <h2 className="text-[24px] lg:text-[32px]">
          {t("priorityDirections")}

          </h2>

          {STRATEGY_DETAILS.map((item, index) => (
            <div key={item.title[locale] + index + index} className="flex flex-col gap-2">
              <p className="text-[18px] lg:text-[20px] font-medium">{item.title[locale]}</p>
              <p className="text-[16px] whitespace-pre-wrap">{item.description[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
