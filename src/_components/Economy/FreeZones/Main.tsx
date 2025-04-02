import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { GoDownload } from "react-icons/go";
import { PASSPORT_CONTENT, PASSPORT_QUESTION } from "@/constants/passport";
import { FREE_ZONES } from "@/constants/free-zone";

export const FreeZonesMain = () => {
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
                ru: "Свободные экономические зоны",
                uz: "Erkin iqtisodiy zonalar",
                en: "Free Economic Zones",
                ur: "آزاد اقتصادی زونز",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("free_economic_zones")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("free_economic_zones")}
          </h1>
          <p className="text-[15px] mt-2">
            {t("consular_passport_description")}
          </p>
        </div>

        <div className="mt-[20px] lg:mt-[30px]">
          <p
            className="lg:text-[15px] "
            dangerouslySetInnerHTML={{ __html: FREE_ZONES[locale] }}
          />
        </div>

        <a
          href="/documents/mission-history.pdf"
          download
          className="flex flex-row mt-[40px] lg:h-[50px]   justify-center cursor-pointer px-[10px] h-[40px] lg:w-[290px] gap-2 items-center  rounded-[4px] bg-[#427EFF] lg:px-[16px] text-white"
        >
          {t("required_documents")}
          <GoDownload className="w-[18px] h-[18px]" />
        </a>
      </section>
    </>
  );
};
