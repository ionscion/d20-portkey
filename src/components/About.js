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
          Hello! I'm Ben, a software developer based in Denver, Colorado. I'm currently 
          working in the finance realm as an Operations Manager but I'm always looking
          for new opportunities to expand my skillset and grow as a developer.

          <br />
          
          Please navigate to the Portfolio tab to preview some of my work! 🔥{" "}
          
          <br />
          Additonal links to my GitHub, LinkedIn, and StackOverflow profiles can be found in the footer.
          Thanks for stopping by! 🙏
        </p>
      </div>
    </div>
  );
}

export default About;
