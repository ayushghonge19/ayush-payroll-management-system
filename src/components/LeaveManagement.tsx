import React from 'react';

const LeaveManagement: React.FC = () => {
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
    { name: 'Simran Vinodkumar Ahirwar', id: '23BCE11525' },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-100 to-violet-200 p-8 rounded-xl shadow-xl">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">Leave Management System</h2>
      <p className="text-lg text-gray-700 mb-4">
        Below is a summary of leave applications for our team members.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-sm text-gray-600">ID: {member.id}</p>
            <p className="text-sm text-gray-600">Leave Status: Pending</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaveManagement;