import React from "react";
import "../styles/footer.css"; // Ensure this file exists and has the necessary styles

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-4 mt-auto w-full">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        <div className="mt-2">
          <a 
            href="https://facebook.com" 
            className="mx-2 text-blue-500 hover:text-blue-700"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a 
            href="https://twitter.com" 
            className="mx-2 text-blue-400 hover:text-blue-600"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a 
            href="https://instagram.com" 
            className="mx-2 text-pink-500 hover:text-pink-700"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
