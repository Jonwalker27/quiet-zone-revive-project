
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 md:py-32 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">404</h1>
        <div className="section-divider"></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-dark-text mb-6">
          Page Not Found
        </h2>
        <p className="text-medium-gray text-lg max-w-xl mx-auto mb-10">
          Sorry, the page you're looking for doesn't exist or has been moved. Please return to our homepage or contact us for assistance.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home className="mr-2 h-5 w-5" /> Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
