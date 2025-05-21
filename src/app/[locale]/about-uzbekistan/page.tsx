import { AboutUzbekistanMain } from "@/_components/AboutUzbekistan/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О Узбекистане – Посольство Республики Узбекистан в Исламской Республике Пакистан",
  description:
    "Узнайте больше об Узбекистане: история, культура, география, экономика и туристические достопримечательности. Официальная информация от Посольства Узбекистана в Пакистане.",
};

export default function AboutUzb() {
  return (
    <main>
      <AboutUzbekistanMain />
    </main>
  );
}
