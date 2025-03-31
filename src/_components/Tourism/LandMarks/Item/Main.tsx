import { Breadcrumb } from "@/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { LANDMARK_DESCRIPTION, SLIDER_TOURISM } from "@/constants/tourism";
import { TourismSlider } from "../../SliderForImage";

export const SlugMain = () => {
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
                  ru: "Достопримечательности",
                  uz: "Diqqatga sazovor joylar",
                  en: "Landmarks",
                },
                href: "/tourism/landmarks",
              },
              {
                label: {
                  ru: "Виртуальные галереи",
                  uz: "",
                  en: "",
                },
                isCurrent: true,
              },
            ]}
          />

          <div className="mt-[24px] lg:mt-[45px] flex flex-col gap-[16px]">
            <h1 className="text-[24px] lg:text-[32px]">Виртуальные галереи</h1>
            <p className=" text-[15px]">{LANDMARK_DESCRIPTION[locale]}</p>
          </div>
        </div>

        <div className="mt-[60px] lg:mt-[120px]">
          <TourismSlider slides={SLIDER_TOURISM} />
        </div>
        <p className="text-[15px] mx-[20px] lg:mx-[120px] lg:mt-[-95px]">
        Еще никогда ранее искусство и современные технологии так гармонично не дополняли друг друга - изображения в формате 3D позволяют удалено изучать уникальные стенды и экспонаты музеев и галерей. Благодаря технологиям можно даже не выходя из дома увидеть все оцифрованные произведения искусства, как признанные мировые шедевры, так и работы еще малоизвестных талантов.
        Онлайн или виртуальные галереи искусств можно назвать одним из самых эффективных методов для популяризации искусства, продвижения художественного и культурного потенциала страны во всем мире. В Узбекистане в последние годы активно развиваются в публичном доступе онлайн ресурсы музеев и галерей искусств по разным видам и жанрам искусства, создаются 3D-туры, цифровые панорамы и стенды, мультимедийные и анимационные средства. 3D-экскурсии по художественным музеям, интернет-трансляции с международных выставок, индивидуальные сайты современных художников, онлайн-галереи живописи, виртуальные картинные и художественные галереи, цифровые арт-коллекции – сегодня доступны каждому.
        </p>
      </section>
    </>
  );
};
