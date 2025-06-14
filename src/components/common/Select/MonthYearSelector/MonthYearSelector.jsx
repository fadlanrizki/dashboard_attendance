const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 10 }, (_, i) => 2020 + i);

export default function MonthYearSelector() {
  return (
    <div className="flex rounded-3xl border border-gray-300 overflow-hidden w-fit">
      <select
        className="px-4 text-sm outline-none bg-white text-gray-800 font-medium border-r border-gray-300 cursor-pointer"
        defaultValue="October"
      >
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>

      <select
        className="px-4 text-sm outline-none bg-white text-gray-500 cursor-pointer"
        defaultValue="2023"
      >
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
}
