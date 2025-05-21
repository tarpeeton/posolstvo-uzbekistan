import { InvestmentsMain } from "@/_components/Economy/Investments/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Инвестиции в Республику Узбекистан — Перспективы и возможности",
  description:
    "Узнайте о возможностях инвестирования в экономику Узбекистана, государственных программах поддержки и выгодах для иностранных инвесторов.",
};

export default function Page() {
  return (
    <main>
      <InvestmentsMain />
    </main>
  );
}
