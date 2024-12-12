

import React from 'react';

const Dashboard: React.FC = () => {
  const teamMembers = [
    { name: 'Ayush Ghonge', id: '23BCE10325' },
    { name: 'Krishna', id: '23BCE10339' },
    { name: 'Sayan Ghosh', id: '23BCE11674' },
    { name: 'Harshika Sharma', id: '23BCE11313' },
    { name: 'Tanvi Chaudhari', id: '23BCE10358' },
    { name: 'Dolmaa Sharma', id: '23BCE10761' },
    { name: 'Manasvi Khare', id: '23BCE10232' },
    { name: 'Meet Patel', id: '23BCE10256' },
    { name: 'Samanwita Majumdar', id: '23BCE11225' },
    { name: 'Amratash Pandey', id: '23BCE11368' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-8">
          <h1 className="text-5xl font-extrabold mb-12 text-center text-gradient">Dashboard</h1>
          
          {}
          <section className="bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:bg-blue-50 transform hover:scale-105">
            <h2 className="text-4xl font-semibold text-gray-800 mb-3">Project Details</h2>
            <p className="text-xl text-gray-700 mb-2">DATABASE MANAGEMENT SYSTEM [CSE3001] Group Project</p>
            <p className="text-md text-gray-600">SLOT: A21-A22-A23</p>
            <p className="text-md text-gray-600">FACULTY: DR. VAIBHAV K. KHATAVKAR (Senior Professor, VIT Bhopal)</p>
          </section>

          {}
          <section className="bg-gradient-to-r from-teal-100 to-cyan-200 p-8 rounded-xl shadow-xl">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Team Gokuldham</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.id}</p>
                </div>
              ))}
            </div>
          </section>

          {}
          <section className="bg-gradient-to-r from-green-100 to-lime-200 p-8 rounded-xl shadow-xl">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Payroll Management System</h2>
            <p className="text-lg text-gray-700 mb-4">Welcome to the Payroll Management System Dashboard.</p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-500 transition-all duration-300">
              Access System
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

