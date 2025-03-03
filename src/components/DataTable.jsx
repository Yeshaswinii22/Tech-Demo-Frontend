const DataTable = ({ granularity }) => {
  const sampleData = [
    { date: "2024-01-01", month: "Jan", year: "2024", service: "Virtual Machines", resource_group: "RG-App1", cost: 120.5 },
    { date: "2024-01-02", month: "Feb", year: "2024", service: "Virtual Machines", resource_group: "RG-App1", cost: 110.75 },
  ];

  const getDateLabel = () => (granularity === "daily" ? "Date" : granularity === "monthly" ? "Month" : "Year");

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border border-gray-300 bg-white rounded-xl shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left border">{getDateLabel()}</th>
            <th className="p-3 text-left border">Service</th>
            <th className="p-3 text-left border">Resource Group</th>
            <th className="p-3 text-left border">Cost (USD)</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border">{item.date || item.month || item.year}</td>
              <td className="p-3 border">{item.service}</td>
              <td className="p-3 border">{item.resource_group}</td>
              <td className="p-3 border font-semibold">${item.cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
