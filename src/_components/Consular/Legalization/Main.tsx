"use client";

import {
  LEGALIZATION_CONTENT_TA,
  LEGALIZATION_REQUIREMENTS_TA,
} from "@/constants/legalization";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";

export const LegalizationMain = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <section className="px-[20px] lg:px-[120px] mt-[24px] pb-[80px] lg:pb-[120px]">
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
                ru: "Консульские услуги",
                uz: "Konsullik xizmatlari",
                en: "Consular Services",
                ur: "قونصلر خدمات",
              },
              href: "/consular",
            },
            {
              label: {
                ru: "Легализация документов",
                uz: "Hujjatlarni legallashtirish",
                en: "Document Legalization",
                ur: "دستاویزات کی توثیق",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("DOCUMENT_LEGALIZATION")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("DOCUMENT_LEGALIZATION")}
          </h1>
        </div>

        <div className="mt-[20px] lg:mt-[30px]">
          <p
            className="lg:text-[15px] "
            dangerouslySetInnerHTML={{
              __html: LEGALIZATION_CONTENT_TA[locale],
            }}
          />
        </div>

        <h1
          aria-label={t("DOCUMENT_LIST_REQUIRED")}
          className="text-[24px] lg:text-[32px] mt-[40px]"
        >
          {t("DOCUMENT_LIST_REQUIRED")}
        </h1>

        <div className="mt-[20px] lg:mt-[30px]">
          <p
            className="lg:text-[15px] "
            dangerouslySetInnerHTML={{
              __html: LEGALIZATION_REQUIREMENTS_TA[locale],
            }}
          />
        </div>
      </section>
    </>
  );
};
