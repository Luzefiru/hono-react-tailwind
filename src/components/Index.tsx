import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 p-8">
      <h1 className="text-4xl text-yellow-500">Hono + React + Tailwind</h1>
      <p>Current Count: {count}</p>
      <div>
        <button
          className="px-4 py-2 font-bold bg-red-500 rounded-lg hover:bg-red-700"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Click Me!
        </button>
      </div>
      <a className="text-blue-500 hover:text-blue-700" href="/hello/John">
        Click to navigate to <code>/hello/John</code>
      </a>
    </div>
  );
}
