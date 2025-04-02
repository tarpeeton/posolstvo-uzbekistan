import { TMultiLang } from "@/types/multiLang"

  export type CardItem = {
    title: TMultiLang
    href: string
    imageUrl?: string
  }



  export const TOPICS_DATA: CardItem[] = [
    {
      title: {
        ru: "Визы",
        uz: "Vizalar",
        en: "Visas",
        ur: "ویزے"
      },
      href: "/visas",
      imageUrl: "https://ucarecdn.com/6533c890-22ef-4fb6-acad-ce04064d64a1/-/preview/512x512/"
    },
    {
      title: {
        ru: "Инвестируйте в Узбекистан",
        uz: "O‘zbekistonga investitsiya qiling",
        en: "Invest in Uzbekistan",
        ur: "ازبکستان میں سرمایہ کاری کریں"
      },
      href: "/invest",
      imageUrl: "https://ucarecdn.com/6533c890-22ef-4fb6-acad-ce04064d64a1/-/preview/512x512/"
    },
    {
      title: {
        ru: "Консульские услуги",
        uz: "Konsullik xizmatlari",
        en: "Consular Services",
        ur: "قونصلر خدمات"
      },
      href: "/consular-services",
      imageUrl: "https://ucarecdn.com/6533c890-22ef-4fb6-acad-ce04064d64a1/-/preview/512x512/"
    }
  ];
  