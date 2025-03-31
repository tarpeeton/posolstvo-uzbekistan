import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { LANDMARK_DESCRIPTION, SLIDER_TOURISM } from "@/constants/tourism";

import Image from "next/image";

export const TouristItems = () => {
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
                href: "/tourism/tourist-routers",
              },
              {
                label: {
                  ru: "Сурхандарья – колыбель древних цивилизаций",
                  uz: "",
                  en: "",
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
              Сурхандарья – колыбель древних цивилизаций
            </h1>
            <p className=" text-[15px]">{LANDMARK_DESCRIPTION[locale]}</p>
          </div>

          <div className="h-[300px] mt-[40px] lg:mt-[80px] w-[300px] lg:w-[600px] lg:h-[700px]">
            <Image
              src="https://ucarecdn.com/eff1ca4d-78fd-4980-8cac-dfba42ae09b1/-/preview/600x684/"
              width={1000}
              height={1000}
              quality={100}
              alt="sdsf"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-[15px] mt-[20px] lg:mt-[30px]">
            Каньон расположен в Сурхандарьинской области вблизи села Байсун и
            переводится, как “красный каньон”. Длина составляет 30 километров, а
            самая высшая точка гора Буритахт высотой 1218 метров. Здесь природа
            создала захватывающие лабиринты, простирающиеся на несколько
            десятков километров, и каждый поворот рельефа раскрывает
            удивительные пейзажи. В весеннее время года облик каньона отличается
            от обычного, так как поверхность полностью покрывается разной
            растительностью, среди которых можно найти редкие целебные травы.
            Это место действительно восхитительно и заслуживает статуса одного
            из чудес Узбекистана.
          </p>
        </div>
      </section>
    </>
  );
};
