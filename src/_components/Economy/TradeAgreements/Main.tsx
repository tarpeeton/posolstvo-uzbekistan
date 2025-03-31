import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import Faq from "@/ui/faq";
import { FAQ_DATA } from "@/constants/faq";
import { TRADE_CONTENT } from "@/constants/trade";

export const TradeAgreementsMain = () => {
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
              },
              href: "/",
            },
            {
              label: {
                ru: "Экономическая дипломатия",
                uz: "Iqtisodiy diplomatiya",
                en: "Economic Diplomacy",
              },
              href: "/economy",
            },
            {
              label: {
                ru: "Торговые соглашения",
                uz: "Savdo bitimlari",
                en: "Trade Agreements",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("trade_agreements")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("trade_agreements")}
          </h1>
        
        </div>
        <div className="mt-[30px] lg:mt-[40px] ">
          <p
            className="lg:text-[15px] "
            dangerouslySetInnerHTML={{ __html: TRADE_CONTENT[locale] }}
          />
        </div>

        <div className="w-full flex flex-col gap-4 mt-[50px] lg:mt-[100px]">
          <h1 aria-label="FAQ" className="text-[24px] lg:text-[32px]">
            FAQ
          </h1>
          <Faq data={FAQ_DATA} />
        </div>
      </section>
    </>
  );
};
