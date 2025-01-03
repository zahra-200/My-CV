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
          href="https://www.linkedin.com/in/zahra-assar-enayati-3b5539344?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0yTpUtrmTMy5o9za7F71aw%3D%3D"
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
