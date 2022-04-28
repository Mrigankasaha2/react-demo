import React, { useContext } from 'react';
import { Moodcontext } from '../App';

export default function PassDataComponent(props) {
  const mood = useContext(Moodcontext);
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        The Number is {props.number}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        The mood is {mood}
      </p>
      <DemoChild />
    </div>
  );
}

function DemoChild() {
  return <h1>Hi This is a Demo Child </h1>;
}
