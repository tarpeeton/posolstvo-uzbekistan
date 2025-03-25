import { TOPICS_DATA } from "@/constants/topics"
import { Link } from "@/i18n/routing"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"





export const ThemeContent = () => {
    const t = useTranslations()
    const locale = useLocale()

    return (
        <div className="px-[20px] lg:px-[120px] mt-[50px]">
            <p aria-label={t("topics")} className="title-text mb-[16px] md:pb-[24px]"> 
                {t('topics')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[20px] lg:gap-[40px]">
               {TOPICS_DATA.map((item , index) => (
                <Link  href={`${item.href}`}  aria-label={item.title[locale]} key={index + item.imageUrl} className="bg-[#0051FF1F] h-[100px] bg-opacity-[12%] py-6 px-5">
                    <div className="flex flex-row items-center gap-2">
                        {item.imageUrl && (
                            <Image src={item.imageUrl} alt={item.title[locale]} width={80} height={80} quality={100} className=" md:w-[25px] md:h-[25px] object-cover w-[20px] h-[20px] 
                            [filter:brightness(0)_saturate(100%)_invert(29%)_sepia(92%)_saturate(6186%)_hue-rotate(192deg)_brightness(97%)_contrast(105%)]"/>
                        )}
                        <p className="text-[18px] text-[#0E0F18] md:text-[20px]">{item.title[locale]}</p>
                    </div>
                </Link>
               ))}
            </div>
        </div>
    )
}