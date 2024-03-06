import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 flex flex-col items-center justify-center h-screen">
      <h1 className="text-yellow-500 text-4xl">Hello World</h1>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Click Me!</button>
      </div>
    </div>
  );
}
