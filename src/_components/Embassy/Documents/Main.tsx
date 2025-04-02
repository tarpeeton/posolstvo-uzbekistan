import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { GoDownload } from "react-icons/go";
import { DOCUMENT_DESCRIPTION } from "@/constants/documents";

export const DocumentMain = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="px-[20px] lg:px-[120px] mt-[24px] pb-[80px] lg:pb-[120px]">
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
              ru: "Документы",
              uz: "Xujjatlar",
              en: "Documents",
              ur: "دستاویزات",
            },
            isCurrent: true,
          },
        ]}
      />

      <div className="flex flex-col gap-[24px] mt-[24px] lg:mt-[48px]">
        <h1 className="text-[24px] lg:text-[32px]">{t("document_title")}</h1>
        <ul className="lg:pl-[20px]">
          {DOCUMENT_DESCRIPTION.map((doc) => (
            <li key={doc.id} className="text-[15px] list-disc ">
              {doc.title[locale]}
            </li>
          ))}
        </ul>
        <a
          href="/documents/mission-history.pdf"
          download
          className="flex flex-row   justify-center cursor-pointer px-[10px] h-[40px] lg:w-[290px] gap-2 items-center lg:h-[40px] rounded-[4px] bg-[#427EFF] lg:px-[16px] text-white"
        >
          {t("official_documents")}
          <GoDownload className="w-[18px] h-[18px]" />
        </a>
      </div>
    </section>
  );
};
