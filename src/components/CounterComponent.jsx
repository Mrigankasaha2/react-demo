import React, { useState } from 'react';

export default function CounterComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl">{count}</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
}
