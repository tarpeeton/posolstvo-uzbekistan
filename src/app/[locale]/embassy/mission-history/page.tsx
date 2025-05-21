import { MissionHistoryMain } from "@/_components/Embassy/MissionHistory/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "История миссии Посольства Республики Узбекистан в Пакистане",
  description:
    "Подробная история дипломатической миссии Посольства Республики Узбекистан в Исламской Республике Пакистан, ключевые этапы и достижения.",
};

export default function EmbassyMainPage() {
  return (
    <main>
      <MissionHistoryMain />
    </main>
  );
}
