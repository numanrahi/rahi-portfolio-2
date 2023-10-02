import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Banner.css";

const Banner = () => {
  const handleDownload = () => {
    const fileUrl = "Abdullah Al Numan Rahi.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank";
    link.download = "Abdullah Al Numan Rahi.pdf";

    link.click();
  };

  return (
    <div>
      <div className="p-5 text-center">
        <img
          src="https://i.ibb.co/z5nQQHJ/My-project.jpg"
          height="100px"
          width="100px"
          style={{ borderRadius: "50%" }}
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="text-secondary text-dark" style={{ fontSize: "2rem" }}>
          Abdullah Al Numan Rahi
        </p>
        <TypeAnimation
          className="display-2 fs-sm-5"
          sequence={[
            "A frontend Developer",
            500,
            "A full stack Developer",
            500,
            "A ReactJs Developer",
            500,
            "A frontend Developer",
            500,
            "A full stack Developer",
            500,
            "A ReactJs Developer",
            500,
          ]}
          repeat={Infinity}
        />
      </div>
      <div className="mx-auto text-center p-5">
        <section
          onClick={handleDownload}
          className="btn btn-cus w-25 text-white"
        >
          Resume
        </section>
      </div>
    </div>
  );
};

export default Banner;
