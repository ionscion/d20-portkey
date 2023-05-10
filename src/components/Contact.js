import React from "react";
import { useState } from "react";

function Contact() {
  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  const [data, setData] = useState(
    {
        name: "",
        email: "",
        subject: "",
    }
  );

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." onChange={handleInputChange}/>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.." onChange={handleInputChange}/>
        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
          onChange={handleInputChange}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
