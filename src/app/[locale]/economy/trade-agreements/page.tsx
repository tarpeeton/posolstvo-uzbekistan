import { TradeAgreementsMain } from "@/_components/Economy/TradeAgreements/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Торговые соглашения Республики Узбекистан — Взаимовыгодное сотрудничество",
  description:
    "Подробная информация о торговых соглашениях Республики Узбекистан с другими странами, их преимуществах и возможностях для развития международной торговли.",
};

export default function Page() {
  return (
    <main>
      <TradeAgreementsMain />
    </main>
  );
}
