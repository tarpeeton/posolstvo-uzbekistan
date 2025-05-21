import { PrezidentMain } from "@/_components/AboutUzbekistan/Prezident/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Президент Узбекистана – Посольство Республики Узбекистан в Исламской Республике Пакистан",
  description:
    "Официальная информация о Президенте Республики Узбекистан: биография, полномочия и ключевые инициативы главы государства.",
};

export default function PrezidentUzbekistan() {
  return (
    <div>
      <PrezidentMain />
    </div>
  );
}
