import { Breadcrumb } from "@/ui/breadcrumb";
import {useTranslations } from "next-intl";
import { ThemeContentItem } from "@/ui/ThemeContent";
import { ECONOMY_NAV } from "@/constants/economy";

export const EconomyMain = () => {
  const t = useTranslations();

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
                ru: "Экономическая дипломатия",
                uz: "Iqtisodiy diplomatiya",
                en: "Economic Diplomacy",
                ur: "اقتصادی سفارتکاری",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("economic_diplomacy")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("economic_diplomacy")}
          </h1>
          <p className="mt-4">{t("uzbekistan_description")}</p>
        </div>

        <div className="mt-[24px] lg:mt-[100px] lg:grid-cols-4  grid grid-cols-1 gap-[20px] lg:gap-[40px]">
          {ECONOMY_NAV.map((con) => (
            <ThemeContentItem
              key={con.id}
              image={con.url}
              name={con.name}
              href={con.href}
            />
          ))}
        </div>
      </section>
    </>
  );
};
