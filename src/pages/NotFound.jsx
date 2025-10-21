import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container">
      <h2>404 - Not Found</h2>
      <p>
        Back to <Link to="/">Home</Link>
      </p>
    </main>
  );
}
