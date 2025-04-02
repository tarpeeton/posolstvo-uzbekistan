import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { EmbassySwiper } from "@/_components/Main/Slider";
import { MEDIA_BLOG } from "@/constants/media-blog";
import { CULTURAL_CONTENT } from "@/constants/cultural";

export const CulturalMain = () => {
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
                ur: "ہوم",
              },
              href: "/",
            },
            {
              label: {
                ru: "Дипломатические отношения",
                uz: "Diplomatik munosabatlar",
                en: "Diplomatic Relations",
                ur: "سفارتی تعلقات",
              },
              href: "/relations",
            },
            {
              label: {
                ru: "Культурные связи",
                uz: "Madaniy aloqalar",
                en: "Cultural Relations",
                ur: "ثقافتی تعلقات",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("cultural_relations_title")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("cultural_relations_title")}
          </h1>
          {/* CONTENT */}
          <div>
            <div
              className="lg:text-[16px]"
              dangerouslySetInnerHTML={{ __html: CULTURAL_CONTENT[locale] }}
            />
          </div>
        </div>
      </section>
      <EmbassySwiper slides={MEDIA_BLOG} />
    </>
  );
};
