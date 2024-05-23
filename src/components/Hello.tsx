import { useParams } from 'react-router-dom';

export default function Hello() {
  const { name } = useParams();

  return (
    <h1 className="flex flex-col items-center justify-center h-screen">
      Hello {name}!
      <a href="/" className="text-blue-500 hover:text-blue-700">
        Back to home /
      </a>
    </h1>
  );
}
