type YearPickerProps = {
  onSelectYear: (year: number) => void;
};

export const YearPicker = ({ onSelectYear }: YearPickerProps) => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 5;
  const years: number[] = [];
  for (let i = startYear; i < startYear + 12; i++) {
    years.push(i);
  }
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onSelectYear(year)}
            className="p-2 border rounded hover:bg-blue-100"
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};