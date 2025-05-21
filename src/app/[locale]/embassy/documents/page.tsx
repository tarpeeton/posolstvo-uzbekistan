import { DocumentMain } from "@/_components/Embassy/Documents/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Документы Посольства Республики Узбекистан в Пакистане — Официальная информация",
  description:
    "Официальные документы Посольства Республики Узбекистан в Исламской Республике Пакистан, инструкции и требования для граждан и посетителей.",
};

export default function EmbassyMainPage() {
  return (
    <main>
      <DocumentMain />
    </main>
  );
}
