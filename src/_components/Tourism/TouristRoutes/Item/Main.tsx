"use client";
import { useState, useEffect } from "react";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { Axios } from "@/utils/api";

import { useParams } from "next/navigation";

interface IRoutersData {
  title: string;
  content: string;
}

export const TouristItems = () => {
  const t = useTranslations();
  const locale = useLocale();
  const { slug } = useParams();
  const [routers, setRouters] = useState<IRoutersData | null>(null);

  useEffect(() => {
    const fetchLandMarks = async () => {
      const res = await Axios.get(`/place/${slug}?lang=${locale}`);
      setRouters(res.data.data);
    };
    fetchLandMarks();
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
                  ru: "Туристические маршруты",
                  uz: "Turistik marshrutlar",
                  en: "Tourist Routes",
                  ur: "سیاحتی راستے",
                },
                href: "/tourism/tourist-routers",
              },
              {
                label: {
                  ru: routers?.title,
                  uz: routers?.title,
                  en: routers?.title,
                  ur: routers?.title,
                },
                isCurrent: true,
              },
            ]}
          />

          <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
            <h1
              aria-label={"Сурхандарья – колыбель древних цивилизаций"}
              className="text-[24px] lg:text-[32px]"
            >
              {routers?.title}
            </h1>
            <div className=" text-[15px]">
              <div dangerouslySetInnerHTML={{ __html: routers?.content }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
