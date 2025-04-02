"use client";

import { INVESTMENTS_HTML } from "@/constants/investment";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";

export const InvestmentsMain = () => {
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
                ru: "Экономическая дипломатия",
                uz: "Iqtisodiy diplomatiya",
                en: "Economic Diplomacy",
                ur: "اقتصادی سفارت کاری",
              },
              href: "/economy",
            },
            {
              label: {
                ru: "Инвестиционные проекты",
                uz: "Investitsiya loyihalari",
                en: "Investment Projects",
                ur: "سرمایہ کاری کے منصوبے",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("economic_diplomacy")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("economic_diplomacy")}
          </h1>
          <p className="mt-4">{t("uzbekistan_description")}</p>
        </div>

        <p
          className="lg:text-[15px] "
          dangerouslySetInnerHTML={{ __html: INVESTMENTS_HTML[locale] }}
        />
      </section>
    </>
  );
};
