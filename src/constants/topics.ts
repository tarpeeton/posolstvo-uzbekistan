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
      href: "/consular/visas",
      imageUrl: "https://ucarecdn.com/6533c890-22ef-4fb6-acad-ce04064d64a1/-/preview/512x512/"
    },
    {
      title: {
        ru: "Инвестируйте в Узбекистан",
        uz: "O‘zbekistonga investitsiya qiling",
        en: "Invest in Uzbekistan",
        ur: "ازبکستان میں سرمایہ کاری کریں"
      },
      href: "/economy/investments",
      imageUrl: "https://ucarecdn.com/3476e2a0-27d5-4d1b-86e4-325ca3f4f149/-/preview/24x24/"
    },
    {
      title: {
        ru: "Консульские услуги",
        uz: "Konsullik xizmatlari",
        en: "Consular Services",
        ur: "قونصلر خدمات"
      },
      href: "/consular",
      imageUrl: "https://ucarecdn.com/201c3ec3-c053-4205-8d78-6d2ff2ced5aa/-/preview/24x24/"
    }
  ];
  