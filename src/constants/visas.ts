export const VISAS_DESCRIPTION = [
  {
    id: "visa-tourist",
    name: {
      ru: "Туристическая виза – оформление виз для краткосрочных поездок в Узбекистан.",
      uz: "Turistik viza – O‘zbekistonga qisqa muddatli sayohatlar uchun vizani rasmiylashtirish.",
      en: "Tourist visa – issuance of visas for short-term trips to Uzbekistan.",
      ur: "سیاحتی ویزہ – ازبکستان کے مختصر مدتی سفر کے لیے ویزے کا اجرا۔",
    },
  },
  {
    id: "visa-business",
    name: {
      ru: "Бизнес-виза – выдача виз для предпринимателей и деловых поездок.",
      uz: "Biznes viza – tadbirkorlar va ishbilarmonlik safarlari uchun vizalarni berish.",
      en: "Business visa – issuance of visas for entrepreneurs and business trips.",
      ur: "بزنس ویزہ – تاجروں اور کاروباری دوروں کے لیے ویزوں کا اجرا۔",
    },
  },
  {
    id: "visa-student",
    name: {
      ru: "Учебная виза – для студентов, поступивших в учебные заведения Узбекистана.",
      uz: "O‘quv vizasi – O‘zbekiston OTMlariga qabul qilingan talabalar uchun.",
      en: "Student visa – for students admitted to educational institutions in Uzbekistan.",
      ur: "تعلیمی ویزہ – ازبکستان کے تعلیمی اداروں میں داخلہ لینے والے طلباء کے لیے۔",
    },
  },
  {
    id: "visa-work",
    name: {
      ru: "Рабочая виза – для иностранцев, заключивших трудовые контракты с узбекскими компаниями.",
      uz: "Mehnat vizasi – O‘zbekiston kompaniyalari bilan mehnat shartnomasi tuzgan xorijliklar uchun.",
      en: "Work visa – for foreigners who have signed employment contracts with Uzbek companies.",
      ur: "ورک ویزہ – ان غیر ملکیوں کے لیے جو ازبک کمپنیوں کے ساتھ ملازمت کے معاہدے کر چکے ہیں۔",
    },
  },
];

