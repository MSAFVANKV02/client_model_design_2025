import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg">Sorry, the page youe looking for doesnt exist.</p>
      <Link to="/" className="mt-4 text-primary underline">
        Go back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
