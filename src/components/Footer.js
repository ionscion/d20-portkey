import React from "react";
import ghubIcon from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";
import stackOverflow from "../images/stack-overflow.svg";

function Footer() {
  return (
    <div className="fixed left-0 bottom-0 w-full bg-gray-100 p-4 text-center shadow-lg">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/ionscion" target="_blank" rel="noreferrer">
          <img src={ghubIcon} alt="GitHub" className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/ben-sboto-4b0040276"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="LikedIn" className="w-6 h-6" />
        </a>
        <a
          href="https://stackoverflow.com/users/21884108/ionscion"
          target="_blank"
          rel="noreferrer"
        >
          <img src={stackOverflow} alt="StackOverflow" className="w-6 h-6" />
        </a>
      </div>
      <h6 className="text-gray-500">&copy; 2023 ionscion</h6>
    </div>
  );
}

export default Footer;