export const VISAS_CONTENT_HTML = {
  ru: `
<h2 style="font-size: 20px; font-weight: 600;">Заполнение визовой анкеты:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
<li>Необходимо заполнить и подписать визовую анкету в двух экземплярах. Анкета заполняется онлайн на сайте: </li> <a href="https://eviza.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">eviza.mfa.uz</a>, 
<a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>, 
  <a href="https://gk-usbekistan.de" target="_blank" style="text-decoration: underline; color: black;">gk-usbekistan.de</a>.
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px">Подготовка необходимых документов:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>Две цветные фотографии размером 3,5 х 4,5 см, приклеенные к бланкам анкеты. 
    <a href="https://gk-usbekistan.de" target="_blank" style="text-decoration: underline; color: black;">gk-usbekistan.de</a>
  </li>
  <li>Действующий загранпаспорт со сроком действия не менее трёх месяцев с момента предполагаемого въезда. 
    <a href="https://pac.ru" target="_blank" style="text-decoration: underline; color: black;">pac.ru</a>
  </li>
  <li>Дополнительные документы, подтверждающие цель поездки (например, приглашение от работодателя для рабочей визы).</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600;  margin-top: 25px;">Подача документов:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>Предоставить заполненные анкеты и необходимые документы в Посольство Республики Узбекистан в Пакистане: 
    <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>
  </li>
  <li>Адрес посольства: Дом №40, улица Хаябан-и-Икбал, сектор F-8/3, Исламабад. 
    <a href="https://skyway.uz" target="_blank" style="text-decoration: underline; color: black;">SKYWAY</a> | 
    <a href="#" style="text-decoration: underline; color: black;">Турагентство</a>
  </li>
  <li>Контактный телефон: +92-51-226-47-46.</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Оплата консульского сбора:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
 <li> Размер консульского сбора зависит от категории и срока действия визы. Подробная информация о сборах доступна на сайте посольства:</li> 
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>, 
  <a href="https://gov.uz" target="_blank" style="text-decoration: underline; color: black;">O‘zbekiston Respublikasi Hukumat portali</a>
</p>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Ожидание обработки заявления:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
<li>Сроки рассмотрения визового заявления могут варьироваться. Рекомендуется подавать документы заранее, учитывая возможные задержки.</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Формы заявлений:</h2>
<p style="font-size: 15px;">
  Визовая анкета заполняется онлайн на сайте 
  <a href="https://eviza.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">eviza.mfa.uz</a>, 
  после чего её необходимо распечатать и подписать. Отдельные формы в формате PDF или DOCX для скачивания не предусмотрены — весь процесс осуществляется через онлайн-сервис.
</p>
<p style="font-size: 15px;">
  Рекомендуется связаться с 
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">Посольством Узбекистана в Пакистане</a> 
  для получения актуальной информации и уточнения деталей подачи заявления на визу.
</p>
`,

  uz: `
<h2 style="font-size: 20px; font-weight: 600;">Viza arizasini to‘ldirish:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>Vizani rasmiylashtirish uchun arizani ikki nusxada to‘ldirish va imzolash talab qilinadi. Ariza onlayn to‘ldiriladi:</li>
  <a href="https://eviza.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">eviza.mfa.uz</a>, 
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>, 
  <a href="https://gk-usbekistan.de" target="_blank" style="text-decoration: underline; color: black;">gk-usbekistan.de</a>.
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Zarur hujjatlarni tayyorlash:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>3,5 x 4,5 sm o‘lchamdagi ikkita rangli surat, ariza blankasiga yopishtirilgan holda. 
    <a href="https://gk-usbekistan.de" target="_blank" style="text-decoration: underline; color: black;">gk-usbekistan.de</a>
  </li>
  <li>Amaldagi xorijiy pasport – kirish sanasidan boshlab kamida 3 oy amal qilishi kerak. 
    <a href="https://pac.ru" target="_blank" style="text-decoration: underline; color: black;">pac.ru</a>
  </li>
  <li>Safar maqsadini tasdiqlovchi qo‘shimcha hujjatlar (masalan, ish beruvchidan taklifnoma).</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Hujjatlarni topshirish:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>To‘ldirilgan arizalar va hujjatlar O‘zbekistonning Pokistondagi elchixonasiga topshiriladi: 
    <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>
  </li>
  <li>Elchixona manzili: 40-uy, Khayaban-i-Iqbol ko‘chasi, F-8/3 sektor, Islomobod. 
    <a href="https://skyway.uz" target="_blank" style="text-decoration: underline; color: black;">SKYWAY</a> | 
    <a href="#" style="text-decoration: underline; color: black;">Sayohat agentligi</a>
  </li>
  <li>Aloqa telefoni: +92-51-226-47-46.</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Konsullik yig‘imini to‘lash:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>Konsullik to‘lovi vizaning turiga va amal qilish muddatiga qarab belgilanadi. Batafsil ma’lumot elchixona saytida mavjud:</li>
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>, 
  <a href="https://gov.uz" target="_blank" style="text-decoration: underline; color: black;">O‘zbekiston Respublikasi Hukumat portali</a>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Arizani ko‘rib chiqish:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>Arizalarni ko‘rib chiqish muddati farq qilishi mumkin. Kechikishlarning oldini olish uchun hujjatlarni erta topshirish tavsiya etiladi.</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Ariza shakllari:</h2>
<p style="font-size: 15px;">
  Viza arizasi 
  <a href="https://eviza.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">eviza.mfa.uz</a>
  saytida onlayn to‘ldiriladi, keyin esa chop etilib imzolanadi. Yuklab olish uchun PDF yoki DOCX shakllar mavjud emas — barcha jarayon onlayn amalga oshiriladi.
</p>
<p style="font-size: 15px;">
  Batafsil ma’lumot va ariza topshirish tartibi bo‘yicha 
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">Pokistondagi O‘zbekiston elchixonasi</a>
  bilan bog‘lanish tavsiya etiladi.
</p>
`,

  en: `
<h2 style="font-size: 20px; font-weight: 600;">Filling out the visa application:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>You need to fill out and sign the visa form in two copies. The form is completed online at:</li>
  <a href="https://eviza.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">eviza.mfa.uz</a>, 
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>, 
  <a href="https://gk-usbekistan.de" target="_blank" style="text-decoration: underline; color: black;">gk-usbekistan.de</a>.
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Preparing required documents:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>Two color photos sized 3.5 x 4.5 cm attached to the form. 
    <a href="https://gk-usbekistan.de" target="_blank" style="text-decoration: underline; color: black;">gk-usbekistan.de</a>
  </li>
  <li>A valid passport with at least three months validity from the intended date of entry. 
    <a href="https://pac.ru" target="_blank" style="text-decoration: underline; color: black;">pac.ru</a>
  </li>
  <li>Additional documents confirming the purpose of the trip (e.g. job invitation letter for work visa).</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Submitting documents:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>Submit completed forms and documents to the Embassy of Uzbekistan in Pakistan: 
    <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>
  </li>
  <li>Embassy address: House №40, Khayaban-e-Iqbal Street, Sector F-8/3, Islamabad. 
    <a href="https://skyway.uz" target="_blank" style="text-decoration: underline; color: black;">SKYWAY</a> | 
    <a href="#" style="text-decoration: underline; color: black;">Travel Agency</a>
  </li>
  <li>Contact phone: +92-51-226-47-46.</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Payment of consular fee:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>The consular fee depends on the category and validity of the visa. More info is available on:</li>
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>, 
  <a href="https://gov.uz" target="_blank" style="text-decoration: underline; color: black;">Uzbekistan Government Portal</a>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Processing time:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>The processing time may vary. It is advised to apply in advance to avoid possible delays.</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">Application forms:</h2>
<p style="font-size: 15px;">
  The visa form is completed online at 
  <a href="https://eviza.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">eviza.mfa.uz</a>, 
  then printed and signed. There are no downloadable PDF or DOCX forms — the process is entirely online.
</p>
<p style="font-size: 15px;">
  It is recommended to contact the 
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">Embassy of Uzbekistan in Pakistan</a> 
  for current information and application details.
</p>
`,
  ur: `
<h2 style="font-size: 20px; font-weight: 600;">ویزا درخواست فارم بھرنا:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>آپ کو ویزا فارم دو نقول میں بھرنا اور اس پر دستخط کرنا ہوگا۔ فارم آن لائن مکمل کیا جاتا ہے:</li>
  <a href="https://eviza.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">eviza.mfa.uz</a>, 
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>, 
  <a href="https://gk-usbekistan.de" target="_blank" style="text-decoration: underline; color: black;">gk-usbekistan.de</a>.
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">ضروری دستاویزات کی تیاری:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>3.5 x 4.5 سینٹی میٹر کی دو رنگین تصاویر جو فارم کے ساتھ منسلک ہوں۔ 
    <a href="https://gk-usbekistan.de" target="_blank" style="text-decoration: underline; color: black;">gk-usbekistan.de</a>
  </li>
  <li>ایک درست پاسپورٹ جس کی میعاد متوقع سفر کی تاریخ سے کم از کم تین ماہ مزید ہو۔ 
    <a href="https://pac.ru" target="_blank" style="text-decoration: underline; color: black;">pac.ru</a>
  </li>
  <li>سفر کے مقصد کی تصدیق کرنے والی اضافی دستاویزات (مثال کے طور پر ورک ویزہ کے لیے آجر کا دعوت نامہ)۔</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">دستاویزات جمع کروانا:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>مکمل شدہ فارم اور دستاویزات ازبکستان کے سفارت خانے (پاکستان) میں جمع کروائیں: 
    <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>
  </li>
  <li>سفارت خانے کا پتہ: ہاؤس نمبر 40، خیابان اقبال، سیکٹر F-8/3، اسلام آباد۔
    <a href="https://skyway.uz" target="_blank" style="text-decoration: underline; color: black;">SKYWAY</a> | 
    <a href="#" style="text-decoration: underline; color: black;">ٹریول ایجنسی</a>
  </li>
  <li>رابطہ نمبر: +92-51-226-47-46۔</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">قونصلر فیس کی ادائیگی:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>قونصلر فیس ویزہ کی قسم اور اس کی مدت پر منحصر ہے۔ مزید معلومات کے لیے سفارت خانے کی ویب سائٹ ملاحظہ کریں:</li>
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">pakistan.mfa.uz</a>, 
  <a href="https://gov.uz" target="_blank" style="text-decoration: underline; color: black;">ازبکستان حکومتی پورٹل</a>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">درخواست پر کارروائی کا وقت:</h2>
<ul style="font-size: 15px; list-style-type: disc;">
  <li>ویزا درخواست پر کارروائی کا وقت مختلف ہو سکتا ہے۔ ممکنہ تاخیر سے بچنے کے لیے پہلے سے درخواست جمع کروانے کا مشورہ دیا جاتا ہے۔</li>
</ul>

<h2 style="font-size: 20px; font-weight: 600; margin-top: 25px;">درخواست کے فارم:</h2>
<p style="font-size: 15px;">
  ویزا فارم 
  <a href="https://eviza.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">eviza.mfa.uz</a>
  پر آن لائن مکمل کیا جاتا ہے، جس کے بعد اسے پرنٹ کرکے دستخط کر لیا جاتا ہے۔ پی ڈی ایف یا DOCX میں ڈاؤن لوڈ کے فارم دستیاب نہیں ہیں — یہ تمام عمل آن لائن ہوتا ہے۔
</p>
<p style="font-size: 15px;">
  مزید تازہ ترین معلومات اور درخواست جمع کروانے کی تفصیلات کے لیے 
  <a href="https://pakistan.mfa.uz" target="_blank" style="text-decoration: underline; color: black;">ازبکستان کے سفارت خانے (پاکستان)</a>
  سے رابطہ کرنے کی سفارش کی جاتی ہے۔
</p>
`,
};
