import React from "react";
import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const NoPage = () => {
  return (
    <Container>
      <h1 className="text-center">Page Not Found</h1>

      <p className="text-center">
        The page you are looking for does not exist.
      </p>

      <p className="text-center">
        Please check the URL or click the link below to return to the home page.
      </p>

      <p className="text-center">
        <Link to="/">Return to Home Page</Link>
      </p>
    </Container>
  );
};

export default NoPage;
