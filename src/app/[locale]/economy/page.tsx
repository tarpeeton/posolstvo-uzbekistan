import { EconomyMain } from "@/_components/Economy/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экономика Республики Узбекистан — Актуальные данные и перспективы развития",
  description:
    "Узнайте последние новости и аналитические обзоры об экономическом развитии Республики Узбекистан, инвестиционных возможностях и государственной поддержке бизнеса.",
};

export default function EconomyPage() {
  return (
    <main>
      <EconomyMain />
    </main>
  );
}
