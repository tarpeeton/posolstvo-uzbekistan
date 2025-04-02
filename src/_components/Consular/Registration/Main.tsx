"use client";
import { REGISTRATION_CONTENT } from "@/constants/registration";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";

export const RegistrationMain = () => {
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
        ur: "صفحہ اول"
      },
      href: "/",
    },
    {
      label: {
        ru: "Консульские услуги",
        uz: "Konsullik xizmatlari",
        en: "Consular Services",
        ur: "قونصلر خدمات"
      },
      href: "/consular",
    },
    {
      label: {
        ru: "Консульский учет",
        uz: "Konsullik ro‘yxatga olish",
        en: "Consular Registration",
        ur: "قونصلر رجسٹریشن"
      },
      isCurrent: true,
    },
  ]}
/>


        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("registration_title")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("registration_title")}
          </h1>

          <div className="mt-[16px] lg:mt-[20px] flex flex-col gap-[20px] lg:gap-[40px]">
            {REGISTRATION_CONTENT.map((section, index) => (
              <div key={index} className="flex flex-col gap-[10px]">
                <p className="text-[20px] font-medium">
                  {section.title[locale]}
                </p>
                <ul className="list-none lg:pl-[20px] text-[15px] space-y-[6px] mt-[10px]">
                  {section.content[locale].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
