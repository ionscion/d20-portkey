import React from 'react'
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <div>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
            <Link to="/resume">Resume</Link>
        </ul>
    </div>
  )
}

export default Navigation