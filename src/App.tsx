
//radha vallabh shri harivansh best working code
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import PayrollManagement from './components/PayrollManagement';
import Department from './components/Department';
import DatabaseOperations from './components/DatabaseOperations';
import Salary from './components/Salary';  // Import Salary component
import LeaveManagement from './components/LeaveManagement';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">Payroll Management System</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Dashboard</Link>
                  <Link to="/employees" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Employees</Link>
                  <Link to="/payroll" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Payroll</Link>
                  <Link to="/departments" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Departments</Link>
                  <Link to="/salary" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Salary</Link> {}
                  <Link to="/database" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Database Operations</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/payroll" element={<PayrollManagement />} />
            <Route path="/departments" element={<Department />} />
            <Route path="/salary" element={<Salary />} />  {}
            <Route path="/leavemanagement" element={<LeaveManagement/>}/>
            <Route path="/database" element={<DatabaseOperations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

*/

//Most recent Radhavallabh shri harivansh app.tsx code
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import PayrollManagement from './components/PayrollManagement';
import Department from './components/Department';
import DatabaseOperations from './components/DatabaseOperations';
import Salary from './components/Salary';  // Import Salary component
import LeaveManagement from './components/LeaveManagement'; // Import Leave Management component
import GeneratePayroll from './components/GeneratePayroll'; // Import GeneratePayroll component


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">Payroll Management System</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Dashboard</Link>
                  <Link to="/employees" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Employees</Link>
                  <Link to="/payroll" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Payroll</Link>
                  <Link to="/departments" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Departments</Link>
                  <Link to="/salary" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Salary</Link> {}
                  <Link to="/leavemanagement" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Leave Management</Link> {}
                  <Link to="/database" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Database Operations</Link>
                  <Link to="/generate-payroll" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
  Generate Payroll
</Link>

                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/payroll" element={<PayrollManagement />} />
            <Route path="/departments" element={<Department />} />
            <Route path="/salary" element={<Salary />} />  {}
            <Route path="/leavemanagement" element={<LeaveManagement />} /> {}
            <Route path="/generate-payroll" element={<GeneratePayroll />} />
            <Route path="/database" element={<DatabaseOperations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import PayrollManagement from './components/PayrollManagement';
import Department from './components/Department';
import DatabaseOperations from './components/DatabaseOperations';
import Salary from './components/Salary';  // Import Salary component
import LeaveManagement from './components/LeaveManagement'; // Import Leave Management component
import GeneratePayroll from './components/GeneratePayroll'; // Import GeneratePayroll component
import UpdateAttendance from './components/UpdateAttendance'; // Import UpdateAttendance component
import MedicalAllowance from './components/MedicalAllowance';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">Payroll Management System</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Dashboard</Link>
                  <Link to="/employees" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Employees</Link>
                  <Link to="/payroll" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Payroll</Link>
                  <Link to="/departments" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Departments</Link>
                  <Link to="/salary" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Salary</Link>
                  <Link to="/leavemanagement" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Leave Management</Link>
                  <Link to="/database" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Database Operations</Link>
                  <Link to="/generate-payroll" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Generate Payroll</Link>
                  <Link to="/update-attendance" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Update Attendance</Link>  {/* Added Update Attendance link */}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/payroll" element={<PayrollManagement />} />
            <Route path="/departments" element={<Department />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/leavemanagement" element={<LeaveManagement />} />
            <Route path="/generate-payroll" element={<GeneratePayroll />} />
            <Route path="/database" element={<DatabaseOperations />} />
            <Route path="/update-attendance" element={<UpdateAttendance />} />  {/* Added route for Update Attendance */}
            <Route path="/medicalallowance" element = {<MedicalAllowance/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
