import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BasicAPICall() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log('API Call');
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  let tabledata = () => {
    return data.map((row) => {
      return (
        <tr
          key={row.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td className="px-6 py-4">{row.userId}</td>
          <td className="px-6 py-4">{row.id}</td>
          <td className="px-6 py-4">{row.title}</td>
          <td className="px-6 py-4">{row.body}</td>
        </tr>
      );
    });
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">UserID</th>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Body</th>
          </tr>
        </thead>
        <tbody>{tabledata()}</tbody>
      </table>
    </div>
  );
}
