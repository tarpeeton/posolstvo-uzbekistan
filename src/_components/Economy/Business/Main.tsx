"use client"
import { useEffect , useState } from "react";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { CONTENT_BUSINESS_OB_ONE, VIDOV } from "@/constants/register-business";
import Faq from "@/ui/faq";
import { Axios } from "@/utils/api";
import { IFaqData } from "@/types/faq";



export const BusinessMain = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [AllFaqs , setAllFaqs] = useState<IFaqData[]>([])

  useEffect(() =>  {
    const FetchAllFaqs = async () => {
      const res = await Axios.get(`/faq?lang=${locale}`)
      setAllFaqs(res.data.data)
    }
    FetchAllFaqs()
  } , [])

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
                ur: "اقتصادی سفارت کاری",
              },
              href: "/economy",
            },
            {
              label: {
                ru: "Регистрация бизнеса",
                uz: "Biznesni roʻyxatdan oʻtkazish",
                en: "Business Registration",
                ur: "کاروبار کی رجسٹریشن",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("business_registration")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("business_registration")}
          </h1>
          <p className="text-[15px] mt-2 lg:w-[80%]">
            {CONTENT_BUSINESS_OB_ONE.title[locale]}
          </p>
        </div>

        <div className="mt-[20px] lg:mt-[30px] flex flex-col gap-[20px] lg:gap-[24px]">
          {CONTENT_BUSINESS_OB_ONE.content.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="font-medium text-[20px]">{item.title[locale]}</p>
              {item.descriptions.map((desc, index) => (
                <p key={index + desc.en + index} className=" text-[15px]">
                  {desc[locale]}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-[40px] lg:mt-[50px] ">
          <h2
            aria-label={t("business_registration")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("taxation_and_benefits")}
          </h2>

          <p
            className="lg:text-[15px] "
            dangerouslySetInnerHTML={{ __html: VIDOV[locale] }}
          />
        </div>

        <div className="w-full flex flex-col gap-4 mt-[50px] lg:mt-[100px]">
          <h1 aria-label="FAQ" className="text-[24px] lg:text-[32px]">
            FAQ
          </h1>
          <Faq data={AllFaqs} />
        </div>
      </section>
    </>
  );
};
