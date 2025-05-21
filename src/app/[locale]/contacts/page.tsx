import { ContactsMain } from "@/_components/Contacts/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты Посольства Республики Узбекистан в Пакистане — Свяжитесь с нами",
  description:
    "Официальные контакты Посольства Республики Узбекистан в Исламской Республике Пакистан: адрес, телефон, электронная почта и режим работы.",
};

export default function Page() {
  return (
    <main>
      <ContactsMain />
    </main>
  );
}
