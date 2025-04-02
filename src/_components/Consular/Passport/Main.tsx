import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { GoDownload } from "react-icons/go";
import { PASSPORT_CONTENT, PASSPORT_QUESTION } from "@/constants/passport";

export const PassportMain = () => {
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
        ru: "Паспортные услуги",
        uz: "Pasport xizmatlari",
        en: "Passport Services",
        ur: "پاسپورٹ خدمات"
      },
      isCurrent: true,
    },
  ]}
/>


        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("consular_passport_title")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("consular_passport_title")}
          </h1>
          <p className="text-[15px] mt-2">
            {t("consular_passport_description")}
          </p>
        </div>

        <div className="mt-[20px] lg:mt-[30px]">
          <p
            className="lg:text-[15px] "
            dangerouslySetInnerHTML={{ __html: PASSPORT_CONTENT[locale] }}
          />
        </div>

        
        <div className="rounded mt-[40px] bg-[#DEDEE2] py-[30px] px-[20px] lg:px-[40px] flex flex-col gap-[16px]">
          <p className="text-[20px] font-medium">
            {PASSPORT_QUESTION[locale].description}
          </p>
          <div
            className="text-[15px]"
            dangerouslySetInnerHTML={{
              __html: PASSPORT_QUESTION[locale].content,
            }}
          />
          <p className="text-[15px]">{PASSPORT_QUESTION[locale].note}</p>
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
