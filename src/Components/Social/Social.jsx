import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import "./Social.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Social = () => {
  return (
    <div className="row py-5 w-100 mx-auto px-4">
      <div className="display-4 text-center mb-5">
        Find Me On <span className="text-primary">Social</span> Media
      </div>
      <div
        data-aos="fade-right"
        className="col-11 mx-auto col-md-3 my-sm-2 my-md-2 border hover-social rounded p-2 d-flex flex-column align-items-center"
      >
        <Link
          to="https://github.com/numanrahi"
          className="text-decoration-none fs-3 text-dark fw-bold"
        >
          <FaGithub /> GitHub
        </Link>
      </div>
      <div
        data-aos="fade-up"
        className="col-11 mx-auto col-md-3 my-sm-2 my-md-2 border hover-social rounded p-2 d-flex flex-column align-items-center"
      >
        <Link
          to="https://www.linkedin.com/in/abdullah-al-numan-rahi"
          className="text-decoration-none fs-3 text-dark fw-bold d-flex align-items-center"
        >
          Linked
          <FaLinkedin />
        </Link>
      </div>
      <div
        data-aos="fade-left"
        className="col-11 mx-auto col-md-3 my-sm-2 my-md-2 border hover-social rounded p-2 d-flex flex-column align-items-center"
      >
        <Link
          to="https://web.facebook.com/RahiX2020"
          className="text-decoration-none fs-3 text-dark fw-bold"
        >
          <FaSquareFacebook /> Facebook
        </Link>
      </div>
    </div>
  );
};

export default Social;
