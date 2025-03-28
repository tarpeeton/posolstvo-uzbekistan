import { Link } from "@/i18n/routing"
import { Breadcrumb } from "@/ui/breadcrumb"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { PREZIDENT_INFO } from "@/constants/prezident"


export const PrezidentInfo = () => {
    const t = useTranslations()
    const locale = useLocale()


    return (
        <section className="px-[20px] lg:px-[120px] mt-6 lg:mt-7 pb-[80px] lg:pb-[150px]">
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
                ru: "О Узбекистане",
                uz: "O‘zbekiston haqida",
                en: "About Uzbekistan",
              },
              href: "/about-uzbekistan",
            },
            {
              label: {
                ru: "Президент и правительство",
                uz: "Prezident va hukumat",
                en: "President and Government",
              },
              isCurrent: true,
            },
          ]}
        />


        <h1 className="text-[23px] lg:text-[32px] mt-9 lg:mt-[50px]">
            {t("president_and_government")}
        </h1>
        <div className="flex flex-col gap-[14px] lg:gap-[16px] mt-[24px] lg:mt-[40px]">
            <h2 className="title-text" aria-label={t("president_of_uzbekistan")}>
                {t("president_of_uzbekistan")}
            </h2>
            <Image className="w-[300px] lg:h-[400px]" width={1000} quality={100} height={600} alt={t("president_of_uzbekistan")} src='https://ucarecdn.com/1ad38338-be91-4c0e-b883-f52b3907b0ed/-/preview/426x640/' />
            <p className="whitespace-pre-wrap lg:text-[15px]">
              {PREZIDENT_INFO[locale]}
            </p>
            <Link className="bg-[#427EFF] h-[45px] w-full flex items-center justify-center text-center rounded-[4px] text-white lg:min-w-[220px] lg:max-w-[300px] lg:h-[45px]" href='' target="_blank"  aria-label={t("go_to_president_website")}>
            {t("go_to_president_website")}

            </Link>
        </div>
        </section>
    )
}