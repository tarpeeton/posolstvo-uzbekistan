type SlideItem = {
  id: number;
  title: {
    ru: string;
    uz: string;
    en: string;
    ur: string
  };
  description: {
    ru: string;
    uz: string;
    en: string;
    ur: string
  };
  date: string;
  imageUrl: string;
};

export const slidesData: SlideItem[] = [
  {
    id: 1,
    title: {
      ru: "Генеральная Ассамблея ЮНЕСКО 2025: Самарканд как культурный центр будущего",
      uz: "YuNESKO 2025 Bosh Assambleyasi: Kelajak madaniy markazi sifatida Samarqand",
      en: "UNESCO 2025 General Assembly: Samarkand as a Cultural Center of the Future",
      ur: "یونیسکو 2025 جنرل اسمبلی: مستقبل کے ثقافتی مرکز کے طور پر سمرقند"
    },
    description: {
      ru: "Впервые за более чем 40 лет ключевое событие организации ООН по культуре пройдет за пределами Парижа.",
      uz: "40 yildan ortiq vaqt ichida birinchi marta BMT madaniy tashkilotining asosiy tadbiri Parijdan tashqarida o'tkaziladi.",
      en: "For the first time in over 40 years, the key event of the UN cultural organization will be held outside of Paris.",
      ur: "40 سال سے زیادہ عرصے میں پہلی مرتبہ اقوام متحدہ کی ثقافتی تنظیم کا اہم ایونٹ پیرس سے باہر منعقد کیا جائے گا۔"
    },
    date: "2024.09.25",
    imageUrl:
      "https://ucarecdn.com/63ba2791-a19f-4139-8de9-0ac4a09f4acb/-/preview/1000x666/",
  },
  {
    id: 2,
    title: {
      ru: "Вторая новость: Ташкент, культурная столица Центральной Азии",
      uz: "Ikkinchi yangilik: Toshkent – Markaziy Osiyoning madaniy poytaxti",
      en: "Second News: Tashkent, the Cultural Capital of Central Asia",
      ur: "دوسری خبر: تاشقند، وسطی ایشیا کا ثقافتی دارالحکومت"
    },
    description: {
      ru: "Ташкент продолжает удивлять множеством фестивалей и культурных событий.",
      uz: "Toshkent ko'plab festival va madaniy tadbirlar bilan hayratda qoldirishda davom etmoqda.",
      en: "Tashkent continues to amaze with numerous festivals and cultural events.",
      ur: "تاشقند متعدد تہواروں اور ثقافتی تقریبات کے ساتھ حیران کر رہا ہے۔"
    },
    date: "2024.10.10",
    imageUrl:
      "https://ucarecdn.com/63ba2791-a19f-4139-8de9-0ac4a09f4acb/-/preview/1000x666/",
  },
  {
    id: 3,
    title: {
      ru: "Третья новость: Новые направления узбекского туризма",
      uz: "Uchinchi yangilik: O‘zbek turizmida yangi yo‘nalishlar",
      en: "Third News: New Directions of Uzbek Tourism",
      ur: "تیسری خبر: ازبک سیاحت کے نئے رخ"
    },
    description: {
      ru: "Узбекистан расширяет возможности для туристов: новые маршруты и сервиси.",
      uz: "O‘zbekiston sayyohlar uchun imkoniyatlarni kengaytirmoqda: yangi marshrutlar va xizmatlar.",
      en: "Uzbekistan expands opportunities for tourists with new routes and services.",
      ur: "ازبکستان سیاحوں کے لیے نئے راستوں اور سہولیات کے ساتھ مواقع کو وسعت دے رہا ہے۔"
    },
    date: "2024.11.05",
    imageUrl:
      "https://ucarecdn.com/63ba2791-a19f-4139-8de9-0ac4a09f4acb/-/preview/1000x666/",
  },
];
