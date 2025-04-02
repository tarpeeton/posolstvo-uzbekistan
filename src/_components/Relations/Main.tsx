import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { RELATION_DESCRIPTION, RELATIONS_NAV } from "@/constants/relations";
import { ThemeContentItem } from "@/ui/ThemeContent";

export const RelationsMain = () => {
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
              ru: "Дипломатические отношения",
              uz: "Diplomatik aloqalar",
              en: "Diplomatic Relations",
              ur: "سفارتی تعلقات",
            },
            isCurrent: true,
          },
        ]}
      />

      <div className="mt-[24px] lg:mt-[45px]">
        <h1
          aria-label={t("ambassador_message")}
          className="text-[24px] lg:text-[32px]"
        >
          {t("diplomatic_relations")}
        </h1>
        <article className="mt-[16px] ">
          <p className="text-[16px]">{RELATION_DESCRIPTION[locale]}</p>
        </article>
      </div>

      <div className="mt-[50px] lg:mt-[32px] grid grid-cols-1 gap-[12px] lg:gap-[40px] lg:grid-cols-4">
        {RELATIONS_NAV.map((item, index) => (
          <ThemeContentItem
            key={index}
            name={item.title}
            href={item.href}
            image={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};
