"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "next/navigation";
import { BLOG_DATA } from "@/constants/blog";
import { TBlog } from "@/types/blog";
import { useLocale } from "next-intl";
import { Breadcrumb } from "@/ui/breadcrumb";


export const Blog = () => {
  const { slug } = useParams();
  const [filteredBlog, setFilteredBlog] = useState<TBlog | null>(null);
  const locale = useLocale();

  useEffect(() => {
    const blogItem = BLOG_DATA.find((item) => item.slug === slug);
    setFilteredBlog(blogItem ?? null);
  }, [slug]);

  return (
    <section>
      <div className="mt-6">
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
                ru: "Новости",
                uz: "Yangiliklar",
                en: "News",
              },
              href: "/news",
            },
            {
              label: filteredBlog
                ? {
                    ru: filteredBlog.title.ru,
                    uz: filteredBlog.title.uz,
                    en: filteredBlog.title.en,
                  }
                : {
                    ru: "Загрузка...",
                    uz: "Yuklanmoqda...",
                    en: "Loading...",
                  },
              isCurrent: true,
            },
          ]}
        />

      </div>


      <div className="pt-[60px] pb-[100px] flex flex-col gap-[20px]">
        <div className="flex flex-col gap-4 lg:w-[60%] ">
          <p className="title-text text-[#0E0F18]">
            {filteredBlog?.title?.[locale] || ""}
          </p>
          <p className="text-[16px] text-[#0E0F18]">
            {filteredBlog?.description?.[locale] || ""}
          </p>
          <div className="flex text-[#3F425F] flex-row items-center gap-2">
            <FaRegCalendarAlt />
            <p>{filteredBlog?.date || ""}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          {filteredBlog?.imageUrl && (
            <Image
              width={1000}
              height={1000}
              quality={100}
              src={filteredBlog?.imageUrl}
              alt={filteredBlog.title[locale]}
              className="w-full h-[300px] lg:h-[600px] object-cover"
            />
          )}

          <p className="text-[14px] text-[#0E0F18]">Подпись под изображением</p>
        </div>
        <div>
          <p className="text-[16px] text-[#0E0F18] whitespace-pre-wrap">
            Президент Республики Узбекистан Шавкат Мирзиёев 5 марта принял
            генерального секретаря Шанхайской организации сотрудничества Нурлана
            Ермекбаева, пребывающего в нашей стране с визитом. Были обсуждены
            актуальные вопросы расширения многостороннего партнерства в рамках
            данной авторитетной организации. Подчеркнута важность наращивания
            практического взаимодействия в борьбе с общими вызовами и угрозами
            стабильности и безопасности, а также дальнейшего углубления
            сотрудничества на основе принципов добрососедства, доверия и
            партнерства. Особое внимание уделено продолжению запущенного на
            Самаркандском саммите процесса модернизации деятельности ШОС, в том
            числе повышения эффективности работы всех структур Объединения.
            Отмечена необходимость реализации Концепции развития «Нового
            экономического диалога» и целого ряда других инициатив нашей страны.
            Речь идет о принятии соглашения по упрощению торговли, программы
            электронной коммерции, комплекса мер по стимулированию инвестиций,
            плана цифровизации в логистике, программы «Технологии будущего ШОС»,
            Атласа продовольственной безопасности и других. Были также обсуждены
            вопросы подготовки к предстоящему саммиту ШОС в КНР.
          </p>
        </div>
      </div>
    </section>
  );
};
