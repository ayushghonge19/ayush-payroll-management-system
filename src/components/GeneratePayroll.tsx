import React, { useState } from "react";
import axios from "axios";

const GeneratePayroll: React.FC = () => {
  const [employeeId, setEmployeeId] = useState<string>("");
  const [payrollDate, setPayrollDate] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/generate_payroll", {
        employee_id: employeeId,
        payroll_date: payrollDate,
      });
      setResult(response.data.message || "Payroll generated successfully!");
    } catch (error: any) {
      setResult("Error generating payroll: " + (error.response?.data.error || error.message));
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Generate Payroll</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Payroll Date (YYYY-MM-DD):</label>
          <input
            type="date"
            value={payrollDate}
            onChange={(e) => setPayrollDate(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate Payroll
        </button>
      </form>
      {result && <p className="mt-4 text-green-600">{result}</p>}
    </div>
  );
};

export default GeneratePayroll;
