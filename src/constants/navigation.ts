import { TMultiLang } from "@/types/multiLang";


type NavItemOption = {
  key: string,
  title: TMultiLang;
  href: string;
};

export type NavItem = {
    key: string;
    href: string;
    options?: NavItemOption[];
  };
  
  export  const NAV_ITEMS: NavItem[] = [
    { key: "home", href: "/" },
    { key: "news", href: "/news"  ,
      options: [
        {
          key: "news/off",
          title: { 
            ru: "Официальные заявления", 
            uz: "Rasmiy bayonotlar", 
            en: "Official statements" 
          },
          href: "/news/official-statements"
        },
        {
          key: "news/even",
          title: { 
            ru: "События и пресс-релизы", 
            uz: "Voqealar va press-relizlar", 
            en: "Events and press releases" 
          },
          href: "/news/events-press-releases"
        }
      ]
      },
    { key: "aboutUzbekistan", href: "/about-uzbekistan" },
    { key: "embassy", href: "/embassy" },
    { key: "diplomaticRelations", href: "/relations" },
    { key: "consularServices", href: "/consular" },
    { key: "economicDiplomacy", href: "/economy" },
    { key: "tourism", href: "/tourism" },
    { key: "contactsForm", href: "/contacts" },
  ];