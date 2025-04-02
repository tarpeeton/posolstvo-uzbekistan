import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { HISTORY_MISSION } from "@/constants/history-mission";
import { GoDownload } from "react-icons/go";

export const MissionHistoryMain = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="px-[20px] lg:px-[120px] pb-[80px] lg:pb-[120px]">
      <div className="mt-[12px] lg:mt-[24px]">
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
                ru: "Посольство",
                uz: "Elchixona",
                en: "Embassy",
                ur: "سفارت خانہ",
              },
              href: "/embassy",
            },
            {
              label: {
                ru: "История миссии",
                uz: "Missiya tarixi",
                en: "History of the Mission",
                ur: "مشن کی تاریخ",
              },
              isCurrent: true,
            },
          ]}
        />
      </div>

      <div className="mt-[24px] lg:mt-[48px]">
        <h1 className="mb-[26px] lg:mb-[30px] text-[20px] lg:text-[32px]">
          {t("mission_history")}
        </h1>
        <div className="flex flex-col gap-[16px] lg:gap-[20px]">
          <p className="text-[16px] lg:text-[20px] font-medium">
            {HISTORY_MISSION.title[locale]}
          </p>
          <p className="text-[16px]">{HISTORY_MISSION.description[locale]}</p>

          <a
            href="/documents/mission-history.pdf"
            download
            className="flex flex-row   justify-center cursor-pointer px-[10px] h-[40px] lg:w-[290px] gap-2 items-center lg:h-[40px] rounded-[4px] bg-[#427EFF] lg:px-[16px] text-white"
          >
            {t("historical_documents")}
            <GoDownload className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
};
