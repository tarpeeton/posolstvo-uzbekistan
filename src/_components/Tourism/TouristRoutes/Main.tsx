

import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import {
    LANDMARK_DESCRIPTION,
    SLIDER_TOURISM
} from '@/constants/tourism'

import Image from "next/image";

export const TouristRoutesMain = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <section className=" mt-[24px] pb-[80px] lg:pb-[120px]">
        <div className="px-[20px] lg:px-[120px]">
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
                ru: "Туризм",
                uz: "Turizm",
                en: "Tourism",
              },
              href: "/tourism",
            },
            {
              label: {
                ru: "Туристические маршруты",
                uz: "",
                en: "",
              },
              isCurrent: true,
            },
          ]}
        />

        <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
          <h1
            aria-label={t("tourist_routes")}
            className="text-[24px] lg:text-[32px]"
          >
            {t("tourist_routes")}
          </h1>
          <p className=" text-[15px]">
          {LANDMARK_DESCRIPTION[locale]}
          </p>
        </div>


        <div className="grid grid-cols-1 mt-[30px] lg:mt-[80px] md:grid-cols-2 lg:gap-[40px] gap-[20px]">
            {SLIDER_TOURISM.map((item  , index) => (
                <div key={index + item.url} className="h-[250px] lg:h-[300px] group overflow-hidden rounded-[5px] relative">
                    <Image quality={100} src={item.url} alt={item.text[locale] + "image"} width={1000} height={600}
                    className="w-full h-full group-hover:scale-110 transition-transform object-cover rounded-[5px]"
                    />
                    <div className="absolute w-full h-full bg-black/30"  />
                    <p className="absolute text-white text-[18px] lg:text-[20px] z-50 bottom-[20px] lg:bottom-6 left-4">
                        {item.text[locale]}
                    </p>
                </div>
            ))}
        </div>
        </div>
        
      
        
      </section>
    </>
  );
};
