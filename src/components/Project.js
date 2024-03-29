import React from "react";
import concert from "../images/concert.jpg";
import code from "../images/code.jpg";
import computerImage from "../images/computer.jpg";
import generalScript from "../images/generalscript.jpg";
import textEdit from "../images/textEdit.jpg";
import weather from "../images/weather.jpg";
// import { useState, useEffect } from "react";
// const apiKey = process.env.UNSPLASH;

export default function Project() {
  const projects = [
    {
      name: "Concert Finder",
      description:
        "A web app to search for concerts by artist, venue, or city.",
      link: "https://ionscion.github.io/miniature-garbanzo",
      ghub: "https://github.com/ionscion/miniature-garbanzo",
      image: concert,
    },
    {
      name: "PWA Text Editor",
      description:
        "A web app that allows users to save notes in a text editor.",
      link: "https://ancient-earth-71719.herokuapp.com/",
      ghub: "https://github.com/ionscion/enneadecagonal-psychic-telegram",
      image: textEdit,
    },
    {
      name: "Legacy Architects",
      description: "A web app for managing estate planning clients.",
      link: "https://evening-fortress-77171.herokuapp.com/",
      ghub: "https://github.com/ionscion/a-la-code-2",
      image: generalScript,
    },
    {
      name: "Work Day Scheduler",
      description: "A web app for blocking time on a daily calendar.",
      link: "https://ionscion.github.io/pentagonal-calendar-5/",
      ghub: "https://github.com/ionscion/pentagonal-calendar-5",
      image: computerImage,
    },
    {
      name: "Weather Tracker",
      description:
        "A web app for seeing current and future weather by location.",
      link: "https://ionscion.github.io/hexagonal-meteorology/",
      ghub: "https://github.com/ionscion/hexagonal-meteorology",
      image: weather,
    },
    {
      name: "Password Generator",
      description: "A web app to generate strong and secure passwords.",
      link: "https://ionscion.github.io/didactic-countersign-gen/",
      ghub: "https://github.com/ionscion/didactic-countersign-gen",
      image: code,
    },
  ];

  // const [projectImages, setProjectImages] = useState([]);

  // useEffect(() => {
  //   fetchProjectImages();
  // });

  // const fetchRandomImageFromUnsplash = async () => {
  //   const response = await fetch(
  //     `https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=technology&orientation=landscape&fit=crop&w=500&h=300`
  //   );
  //   const data = await response.json();
  //   return data.urls.regular;
  // };

  // const fetchProjectImages = async () => {
  //   const imagePromises = projects.map((project) =>
  //     fetchRandomImageFromUnsplash()
  //   );
  //   const images = await Promise.all(imagePromises);
  //   setProjectImages(images);
  // };

  const renderedProjects = projects.map((project, index) => {
    return (
      <div
        key={project.description}
        className="mb-6 p-6 bg-white rounded-md shadow-md"
      >
        {/* <img src={projectImages[index]} alt="Project" className="mb-4" /> */}
        <img src={project.image} alt={project.name} className="w-full h-60 object-cover"/>
        <h4 className="text-lg font-medium text-gray-800 mb-2">
          {project.name}
        </h4>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-center space-x-4">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Deployed App
          </a>

          <a
            href={project.ghub}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Github
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Portfolio
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ maxHeight: "calc(100vh - 150px)", overflowY: "auto" }}>
        {renderedProjects}
      </div>
    </div>
  );
}
