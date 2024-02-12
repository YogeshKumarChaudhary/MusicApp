import React from "react";
import "./PageNotFoundPage.css";
import { Link } from "react-router-dom";

const PageNotFoundPage = () => {
  return (
    <div className="pagenotfound-container">
      <h1>404 - Page not Found</h1>
      <Link to="/">
        <h2>Go To Home</h2>
      </Link>
    </div>
  );
};

export default PageNotFoundPage;
