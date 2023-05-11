import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Portfolio", path: "/projects" },
    { label: "Contact Me", path: "/contact" },
    { label: "Resume", path: "/resume" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <li key={link.label}>
        <Link to={link.path} className="mb-3 blue-500 hover:text-blue-600">
          {link.label}
        </Link>
      </li>
    );
  });
  return (
    <div>
      <ul className="flex justify-center space-x-4">{renderedLinks}</ul>
    </div>
  );
}

export default Navigation;
