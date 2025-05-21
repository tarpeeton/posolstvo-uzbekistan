import { PassportMain } from "@/_components/Consular/Passport/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Паспортные услуги в Узбекистане — Быстро и Надежно | Посольство в Пакистане",
  description:
    "Получите полную информацию о паспортных услугах Республики Узбекистан: оформление, замена и восстановление паспорта с поддержкой Посольства Узбекистана в Пакистане.",
};

export default function Page() {
  return (
    <main>
      <PassportMain />
    </main>
  );
}
