import { RelationsEconomic } from "@/_components/Relations/Economic/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экономические отношения между Узбекистаном и Пакистаном — Торговля и инвестиции",
  description:
    "Подробная информация об экономическом сотрудничестве, торговле и инвестициях между Республикой Узбекистан и Исламской Республикой Пакистан.",
};

export default function Page() {
  return (
    <main>
      <RelationsEconomic />
    </main>
  );
}
