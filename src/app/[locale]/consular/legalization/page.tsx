import { LegalizationMain } from "@/_components/Consular/Legalization/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Легализация документов — Быстро и Надежно | Посольство Узбекистана в Пакистане",
  description:
    "Узнайте всё о легализации документов для использования в Республике Узбекистан: процесс, требования и помощь от Посольства Республики Узбекистан в Исламской Республике Пакистан.",
};

export default function Page() {
  return (
    <main>
      <LegalizationMain />
    </main>
  );
}
