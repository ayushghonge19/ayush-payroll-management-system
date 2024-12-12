

//this code is working perfectly
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
  payroll: string;
  allowance: number;
  deduction: number;
  attendance: string;
  tax: number;
  leave: number;
  bank_details: string;
  position: string;
}

const PayrollManagement: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        console.log('Fetched employees:', response.data); // Debugging step
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  // Function to calculate total salary based on salary, allowance, deduction, and tax
  const calculateTotalSalary = (employee: Employee) => {
    const salary = isNaN(employee.salary) ? 0 : Number(employee.salary);  // Ensure it's a number
    const allowance = isNaN(employee.allowance) ? 0 : Number(employee.allowance);
    const deduction = isNaN(employee.deduction) ? 0 : Number(employee.deduction);
    const tax = isNaN(employee.tax) ? 0 : Number(employee.tax);

    const grossSalary = salary + allowance;
    const totalDeductions = deduction + tax;
    const totalSalary = grossSalary - totalDeductions;
    return totalSalary;
  };

  const handleEmployeeSelect = (employeeId: number) => {
    const employee = employees.find(emp => emp.id === employeeId);
    setSelectedEmployee(employee || null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Payroll Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Employee List</h2>
          <ul className="space-y-2">
            {employees.map((employee) => (
              <li key={employee.id}>
                <button
                  onClick={() => handleEmployeeSelect(employee.id)}
                  className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  {employee.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Payroll Details</h2>
          {selectedEmployee ? (
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-semibold">{selectedEmployee.name}</h3>
                <p>Basic Salary: ${selectedEmployee.salary}</p>
              </div>
              <div>
                <h4 className="font-semibold">Allowances</h4>
                <ul className="list-disc list-inside">
                  <li>Allowance: ${selectedEmployee.allowance}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Deductions</h4>
                <ul className="list-disc list-inside">
                  <li>Deduction: ${selectedEmployee.deduction}</li>
                  <li>Tax: ${selectedEmployee.tax}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Leave Information</h4>
                <p>Total Leaves: {selectedEmployee.leave}</p>
              </div>
              <div>
                <h4 className="font-semibold">Attendance</h4>
                <p>Attendance: {selectedEmployee.attendance}</p>
              </div>
              <div className="bg-green-100 p-4 rounded">
                <h4 className="font-semibold">Total Salary</h4>
                <p className="text-xl">${calculateTotalSalary(selectedEmployee)}</p>
              </div>
            </div>
          ) : (
            <p>Select an employee to view payroll details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;