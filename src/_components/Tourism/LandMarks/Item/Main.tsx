"use client";
import { useEffect, useState } from "react";
import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale } from "next-intl";
import { Axios } from "@/utils/api";
import { useParams } from "next/navigation";
import { splitHtmlContent } from "@/utils/htmlContent";
import { ITourismMixs } from "@/types/tourism";
import { TourismSlider } from "../../SliderForImage";


interface ILandMarkData {
  title: string;
  content: string;
}

export const SlugMain = () => {
  const locale = useLocale();
  const { slug } = useParams();
  const [landMark, setLandMarks] = useState<ILandMarkData | null>(null);

const [AllTypeOne, setAllTypeOne] = useState<ITourismMixs[]>([]);

  useEffect(() => {
    const FetchAllTypeOne = async () => {
      const res = await Axios.get(`place?type=1&lang=${locale}`);
      setAllTypeOne(res.data.data);
    };
    FetchAllTypeOne();
  }, [locale]);



  const [htmlParts, setHtmlParts] = useState<{
    firstHalf: string;
    secondHalf: string;
  } | null>(null);

  useEffect(() => {
    if (landMark?.content) {
      const result = splitHtmlContent(landMark.content, 5);
      setHtmlParts(result);
    }
  }, [landMark]);



  useEffect(() => {
    const fetchLandMarks = async () => {
      const res = await Axios.get(`/place/${slug}?lang=${locale}`);
      setLandMarks(res.data.data);
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
                  ru: "Достопримечательности",
                  uz: "Diqqatga sazovor joylar",
                  en: "Landmarks",
                  ur: "سیاحتی مقامات",
                },
                href: "/tourism/landmarks",
              },
              {
                label: {
                  ru: landMark?.title,
                  uz: landMark?.title,
                  en: landMark?.title,
                  ur: landMark?.title,
                },
                isCurrent: true,
              },
            ]}
          />

          <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
            <h1 className="text-[24px] lg:text-[32px]">{landMark?.title}</h1>
            <div className=" text-[15px]">
               <div dangerouslySetInnerHTML={{ __html: htmlParts?.firstHalf }} />
            </div>
          </div>
        </div>

        <div className="mt-[60px] lg:mt-[120px]">
          <TourismSlider slides={AllTypeOne}  typeROUTER={1} />
        </div>
        <div className="text-[15px] mx-[20px] lg:mx-[120px] lg:mt-[-95px]">
         <div dangerouslySetInnerHTML={{ __html: htmlParts?.secondHalf }} />
        </div>
      </section>
    </>
  );
};
