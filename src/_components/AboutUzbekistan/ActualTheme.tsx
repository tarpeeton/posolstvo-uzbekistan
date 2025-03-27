import { TOPICS_DATA } from "@/constants/topics"
import { ThemeContentItem } from "@/ui/ThemeContent"
import { useTranslations } from "next-intl"





export const ActualTheme = () => {
    const t = useTranslations()

    return (
        <div className="px-[20px] lg:px-[120px] mt-[50px] lg:mt-[120px]">
            <p aria-label={t("topics")} className="title-text mb-[16px] md:pb-[24px]"> 
                {t('topics')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[40px]">
               {TOPICS_DATA.map((item , index) => (
                <ThemeContentItem key={index} name={item.title} href={item.href} image={item.imageUrl} />
               ))}
            </div>
        </div>
    )
}