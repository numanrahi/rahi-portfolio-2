import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook, BsLinkedin, BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="pt-5">
      <section className="footer-card mx-2 py-5 text-white">
        <div className="display-4 py-4 text-center">Let’s Work Together!</div>
        <div style={{ fontSize: "1rem" }} className="text-center">
          Connect with Me: Reach Out for Collaboration, Questions, or Simply a
          Friendly Conversation <br /> - I'm Here to Hear from You
        </div>
        <div className="text-center fs-2">
          <Link
            to="https://web.facebook.com/RahiX2020"
            className="text-decoration-none px-5 text-white"
          >
            <BsFacebook />{" "}
          </Link>
          <Link
            to="https://www.linkedin.com/in/abdullah-al-numan-rahi"
            className="text-decoration-none px-5 text-white"
          >
            <BsLinkedin />
          </Link>
          <Link className="text-decoration-none px-5 text-white">
            <IoLogoWhatsapp />
          </Link>
          <Link className="text-decoration-none px-5 text-white">
            <BsDiscord />
          </Link>
        </div>
      </section>

      <hr className="border-t-2 border-gray-700  mx-2" />
      <div className="px-3 fw-bold">
        <div>Version</div>
        <div style={{fontSize:"0.75rem"}}>October, 2023 © First Edition </div>
      </div>
    </div>
  );
};

export default Footer;
