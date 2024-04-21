import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <div className="flex-fill">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
