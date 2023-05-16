import React from "react";
import { Link, useLocation} from "react-router-dom";

function Navigation() {
  let location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Portfolio", path: "/projects" },
    { label: "Contact Me", path: "/contact" },
    { label: "Resume", path: "/resume" },
  ];
  const renderedLinks = links.map((link) => {
   
    const isActive = location.pathname === link.path;
    const activeClass = isActive ? "text-blue-500" : "text-gray-500";
    return (
      <li key={link.label}>
        <Link to={link.path} className={`mb-3 hover:text-blue-600 ${activeClass} text-sm`}>
          {link.label}
        </Link>
      </li>
    );
  });
  return (
    <div>
      <ul className="flex justify-center space-x-4 text-sm">{renderedLinks}</ul>
    </div>
  );
}

export default Navigation;
