"use client";
import { useState, useEffect } from "react";

import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { Axios } from "@/utils/api";

import { LANDMARK_DESCRIPTION } from "@/constants/tourism";

import Image from "next/image";
import { ITourismMixs } from "@/types/tourism";
import { Link } from "@/i18n/routing";

export const LandMarkMain = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [LandMark, setLandMarks] = useState<ITourismMixs[]>([]);

  useEffect(() => {
    const FetchAllTypeOne = async () => {
      const res = await Axios.get(`place?type=1&lang=${locale}`);
      setLandMarks(res.data.data);
    };
    FetchAllTypeOne();
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
                href: "/tourism",
              },
              {
                label: {
                  ru: "Достопримечательности",
                  uz: "Diqqatga sazovor joylar",
                  en: "Landmarks",
                  ur: "سیاحتی مقامات",
                },
                isCurrent: true,
              },
            ]}
          />

          <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
            <h1
              aria-label={t("landmarks")}
              className="text-[24px] lg:text-[32px]"
            >
              {t("landmarks")}
            </h1>
            <p className=" text-[15px]">{LANDMARK_DESCRIPTION[locale]}</p>
          </div>

          <div className="grid grid-cols-1 mt-[30px] lg:mt-[80px] md:grid-cols-2 lg:gap-[40px] gap-[20px]">
            {LandMark.map((item, index) => (
              <Link
                href={`landmarks/${item.slug}`}
                key={index + item.image}
                className="h-[250px] lg:h-[300px] group overflow-hidden rounded-[5px] relative"
              >
                <Image
                  quality={100}
                  src={item.image}
                  alt={item.title + "image"}
                  width={1000}
                  height={600}
                  className="w-full h-full group-hover:scale-110 transition-transform object-cover rounded-[5px]"
                />
                <div className="absolute w-full h-full bg-black/30" />
                <p className="absolute text-white text-[18px] lg:text-[20px] z-50 bottom-[20px] lg:bottom-6 left-4">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
