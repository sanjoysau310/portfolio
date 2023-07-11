import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [userQueryDetails, setUserQueryDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setUserQueryDetails({
      ...userQueryDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userQueryDetails);
    axios
      .post(
        "https://sheet.best/api/sheets/f2b570ef-05fc-4d03-8dc4-e3a2cba5363d",
        userQueryDetails
      )
      .then((res) => {
        console.log(res);
        let interval = null;

        setUserQueryDetails({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        if (res.data != null) {
          setStatus(true);
          interval = setInterval(() => {
            setStatus(false);
          }, 5000);
        }

        //Clearing the interval
        return () => clearInterval(interval);
      });
  };

  return (
    <form className="php-email-form mt-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          onChange={handleChange}
          id="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          onChange={handleChange}
          rows={5}
          placeholder="Message"
          required
          defaultValue={""}
        />
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message" />
        {status && (
          <i className="text-success">
            Your message has been sent successfully. Thank you!
          </i>
        )}
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
