"use client"
import { useState , useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { Axios } from "@/utils/api";


interface IPrezidentInfo {
  title: string,
  content: string,
  button: string,
  url: string
}

export const PrezidentInfo = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [prezident , setPrezident] = useState<IPrezidentInfo | null>(null)

  useEffect(() => {
    const fetchPrezidentInfo =  async () => {
      const res = await Axios.get(`/page/1?lang=${locale}`)
      setPrezident(res.data.data)
    }
    fetchPrezidentInfo()
  } , [])

  return (
    <section className="px-[20px] lg:px-[120px] mt-6 lg:mt-7 pb-[80px] lg:pb-[150px]">
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
              ru: "О Узбекистане",
              uz: "O‘zbekiston haqida",
              en: "About Uzbekistan",
              ur: "ازبکستان کے بارے میں",
            },
            href: "/about-uzbekistan",
          },
          {
            label: {
              ru: "Президент и правительство",
              uz: "Prezident va hukumat",
              en: "President and Government",
              ur: "صدر اور حکومت",
            },
            isCurrent: true,
          },
        ]}
      />

      <h1 className="text-[23px] lg:text-[32px] mt-9 lg:mt-[50px]">
        {t("president_and_government")}
      </h1>
      <div className="flex flex-col gap-[14px] lg:gap-[16px] mt-[24px] lg:mt-[40px]">
        <div>
          <div  dangerouslySetInnerHTML={{ __html: prezident?.content}}/>
        </div>
       
        
        <Link
          className="bg-[#427EFF] h-[45px] w-full flex items-center justify-center text-center rounded-[4px] text-white lg:min-w-[220px] lg:max-w-[300px] lg:h-[45px]"
          href={`${prezident?.url}`}
          target="_blank"
          aria-label={t("go_to_president_website")}
        >
         {prezident?.button}
        </Link>
      </div>
    </section>
  );
};
