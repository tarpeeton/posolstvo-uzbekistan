export type multiLang = {
    ru: string
    uz: string
    en: string
  }
  
  export type CardItem = {
    title: multiLang
    href: string
    imageUrl?: string
  }



  export const TOPICS_DATA: CardItem[] = [
    {
      title: {
        ru: "Визы",
        uz: "Vizalar",
        en: "Visas",
      },
      href: "/visas",
      imageUrl: "https://ucarecdn.com/6533c890-22ef-4fb6-acad-ce04064d64a1/-/preview/512x512/"
    },
    {
      title: {
        ru: "Инвестируйте в Узбекистан",
        uz: "O‘zbekistonga investitsiya qiling",
        en: "Invest in Uzbekistan",
      },
      href: "/invest",
      imageUrl: "https://ucarecdn.com/6533c890-22ef-4fb6-acad-ce04064d64a1/-/preview/512x512/"

    },
    {
      title: {
        ru: "Консульские услуги",
        uz: "Konsullik xizmatlari",
        en: "Consular Services",
      },
      href: "/consular-services",
      imageUrl: "https://ucarecdn.com/6533c890-22ef-4fb6-acad-ce04064d64a1/-/preview/512x512/"

    },
  ]  