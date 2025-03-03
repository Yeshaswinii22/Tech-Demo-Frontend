import { useState } from "react";

const FilterBar = ({ onApply }) => {
  const [filters, setFilters] = useState({
    subscription_id: "",
    time_range: { start: "", end: "" },
    granularity: "daily",
  });

  return (
    <div className="bg-white shadow-md p-4 rounded-xl flex flex-wrap gap-4 items-center">
      <input
        type="text"
        placeholder="Subscription ID"
        value={filters.subscription_id}
        onChange={(e) => setFilters({ ...filters, subscription_id: e.target.value })}
        className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg"
      />
      <input
        type="date"
        value={filters.time_range.start}
        onChange={(e) => setFilters({ ...filters, time_range: { ...filters.time_range, start: e.target.value } })}
        className="p-2 border border-gray-300 rounded-lg"
      />
      <input
        type="date"
        value={filters.time_range.end}
        onChange={(e) => setFilters({ ...filters, time_range: { ...filters.time_range, end: e.target.value } })}
        className="p-2 border border-gray-300 rounded-lg"
      />
      <select
        value={filters.granularity}
        onChange={(e) => setFilters({ ...filters, granularity: e.target.value })}
        className="p-2 border border-gray-300 rounded-lg bg-white"
      >
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <button
        onClick={() => onApply(filters)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBar;
