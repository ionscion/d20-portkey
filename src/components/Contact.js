import React from "react";
import { useState } from "react";

function Contact() {
  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-md shadow-md p-6 mt-12 w-full max-w-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Contact Me
        </h3>
        <form className="form" onSubmit={handleSubmitForm}>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              className="form-input w-full mt-1 rounded-md shadow-sm"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
              className="form-input w-full mt-1 rounded-md shadow-sm"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="text-gray-600">
              Subject
            </label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              className="form-textarea mt-1 block w-full rounded-md shadow-sm"
              style={{ height: "200px" }}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center items-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
