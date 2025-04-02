import { TMultiLang } from "@/types/multiLang";

type NavItemOption = {
  id: string;
  key: string;
  title: TMultiLang;
  href: string;
};

export type NavItem = {
  key: string;
  href: string;
  options?: NavItemOption[];
};

export const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/" },
  {
    key: "news",
    href: "/news",
    options: [
      {
        id: "1",
        key: "news/off",
        title: {
          ru: "Официальные заявления",
          uz: "Rasmiy bayonotlar",
          en: "Official statements",
          ur: "سرکاری بیانات",
        },
        href: "/news/official-statements",
      },
      {
        id: "2",
        key: "news/even",
        title: {
          ru: "События и пресс-релизы",
          uz: "Voqealar va press-relizlar",
          en: "Events and press releases",
          ur: "واقعات اور پریس ریلیز",
        },
        href: "/news/events-press-releases",
      },
    ],
  },
  { key: "aboutUzbekistan", href: "/about-uzbekistan" },
  { key: "embassy", href: "/embassy" },
  { key: "diplomaticRelations", href: "/relations" },
  { key: "consularServices", href: "/consular" },
  { key: "economicDiplomacy", href: "/economy" },
  { key: "tourism", href: "/tourism" },
  { key: "contactsForm", href: "/contacts" },
];
