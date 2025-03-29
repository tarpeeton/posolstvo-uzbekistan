import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { CONTENT_RELATION_HTML, RELATION_HISTORY } from "@/constants/relations";
import { EmbassySwiper } from "@/_components/Main/Slider";
import { MEDIA_BLOG } from "@/constants/media-blog";
import { POLITICAL_CONTENT } from "@/constants/political";

export const RelationsPolitical = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <section className="px-[20px] lg:px-[120px] mt-[24px] pb-[80px]">
        <Breadcrumb
          items={[
            {
              label: {
                ru: "Главная",
                uz: "Bosh sahifa",
                en: "Home",
              },
              href: "/",
            },
            {
              label: {
                ru: "Дипломатические отношения",
                uz: "Diplomatik munosabatlar",
                en: "Diplomatic Relations",
              },
              href: "/relations",
            },
            {
              label: {
                ru: "Политические отношения",
                uz: "",
                en: "",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("political_relations_title")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("political_relations_title")}
          </h1>
           {/* CONTENT */}
        <div>
          <div
            className="lg:text-[16px] whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: POLITICAL_CONTENT[0][locale] }}
          />
        </div>
        </div>
       
      </section>
      <EmbassySwiper slides={MEDIA_BLOG} />
    </>
  );
};
