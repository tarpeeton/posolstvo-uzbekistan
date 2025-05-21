import { RelationsPolitical } from "@/_components/Relations/Political/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политические отношения Республики Узбекистан с Пакистаном — Дипломатия и сотрудничество",
  description:
    "Актуальная информация о политических отношениях между Республикой Узбекистан и Исламской Республикой Пакистан, ключевые направления сотрудничества.",
};

export default function Page() {
  return (
    <main>
      <RelationsPolitical />
    </main>
  );
}
