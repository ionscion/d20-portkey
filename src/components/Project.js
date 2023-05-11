import React from "react";

export default function Project() {
  const projects = [
    {
      name: "Concert Finder",
      description: "A web app that allows users to search for concerts by artist, venue, or city.",
      link: "https://ionscion.github.io/miniature-garbanzo",
    },
    {
        name: "Weather Dashboard",
        description: "A web app that allows users to search for weather by city.",
        link: "https://ionscion.github.io/weather-dashboard",
    },
  ];

  const renderedProjects = projects.map((project) => {
    return (
      <div className="mb-6 p-6 bg-white rounded-md shadow-md">
        <h4 className="text-lg font-medium text-gray-800 mb-2">
          {project.name}
        </h4>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          {project.link}
        </a>
      </div>
    );
  });

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Projects</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {renderedProjects}
      </div>
    </div>
  );
}
