import React, { useState } from 'react';

export default function CounterComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
}
