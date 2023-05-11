import React from "react";
import ionscion from "../images/ionscion.png";

function About() {
  return (
    <div className="bg-white rounded-md shadow-md p-6 mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">About Me</h3>
      <div className="flex flex-col items-center">
        <img
          src={ionscion}
          alt="ionscion"
          className="w-32 h-32 object-contain mb-4"
        />
        <p className="text-center text-gray-600">
          World renowned bread-maker extraordinaire 😝, dipping his toes into
          the digital world. This site is currently under construction, please
          pardon any loud noises while we work through this together. Please
          click on the images below to preview some of my work! 🔥{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
