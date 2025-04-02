import { AMBASSADOR_DESCRIPTION } from "@/constants/ambassador";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { AmbassadorVideo } from "./AmbassadorVideo";

export const AmbassadorMain = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="px-[20px] lg:px-[120px] mt-[24px]">
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
              ru: "Посольство",
              uz: "Elchixona",
              en: "Embassy",
              ur: "سفارت خانہ",
            },
            href: "/embassy",
          },
          {
            label: {
              ru: "Обращение посла",
              uz: "Elchining murojaati",
              en: "Ambassador's message",
              ur: "سفیر کا پیغام",
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
          {t("ambassador_message")}
        </h1>
        <article className="mt-[25px] lg:mt-[40px]">
          <Image
            quality={100}
            width={400}
            height={600}
            alt={t("ambassador_message")}
            src={
              "https://ucarecdn.com/5191202e-b7a2-4a23-aa91-aee214a08387/-/preview/680x453/"
            }
            className="w-[300px] h-[400px]  object-cover"
          />
          <p className="whitespace-pre-wrap text-[15px]">
            {AMBASSADOR_DESCRIPTION[locale]}
          </p>
        </article>
      </div>
      <AmbassadorVideo />
    </section>
  );
};
