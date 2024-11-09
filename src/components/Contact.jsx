import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="my-10">
      <h3 className="text-2xl font-semibold mb-4">Contact</h3>
      <p className="text-gray-700">
        {" "}
        <FontAwesomeIcon icon={faEnvelope} /> Email: <span className="text-gray-900 font-medium">zahraassar34@gmail.com</span>
      </p>
      <p className="text-gray-700">
        {" "}
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/zahra-enayati-038236266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Click here
        </a>
      </p>
      <p className="text-gray-700">
        {" "}
        <FontAwesomeIcon icon={faGithub} /> GitHub:{" "}
        <a
          href="https://github.com/zahra-200"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Click here
        </a>
      </p>
    </section>
  );
};

export default Contact;
