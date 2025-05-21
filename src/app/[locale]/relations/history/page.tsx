import { RelationsHistoryMain } from "@/_components/Relations/History/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "История отношений между Республикой Узбекистан и Пакистаном — Дипломатические связи",
  description:
    "Подробная история дипломатических и культурных отношений между Республикой Узбекистан и Исламской Республикой Пакистан.",
};

export default function Page() {
  return (
    <main>
      <RelationsHistoryMain />
    </main>
  );
}
