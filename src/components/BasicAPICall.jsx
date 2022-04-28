import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BasicAPICall() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  let tabledata = () => {
    return data.map((row) => {
      return (
        <tr key={row.id}>
          <td>{row.userId}</td>
          <td>{row.id}</td>
          <td>{row.title}</td>
          <td>{row.body}</td>
        </tr>
      );
    });
  };
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>{tabledata()}</tbody>
    </table>
  );
}
