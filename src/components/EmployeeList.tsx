/*
import React, { useEffect, useState } from 'react';

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch employees from the backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/employees');
        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setEmployees(data);
        }
      } catch (err) {
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };
    
    fetchEmployees();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Department</th>
            <th className="border px-4 py-2">Salary</th>
            <th className="border px-4 py-2">Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border px-4 py-2">{employee.id}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.department}</td>
              <td className="border px-4 py-2">{employee.salary}</td>
              <td className="border px-4 py-2">{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
*/

//RADHAVALLABHSHRIHARIVANSH CODE

/*import React, { useEffect, useState } from 'react';

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch employees from the backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/employees');
        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setEmployees(data);
        }
      } catch (err) {
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };
    
    fetchEmployees();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Department</th>
            <th className="border px-4 py-2">Salary</th>
            <th className="border px-4 py-2">Position</th>
            <th className="border px-4 py-2">Age</th> {}
            <th className="border px-4 py-2">Company</th> {}
            <th className="border px-4 py-2">Date of Joining</th> {}
            <th className="border px-4 py-2">Contact Number</th> {}
            <th className="border px-4 py-2">Email</th> {}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border px-4 py-2">{employee.id}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.department}</td>
              <td className="border px-4 py-2">{employee.salary}</td>
              <td className="border px-4 py-2">{employee.position}</td>
              <td className="border px-4 py-2">{employee.age}</td> {}
              <td className="border px-4 py-2">{employee.company_name}</td> {}
              <td className="border px-4 py-2">{employee.date_of_joining}</td> {}
              <td className="border px-4 py-2">{employee.contact_number}</td> {}
              <td className="border px-4 py-2">{employee.email}</td> {}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;*/
//TEST01
import React, { useEffect, useState } from 'react';

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch employees from the backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/employees');
        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setEmployees(data);
        }
      } catch (err) {
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };
    
    fetchEmployees();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Table</h1>
      <h2>Normalized Entity table of employee</h2>
      <h2>work by Ayush Ghonge 23BCE10325</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Position</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Company</th>
            <th className="border px-4 py-2">Date of Joining</th>
            <th className="border px-4 py-2">Contact Number</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Department ID</th>
            <th className="border px-4 py-2">Salary ID</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border px-4 py-2">{employee.id}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.position}</td>
              <td className="border px-4 py-2">{employee.age}</td>
              <td className="border px-4 py-2">{employee.company_name}</td>
              <td className="border px-4 py-2">{employee.date_of_joining}</td>
              <td className="border px-4 py-2">{employee.contact_number}</td>
              <td className="border px-4 py-2">{employee.email}</td>
              <td className="border px-4 py-2">{employee.department_id}</td>
              <td className="border px-4 py-2">{employee.salaryID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
