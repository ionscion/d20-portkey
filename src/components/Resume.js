import React from "react";

function Resume() {
  return (
    <div className="bg-white rounded-md shadow-md p-6 mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Resume</h3>
      <div className="flex justify-center">
          <a href="/pdf/resume.pdf" className="hover:text-blue-600" download>
            Download Resume
          </a>
      </div>
    </div>
  );
}

export default Resume;
