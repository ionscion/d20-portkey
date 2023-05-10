import React from "react";
import ionscion from "../images/ionscion.png";

function About() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h3 className="mb-4 mt-2">About Me</h3>
      <img
        src={ionscion}
        alt="ionscion"
        className="w-32 h-32 object-contain mb-4"
      />
      <p className="text-center">
        World renowned bread-maker extraordinaire 😝, dipping his toes into the
        digital world. This site is currently under construction, please pardon
        any loud noises while we work through this together. Please click on the
        images below to preview some of my work! 🔥{" "}
      </p>
    </div>
  );
}

export default About;
