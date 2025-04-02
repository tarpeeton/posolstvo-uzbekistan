import { useLocale } from "next-intl";



type MonthPickerProps = {
  selectedYear: number;
  onSelectMonth: (monthIndex: number) => void;
};

export const MonthPicker = ({ onSelectMonth }: MonthPickerProps) => {
  const locale = useLocale();
  const monthNames: Record<string, string[]> = {
    en: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    ru: [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
    ],
    uz: [
      "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
      "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr",
    ],
    ur: [
      "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون",
      "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر",
    ],
  };
  
  const months = monthNames[locale] || monthNames["en"];
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {months.map((month, index) => (
          <button
            key={index}
            onClick={() => onSelectMonth(index)}
            className="p-2 border rounded hover:bg-blue-100"
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};