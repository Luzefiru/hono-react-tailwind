import { useParams } from 'react-router-dom';

export default function Hello() {
  const { name } = useParams();

  return (
    <h1 className="h-screen flex items-center justify-center text-green-500">
      Hello {name}!
    </h1>
  );
}
