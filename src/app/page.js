// pages/page.js
"use client"; // Add "use client" here
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Preloader from './Preloader'; // Import Preloader component

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Adjusted timeout to 10 seconds (10000 milliseconds)

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Preloader />} {/* Show Preloader while isLoading is true */}
      
      <Header />
      <Home />
    </>
  );
};

export default Page;
