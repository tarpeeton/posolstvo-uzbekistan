import { EMBASSY_ACTUAL_THEME } from "@/constants/embassy";
import { ThemeContentItem } from "@/ui/ThemeContent";
import { useTranslations } from "next-intl";

export const EmbassyActualTheme = () => {
  const t = useTranslations();

  return (
    <div className="px-[20px] lg:px-[120px] mt-[50px] lg:mt-[120px]">
      <p aria-label={t("topics")} className="title-text mb-[16px] md:pb-[24px]">
        {t("topics")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[20px] lg:gap-[40px]">
        {EMBASSY_ACTUAL_THEME.slice(0, 3).map((item, index) => (
          <ThemeContentItem
            key={item.image}
            name={item.name}
            href={item.href}
            image={item.image}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[20px] lg:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[40px]">
        {EMBASSY_ACTUAL_THEME.slice(3, 5).map((item, index) => (
          <div
            key={item.name.en + index + item.image}
            className={` ${index === 0 ? "col-start-2" : "grid"}  ${
              index === 1 ? "col-start-3" : "grid"
            }`}
          >
            <ThemeContentItem
              name={item.name}
              href={item.href}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
