type FilterDropdownProps = {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function FilterDropdown({ options, onChange }: FilterDropdownProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-sm text-gray-700">Filter by city:</span>
      <select
        onChange={onChange}
        className="border rounded-md px-3 py-1.5 text-sm bg-white"
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
