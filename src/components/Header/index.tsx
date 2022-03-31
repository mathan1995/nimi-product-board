import React from "react";
import { Link } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <header>
      <h3 className="logo">
        <Link to="/">ProductBoard</Link>
        <FaProductHunt />
      </h3>
    </header>
  );
};

export default Header;
