import React from "react";
import { useState } from "react";
import { validateEmail } from "../utils/helper.js";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("Email is invalid");
      return;
    }
    console.log(`form was submitted`);
    //placeholder for API call
    setEmail("");
    setName("");
    setSubject("");
  };
 

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue) 
    } else {
      setSubject(inputValue);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-md shadow-md p-6 mt-12 w-full max-w-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Contact Me
        </h3>
        <form className="form" >
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600">
              Name
            </label>
            <input
              value={name}
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              className="form-input w-full mt-1 rounded-md shadow-sm"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              value={email}
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              className="form-input w-full mt-1 rounded-md shadow-sm"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="text-gray-600">
              Subject
            </label>
            <textarea
              value={subject}
              id="subject"
              name="subject"
              placeholder="Write something.."
              className="form-textarea mt-1 block w-full rounded-md shadow-sm"
              style={{ height: "200px" }}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button
            onClick={handleSubmitForm}
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
