import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1>404 Not Found</h1>
      <Link to="/" className="underline text-blue-700">
        Back to Home?
      </Link>
    </div>
  );
}
