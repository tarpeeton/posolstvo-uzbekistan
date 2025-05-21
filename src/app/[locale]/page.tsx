import { MainPage } from "@/_components/Main/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Посольство Республики Узбекистан в Исламской Республике Пакистан",
  description: "Официальный сайт Посольства Республики Узбекистан в Исламской Республике Пакистан. Новости, консульская информация, сотрудничество и другое.",
  alternates: {
    canonical: "https://ucarecdn.com/28342f11-67d7-4679-9acc-ed57c118d796/-/preview/191x180/",
  },
  openGraph: {
    title: "Посольство Узбекистана в Пакистане",
    description: "Добро пожаловать на официальный сайт Посольства Узбекистана в Исламской Республике Пакистан.",
    url: "https://example.com", 
    siteName: "Посольство Узбекистана в Пакистане",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://example.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Посольство Узбекистана в Пакистане",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <MainPage />
    </div>
  );
}
