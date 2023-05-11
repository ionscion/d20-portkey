import React from "react";

export default function Project() {
  const projects = [
    {
      name: "Concert Finder",
      description:
        "A web app that allows users to search for concerts by artist, venue, or city.",
      link: "https://ionscion.github.io/miniature-garbanzo",
      ghub: "https://github.com/ionscion/miniature-garbanzo",
    },
    {
      name: "PWA Text Editor",
      description:
        "A web app that allows users to save notes in a text editor.",
      link: "https://ancient-earth-71719.herokuapp.com/",
      ghub: "https://github.com/ionscion/enneadecagonal-psychic-telegram",
    },
    {
      name: "Legacy Architects",
      description: "A web app for managing estate planning clients.",
      link: "https://evening-fortress-77171.herokuapp.com/",
      ghub: "https://github.com/ionscion/a-la-code-2",
    },
    {
      name: "Work Day Scheduler",
      description: "A web app for blocking time on a daily calendar.",
      link: "https://ionscion.github.io/pentagonal-calendar-5/",
      ghub: "https://github.com/ionscion/pentagonal-calendar-5",
    },
    {
      name: "Weather Tracker",
      description: "A web app for seeing current and future weather by location.",
      link: "https://ionscion.github.io/hexagonal-meteorology/",
      ghub: "https://github.com/ionscion/hexagonal-meteorology",
    },
    {
      name: "Password Generator",
      description: "A web app to generate strong and secure passwords.",
      link: "https://ionscion.github.io/didactic-countersign-gen/",
      ghub: "https://github.com/ionscion/didactic-countersign-gen",
    },
  ];

  const renderedProjects = projects.map((project) => {
    return (
      <div
        key={project.description}
        className="mb-6 p-6 bg-white rounded-md shadow-md"
      >
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
          Deployed App
        </a>
        <br />

        <a
          href={project.ghub}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          Link to Github
        </a>
      </div>
    );
  });

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {renderedProjects}
      </div>
    </div>
  );
}
