import React from "react";
import ionscion from "../images/ionscion.png";

function About() {
  return (
    <div className="flex">
      <h3>About Me</h3>
      <img
        src={ionscion}
        alt="ionscion"
        className="w-32 h-32 object-contain ml-4"
      />
      <p className="ml-4">
        World renowned bread-maker extraordinaire 😝, dipping his toes into the
        digital world. This site is currently under construction, please pardon
        any loud noises while we work through this together. Please click on the
        images below to preview some of my work! 🔥{" "}
      </p>
    </div>
  );
}

export default About;
