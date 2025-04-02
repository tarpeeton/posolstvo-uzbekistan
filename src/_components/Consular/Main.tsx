import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { ThemeContentItem } from "@/ui/ThemeContent";
import { CONSULAR_CONTENT, CONSULAR_NAV } from "@/constants/consular";

export const ConsularMain = () => {
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
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("consular_relations_title")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("consular_relations_title")}
          </h1>
          {/* CONTENT */}
          <div>
            <div
              className="lg:text-[16px]"
              dangerouslySetInnerHTML={{ __html: CONSULAR_CONTENT[locale] }}
            />
          </div>
        </div>

        <div className="mt-[24px] lg:mt-[100px] lg:grid-cols-4  grid grid-cols-1 gap-[20px] lg:gap-[40px]">
          {CONSULAR_NAV.map((con) => (
            <ThemeContentItem key={con.id} name={con.name} href={con.href} />
          ))}
        </div>
      </section>
    </>
  );
};
