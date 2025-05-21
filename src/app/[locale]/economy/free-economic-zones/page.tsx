import { FreeZonesMain } from "@/_components/Economy/FreeZones/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Свободные экономические зоны Узбекистана — Возможности для бизнеса и инвестиций",
  description:
    "Информация о свободных экономических зонах в Узбекистане, их преимуществах и условиях для развития бизнеса и привлечения инвестиций.",
};

export default function Page() {
  return (
    <main>
      <FreeZonesMain />
    </main>
  );
}
