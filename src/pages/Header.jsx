import React from "react";
import "../styles/header.css"; // ✅ Correct way to import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to Our Website</h1>
    </header>
  );
};

export default Header;
