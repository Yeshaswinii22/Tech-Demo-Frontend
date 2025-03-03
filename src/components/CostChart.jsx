import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const CostChart = ({ granularity }) => {
  // Sample Data for Line Chart
  const sampleData = [
    { date: "2024-01-01", cost: 120.50 },
    { date: "2024-01-02", cost: 110.75 },
    { date: "2024-01-03", cost: 95.20 },
    { date: "2024-01-04", cost: 130.40 },
  ];

  // Sample Data for Pie Chart
  const pieData = [
    { name: "Compute", value: 400 },
    { name: "Storage", value: 300 },
    { name: "Networking", value: 200 },
    { name: "Databases", value: 100 },
  ];

  // Pie Chart Colors
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Line Chart */}
      <div className="bg-white p-4 shadow-md rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Cost Trend ({granularity})</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cost" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 shadow-md rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Cost Breakdown</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CostChart;
