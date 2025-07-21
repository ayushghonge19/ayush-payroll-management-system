import React, { useEffect, useState } from 'react';

const MedicalAllowance: React.FC = () => {
  const [allowances, setAllowances] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch medical allowance data from the backend
  useEffect(() => {
    const fetchAllowances = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/medical-allowance');
        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setAllowances(data);
        }
      } catch (err) {
        setError('Failed to fetch medical allowances');
      } finally {
        setLoading(false);
      }
    };

    fetchAllowances();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Medical Allowance List</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Allowance ID</th>
            
            <th className="border px-4 py-2">Medical Condition</th>
            <th className="border px-4 py-2">Allowance Amount</th>
            <th className="border px-4 py-2">Date Approved</th>
          </tr>
        </thead>
        <tbody>
          {allowances.map((allowance) => (
            <tr key={allowance.id}>
              <td className="border px-4 py-2">{allowance.id}</td>
              <td className="border px-4 py-2">{allowance.employeeName}</td>
              <td className="border px-4 py-2">{allowance.medicalCondition}</td>
              <td className="border px-4 py-2">${allowance.amount}</td>
              <td className="border px-4 py-2">
                {new Date(allowance.dateApproved).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalAllowance;