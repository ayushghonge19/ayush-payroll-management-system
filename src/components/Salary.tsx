import React, { useEffect, useState } from 'react';

const Salary: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);  // State to store employee data
  const [loading, setLoading] = useState<boolean>(true);  // Loading state to show loading indicator
  const [error, setError] = useState<string>('');  // Error state to show error message

  // Fetch employee salary data from the backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        // Change the URL to the salary endpoint
        const response = await fetch('http://localhost:5000/api/salary');
        const data = await response.json();

        // Check for any errors from the backend API response
        if (data.error) {
          setError(data.error);
        } else {
          setEmployees(data);  // Update state with the fetched salary data
        }
      } catch (err) {
        setError('Failed to fetch employee salary data');  // Error handling for network issues
      } finally {
        setLoading(false);  // Stop loading once the fetch is complete
      }
    };

    fetchEmployees();  // Call the function to fetch salary data when the component mounts
  }, []);  // Empty dependency array, runs only once when the component mounts

  // If the data is still loading, show a loading message
  if (loading) return <div>Loading...</div>;

  // If there's an error, display the error message
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Salary Details</h1>
      {/* Table structure to display the employee salary data */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Salary</th>
            <th className="border px-4 py-2">Payroll</th>
            <th className="border px-4 py-2">Allowance</th>
            <th className="border px-4 py-2">Deduction</th>
            <th className="border px-4 py-2">Attendance</th>
            <th className="border px-4 py-2">Tax</th>
            <th className="border px-4 py-2">Leave</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the employees array to display each employee's salary data in table rows */}
          {employees.map((employee) => (
            <tr key={employee.ID}>
              <td className="border px-4 py-2">{employee.ID}</td>
              <td className="border px-4 py-2">{employee.Name}</td>
              <td className="border px-4 py-2">{employee.Salary}</td>
              <td className="border px-4 py-2">{employee.Payroll}</td>
              <td className="border px-4 py-2">{employee.Allowance}</td>
              <td className="border px-4 py-2">{employee.Deduction}</td>
              <td className="border px-4 py-2">{employee.Attendance}</td>
              <td className="border px-4 py-2">{employee.Tax}</td>
              <td className="border px-4 py-2">{employee.Leave_days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Salary;

