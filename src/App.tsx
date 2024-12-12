import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import PayrollManagement from './components/PayrollManagement';
import DatabaseOperations from './components/DatabaseOperations';

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
            <Route path="/database" element={<DatabaseOperations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

