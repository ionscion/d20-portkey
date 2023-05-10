import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import ErrorPage from './errorPage';
import Project from './components/Project';
import About from './components/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <h1>Contact Me</h1>,
      },
      {
        path: "resume",
        element: <h1>Resume</h1>,
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


