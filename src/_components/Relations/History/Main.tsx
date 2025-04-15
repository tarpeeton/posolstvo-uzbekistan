"use client";
import { useEffect, useState } from "react";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { RELATION_HISTORY } from "@/constants/relations";
import { EmbassySwiper } from "@/_components/Main/Slider";
import { MEDIA_BLOG } from "@/constants/media-blog";
import { Axios } from "@/utils/api";

interface IMilestone {
  title: string;
  content: string;
}

export const RelationsHistoryMain = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [Content, setContent] = useState<IMilestone | null>(null);

  useEffect(() => {
    const getAllStaffs = async () => {
      const res = await Axios.get(`/milestone?lang=${locale}`);
      setContent(res.data.data[0]);
    };

    getAllStaffs();
  }, [locale]);

  return (
    <>
      <section className="px-[20px] lg:px-[120px] mt-[24px] pb-[80px]">
        <Breadcrumb
          items={[
            {
              label: {
                ru: "Главная",
                uz: "Bosh sahifa",
                en: "Home",
                ur: "ہوم",
              },
              href: "/",
            },
            {
              label: {
                ru: "Дипломатические отношения",
                uz: "Diplomatik munosabatlar",
                en: "Diplomatic Relations",
                ur: "سفارتی تعلقات",
              },
              href: "/relations",
            },
            {
              label: {
                ru: "История сотрудничества",
                uz: "Hamkorlik tarixi",
                en: "History of Cooperation",
                ur: "تعاون کی تاریخ",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px]">
          <h1
            aria-label={t("relations_history_title")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("relations_history_title")}
          </h1>
          <article className="mt-[16px] ">
            <p className="text-[16px]">{RELATION_HISTORY[locale]}</p>
          </article>
        </div>
        {/* CONTENT */}
        <div className="mt-[70px] lg:mt-[36px]">
          <p className="text-black font-bold lg:text-[20px]  text-[17px]">
            {Content?.title}
          </p>
          <span
            className="lg:text-[16px] custom-ul-style"
            dangerouslySetInnerHTML={{ __html: Content?.content }}
          />
        </div>
      </section>
      <EmbassySwiper slides={MEDIA_BLOG} />
    </>
  );
};
