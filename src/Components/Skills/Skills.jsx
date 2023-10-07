import React from "react";
import "./Skills.css";
import {
  TbBrandVscode,
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandVercel,
} from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";
import { LiaJira } from "react-icons/lia";
const Skills = () => {
  return (
    <div>
      <div className="display-4 text-center mb-5">
        Skills <span className="text-primary">&</span> Tools
      </div>
      <div className="d-flex skill">
        <div className="container px-5">
          <div className="fs-4 py-4">Skills</div>
          <hr className="py-2 border-gray-700 pb-2" />
          <div
            data-aos="fade-up"
            className="d-flex flex-wrap gap-2 gap-md-4 pb-6"
          >
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              HTML
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              CSS
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              Bootstrap
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              TailwindCSS
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              DaisyUI
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              JavaScript
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              ReactJS
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              NodeJS
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              ExpressJS
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              MongoDB
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              Firebase
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              Redux
            </div>
            <div className="border rounded text-center py-2 px-4 bg-cus text-white">
              Axios
            </div>
          </div>
        </div>
        <div className="container px-5">
          <div className="fs-4 py-4">Tools I use every day</div>
          <hr className="py-2 border-gray-700 pb-2" />
          <div
            data-aos="fade-up"
            className="d-flex flex-wrap gap-2 gap-md-4 pb-6"
          >
            <div className=" text-center py-2 px-4">
              <TbBrandVscode style={{ height: "60px", width: "60px" }} />
            </div>
            <div className=" text-center py-2 px-4">
              <BsGithub style={{ height: "60px", width: "60px" }} />
            </div>
            <div className=" text-center py-2 px-4">
              <FiFigma style={{ height: "60px", width: "60px" }} />
            </div>
            <div className=" text-center py-2 px-4">
              <TbBrandFirebase style={{ height: "60px", width: "60px" }} />
            </div>
            <div className=" text-center py-2 px-4">
              <TbBrandMongodb style={{ height: "60px", width: "60px" }} />
            </div>
            <div className=" text-center py-2 px-4">
              <TbBrandVercel style={{ height: "60px", width: "60px" }} />
            </div>
            <div className=" text-center py-2 px-4">
              <LiaJira style={{ height: "60px", width: "60px" }} />
            </div>
            <div className=" text-center py-2 px-4">
              <SiNetlify style={{ height: "60px", width: "60px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <hr className="py-2 border-gray-700" />
      </div>
    </div>
  );
};

export default Skills;
