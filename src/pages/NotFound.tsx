
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold text-mrg-primary mb-6">404</h1>
          <p className="text-2xl text-mrg-gray mb-8">Oops! We couldn't find the page you're looking for.</p>
          <a 
            href="/" 
            className="primary-btn"
          >
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
