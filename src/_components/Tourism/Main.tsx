"use client";
import { useState, useEffect } from "react";

import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import {
  TOURISM_DESCRIPTION,
  HERITAGE,
} from "@/constants/tourism";
import { TourismSlider } from "./SliderForImage";
import { ITourismMixs } from "@/types/tourism";
import { Axios } from "@/utils/api";
import { Link } from "@/i18n/routing";

export const TourismMain = () => {
  const t = useTranslations();
  const locale = useLocale();

  const [AllTypeOne, setAllTypeOne] = useState<ITourismMixs[]>([]);
  const [AllRoutes, setAllRoutes] = useState<ITourismMixs[]>([]);

  useEffect(() => {
    const FetchAllTypeOne = async () => {
      const res = await Axios.get(`place?type=1&lang=${locale}`);
      setAllTypeOne(res.data.data);
    };
    FetchAllTypeOne();

    const FetchAllTypeTwo = async () => {
      const res = await Axios.get(`place?type=2&lang=${locale}`);
      setAllRoutes(res.data.data);
    };
    FetchAllTypeTwo();
  }, [locale]);

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
                  ur: "ہوم",
                },
                href: "/",
              },
              {
                label: {
                  ru: "Туризм",
                  uz: "Turizm",
                  en: "Tourism",
                  ur: "سیاحت",
                },
                isCurrent: true,
              },
            ]}
          />

          <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
            <h1
              aria-label={t("tourism")}
              className="text-[24px] lg:text-[32px]"
            >
              {t("tourism")}
            </h1>
            <p className=" text-[15px]">{TOURISM_DESCRIPTION[locale]}</p>
          </div>
          <div className="mt-[16px] lg:mt-[45px] flex flex-col gap-2">
            <h2 className="font-medium text-[20px]">{t("heritage")}</h2>
            <p className="text-[15px]">{HERITAGE[locale]}</p>
          </div>
        </div>

        {/* type 1  */}
        <div className="flex flex-col lg:gap-8 gap-5 mt-[60px] lg:mt-[90px]">
          <Link href={'tourism/landmarks'} className="ml-[20px] lg:ml-[120px] text-[24px] lg:text-[32px]">
            {t("landmarks")}
          </Link>
          <TourismSlider slides={AllTypeOne} typeROUTER={1} />
        </div>

        {/* type 2 */}
        <div className="flex flex-col lg:gap-8 gap-5">
          <Link  href={'tourism/tourist-routers'} className="ml-[20px] lg:ml-[120px] text-[24px] lg:text-[32px]">
            {t("tourist_routes")}
          </Link>
          <TourismSlider slides={AllRoutes} typeROUTER={2} />
        </div>
      </section>
    </>
  );
};
