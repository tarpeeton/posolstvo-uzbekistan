import { VisasMain } from "@/_components/Consular/Visas/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оформление виз в Узбекистан — Быстро и Надёжно | Посольство Узбекистана в Пакистане",
  description:
    "Узнайте всё о процессе оформления виз в Узбекистан: необходимые документы, сроки, виды виз и советы от Посольства Республики Узбекистан в Исламской Республике Пакистан.",
};

export default function Page() {
  return (
    <main>
      <VisasMain />
    </main>
  );
}
