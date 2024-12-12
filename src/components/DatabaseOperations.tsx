
//radheshyambesttillnow+selectquery is working

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DatabaseOperations: React.FC = () => {
  const [createQuery, setCreateQuery] = useState('');
  const [insertQuery, setInsertQuery] = useState('');
  const [selectQuery, setSelectQuery] = useState('');
  const [dropQuery, setDropQuery] = useState('');
  const [result, setResult] = useState('');
  const [employees, setEmployees] = useState<any[]>([]);  // State for storing employee data

  const handleQuery = async (operation: string, query: string) => {
    try {
      console.log("clicked ", operation, query);

      const response = await fetch(`http://localhost:5000/api/database/${operation}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();

      if (data.success) {
        toast(operation + " Successfully");
      } else {
        toast("Failed to execute");
      }

      // If it's a SELECT query, update the employees list with the result
      if (operation === 'select') {
        setEmployees(data);  // Update the employees state with the SELECT query results
      }

      setResult(JSON.stringify(data, null, 2));  // Show the result of the query execution
    } catch (error) {
      console.error(`Error performing ${operation}:`, error);
      setResult(`Error performing ${operation}`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Database Operations</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Create Table</h2>
          <textarea
            value={createQuery}
            onChange={(e) => setCreateQuery(e.target.value)}
            className="w-full h-32 p-2 border rounded"
            placeholder="Enter CREATE TABLE query..."
          />
          <button
            onClick={() => handleQuery('create', createQuery)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Execute Create Query
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Insert Data</h2>
          <textarea
            value={insertQuery}
            onChange={(e) => setInsertQuery(e.target.value)}
            className="w-full h-32 p-2 border rounded"
            placeholder="Enter INSERT query..."
          />
          <button
            onClick={() => handleQuery('insert', insertQuery)}
            className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Execute Insert Query
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Show Data</h2>
          <textarea
            value={selectQuery}
            onChange={(e) => setSelectQuery(e.target.value)}
            className="w-full h-32 p-2 border rounded"
            placeholder="Enter SELECT query..."
          />
          <button
            onClick={() => handleQuery('select', selectQuery)}
            className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Execute Select Query
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Drop Table</h2>
          <textarea
            value={dropQuery}
            onChange={(e) => setDropQuery(e.target.value)}
            className="w-full h-32 p-2 border rounded"
            placeholder="Enter DROP TABLE query..."
          />
          <button
            onClick={() => handleQuery('drop', dropQuery)}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Execute Drop Query
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Result</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            {result}
          </pre>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DatabaseOperations;
