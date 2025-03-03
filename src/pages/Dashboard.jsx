
import { useState } from "react";
import FilterBar from "../components/FilterBar";
import CostChart from "../components/CostChart";
import DataTable from "../components/DataTable";

const Dashboard = () => {
  const [granularity, setGranularity] = useState("daily");

  const handleApplyFilters = (filters) => {
    setGranularity(filters.granularity);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Cloud Cost Dashboard</h1>
      <FilterBar onApply={handleApplyFilters} />
      <CostChart granularity={granularity} />
      <DataTable granularity={granularity} />
    </div>
  );
};

export default Dashboard;
