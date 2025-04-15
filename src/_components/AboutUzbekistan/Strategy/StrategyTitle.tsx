"use client";
import { useEffect, useState } from "react";
import {
  STRATEGY_2030_TEXT,
  STRATEGY_OBJECTIVES,
  STRATEGY_DETAILS,
} from "@/constants/strategy";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { EmbassySwiper } from "@/_components/Main/Slider";
import { MEDIA_BLOG } from "@/constants/media-blog";
import { Axios } from "@/utils/api";
import { splitHtmlContent } from "@/utils/htmlContent";

interface IStrategy {
  title: string;
  content: string;
}

export const StrategyTitle = () => {
  const t = useTranslations();
  const locale = useLocale();

  const [strategy, setStrategy] = useState<IStrategy | null>(null);

  useEffect(() => {
    const fetchPrezidentInfo = async () => {
      const res = await Axios.get(`/page/2?lang=${locale}`);
      setStrategy(res.data.data);
    };
    fetchPrezidentInfo();
  }, []);

  const [htmlParts, setHtmlParts] = useState<{
    firstHalf: string;
    secondHalf: string;
  } | null>(null);

  useEffect(() => {
    if (strategy?.content) {
      const result = splitHtmlContent(strategy.content, 3);
      setHtmlParts(result);
    }
  }, [strategy]);

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
                ru: strategy?.title,
                uz: strategy?.title,
                en: strategy?.title,
                ur: strategy?.title,
              },
              isCurrent: true,
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-[16px] mt-[24px] lg:mt-[40px] px-[20px] lg:px-[120px]">
        <h1 className="text-[24px] lg:text-[32px]">{strategy?.title}</h1>
        {htmlParts && (
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: htmlParts?.firstHalf }} />
          </div>
        )}
      </div>
      <EmbassySwiper slides={MEDIA_BLOG} />

      <div className="flex flex-col gap-[30px] px-[20px] lg:px-[120px]">
          <div dangerouslySetInnerHTML={{ __html: htmlParts?.secondHalf }} />
      </div>
    </section>
  );
};
