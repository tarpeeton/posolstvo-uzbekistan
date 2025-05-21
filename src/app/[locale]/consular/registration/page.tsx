import { RegistrationMain } from "@/_components/Consular/Registration/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация граждан Узбекистана — Быстро и Удобно | Посольство в Пакистане",
  description:
    "Оформление регистрации граждан Республики Узбекистан в Пакистане: необходимые документы, порядок и помощь от Посольства Республики Узбекистан в Исламской Республике Пакистан.",
};

export default function Page() {
  return (
    <main>
      <RegistrationMain />
    </main>
  );
}
