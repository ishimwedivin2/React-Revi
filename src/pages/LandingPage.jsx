import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="mb-6 text-gray-600">Start your journey with us.</p>
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded">
            Sign Up
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
