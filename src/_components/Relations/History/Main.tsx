import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { CONTENT_RELATION_HTML, RELATION_HISTORY } from "@/constants/relations";
import { EmbassySwiper } from "@/_components/Main/Slider";
import { MEDIA_BLOG } from "@/constants/media-blog";

export const RelationsHistoryMain = () => {
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
                ru: "История сотрудничества",
                uz: "Hamkorlik tarixi",
                en: "History of Cooperation",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px]">
          <h1
            aria-label={t("relations_history_title")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("relations_history_title")}
          </h1>
          <article className="mt-[16px] ">
            <p className="text-[16px]">{RELATION_HISTORY[locale]}</p>
          </article>
        </div>
        {/* CONTENT */}
        <div className="mt-[70px] lg:mt-[36px]">
          <span
            className="lg:text-[16px] whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: CONTENT_RELATION_HTML[locale] }}
          />
        </div>
      </section>
      <EmbassySwiper slides={MEDIA_BLOG} />
    </>
  );
};
