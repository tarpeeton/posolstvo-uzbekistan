import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { GoDownload } from "react-icons/go";
import { VISAS_CONTENT_HTML, VISAS_DESCRIPTION } from "@/constants/visas";

export const VisasMain = () => {
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
        ru: "Визы",
        uz: "Vizalar",
        en: "Visas",
        ur: "ویزے"
      },
      isCurrent: true,
    },
  ]}
/>


        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("consular_visas_title")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("consular_visas_title")}
          </h1>
          <div className="flex flex-col gap-3">
            {VISAS_DESCRIPTION.map((visa) => (
              <p key={visa.id} className="text-[15px] ">
                {visa.name[locale]}
              </p>
            ))}
          </div>
          <h2 className="text-[20px] lg:text-[32px] mt-[42px]">
            {t("visa_application_process_title")}
          </h2>
        </div>

        <div className="mt-[20px] lg:mt-[30px]">
          <p
            className="lg:text-[15px] "
            dangerouslySetInnerHTML={{ __html: VISAS_CONTENT_HTML[locale] }}
          />
        </div>

        <a
          href="/documents/mission-history.pdf"
          download
          className="flex flex-row mt-[40px]   justify-center cursor-pointer px-[10px] h-[40px] lg:w-[290px] gap-2 items-center lg:h-[40px] rounded-[4px] bg-[#427EFF] lg:px-[16px] text-white"
        >
          {t("application_forms_title")}
          <GoDownload className="w-[18px] h-[18px]" />
        </a>
      </section>
    </>
  );
};
