import { UzbekistanHistoryMain } from "@/_components/AboutUzbekistan/History/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "История Узбекистана – Посольство Республики Узбекистан в Исламской Республике Пакистан",
  description:
    "Познакомьтесь с богатой и многовековой историей Узбекистана: от древних цивилизаций до современного независимого государства.",
};

export default function UzbekistanHistory() {
  return (
    <div>
      <UzbekistanHistoryMain />
    </div>
  );
}
