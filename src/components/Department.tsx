
//RADHAVALLABHSHRIHARIVANSH CODE

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Department {
  id: number;
  name: string;
  head: string;
  employeeCount: number;
}

const Department: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/departments');
        setDepartments(response.data);  // Assuming the data is in the correct format
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch departments');
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  if (loading) return <div>Loading departments...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Head</th>
            <th className="py-2 px-4 border-b">Employee Count</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td className="py-2 px-4 border-b">{dept.id}</td>
              <td className="py-2 px-4 border-b">{dept.name}</td>
              <td className="py-2 px-4 border-b">{dept.head}</td>
              <td className="py-2 px-4 border-b">{dept.employeeCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Department;*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Department {
  department_id: number;
  department_name: string;
  head_of_department: string;
  number_of_employees: number;
  location: string;
  budget: number;
  created_at: string;
}

const Department: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/departments');
        setDepartments(response.data); // Assuming the data matches the updated interface
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch departments');
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  if (loading) return <div>Loading departments...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Head of Department</th>
            <th className="py-2 px-4 border-b">Number of Employees</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Budget</th>
            <th className="py-2 px-4 border-b">Created At</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.department_id}>
              <td className="py-2 px-4 border-b">{dept.department_id}</td>
              <td className="py-2 px-4 border-b">{dept.department_name}</td>
              <td className="py-2 px-4 border-b">{dept.head_of_department}</td>
              <td className="py-2 px-4 border-b">{dept.number_of_employees}</td>
              <td className="py-2 px-4 border-b">{dept.location}</td>
              <td className="py-2 px-4 border-b">{dept.budget}</td>
              <td className="py-2 px-4 border-b">{new Date(dept.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
