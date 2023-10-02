import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div>
      <div className="display-4 text-center mb-5">
        Skills <span className="text-primary">&</span> Tools
      </div>
      <div className="d-flex skill">
        <div className="container px-5">
          <div className="fs-4 py-4">Skills</div>
          <hr className="border-t-2 border-gray-700 pb-2" />
          <div
            data-aos="fade-up"
            className="row row-cols-2 row-cols-md-4 row-cols-lg-6 gap-2 gap-md-4 pb-6"
          >
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              HTML
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              CSS
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              Bootstrap
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              TailwindCSS
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              DaisyUI
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              JavaScript
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              ReactJS
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              NodeJS
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              ExpressJS
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              MongoDB
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              Firebase
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              Redux
            </div>
            <div className="col-5 col-md-3 col-lg-2 border rounded text-center p-2 bg-cus text-white">
              Axios
            </div>
          </div>
        </div>
        <div className="container px-3">
          <div className="fs-4 py-4">Tools I use every day</div>
          <hr className="border-t-2 border-gray-700 pb-2" />
          <div
            data-aos="fade-up"
            className="row row-cols-3 row-cols-md-5 gap-2 gap-md-4 pb-6 align-items-center"
          >
            <div className="col-3 col-md-3 col-lg-2 text-center p-2">
              <img
                height="50px"
                width="50px"
                src="https://i.ibb.co/X52j3XW/vs2-3.png"
                alt=""
              />
            </div>
            <div className="col-3 col-md-3 col-lg-2 text-center p-2">
              <img
                height="80px"
                width="80px"
                src="https://i.ibb.co/xDC1dYb/git-removebg.png"
                alt=""
              />
            </div>
            <div className="col-3 col-md-3 col-lg-2 text-center p-2">
              <img
                height="80px"
                width="80px"
                src="https://i.ibb.co/TBjNd0T/figma2.png"
                alt=""
              />
            </div>
            <div className="col-3 col-md-3 col-lg-2 text-center p-2">
              <img
                height="70px"
                width="70px"
                src="https://i.ibb.co/dkLCQgP/firebase-1.png"
                alt=""
              />
            </div>
            <div className="col-3 col-md-3 col-lg-2 text-center p-2">
              <img
                height="80px"
                width="80px"
                src="https://i.ibb.co/CzNdVMN/mongodb.png"
                alt=""
              />
            </div>
            <div className="col-3 col-md-3 col-lg-2 text-center p-2">
              <img
                height="70px"
                width="70px"
                src="https://i.ibb.co/FJR2VDR/jira.png"
                alt=""
              />
            </div>
            <div className="col-3 col-md-3 col-lg-2 text-center p-2">
              <img
                height="70px"
                width="70px"
                src="https://i.ibb.co/DbzXCcB/vercel-1.png"
                alt=""
              />
            </div>
            <div className="col-3 col-md-3 col-lg-2 text-center p-2">
              <img
                height="80px"
                width="80px"
                src="https://i.ibb.co/JqtF6z8/netlify-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="fs-4 pt-5 px-5">Freelance Clients</div>

        <div className="px-5">
          <hr className="border-t-2 border-gray-700" />
        </div>
        <div className="px-5 fs-5">Loading...</div>
      </div>
    </div>
  );
};

export default Skills;
