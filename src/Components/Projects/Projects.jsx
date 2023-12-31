import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidTimeFive } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaReact, FaServer } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="mt-5 mx-auto">
      <div className="display-4 text-center mb-5">Recent Projects</div>
      <div className="mx-auto">
        <div className="row justify-content-around align-items-center m-0 w-100">
          <div className="col-md-6 col-11 project-img-1 my-4"></div>
          <div className="col-md-6 col-11 ">
            <div className="display-6 pt-3 animate-character">Titans Arena</div>
            <div className="d-flex my-3  gap-3">
              <div className="border-cus px-3 py-1 text-res d-flex justify-content-center align-items-center gap-2">
                <RiTeamFill />
                Team Project
              </div>
              <div className="border-cus px-3 py-1 text-res d-flex justify-content-center align-items-center gap-2">
                <BiSolidTimeFive /> Duration{" "}
                <span style={{ color: "#0E2954" }}>7 Weeks</span>
              </div>
            </div>
            <div className="d-flex justify-content-start gap-3 mt-2">
              <Link
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
                to="https://titans-arena.web.app/"
              >
                <TbWorldWww /> Live Site
              </Link>
              <Link
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
                to="https://github.com/safoun10/Titans_Arena"
              >
                <FaReact /> Client Repo
              </Link>
              <Link
                to="https://github.com/safoun10/Titans_Arena_Server"
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
              >
                <FaServer /> Server Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-around align-items-center m-0 w-100">
          <div className="col-md-6 col-11 mx-auto project-img-2 my-4"></div>
          <div className="col-md-6 col-11 mx-auto">
            <div className="display-6 pt-3 animate-character">PhotoCraft</div>
            <div className="d-flex my-3  gap-3">
              <div className="border-cus px-3 py-1 text-res d-flex justify-content-center align-items-center gap-2">
                <MdOutlineEmojiPeople />
                Solo Project
              </div>
              <div className="border-cus px-3 py-1 text-res d-flex justify-content-center align-items-center gap-2">
                <BiSolidTimeFive /> Duration{" "}
                <span style={{ color: "#0E2954" }}>1 Weeks</span>
              </div>
            </div>
            <div className="d-flex justify-content-start gap-3 mt-2">
              <Link
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
                to="https://photo-craft-rahi.web.app/"
              >
                <TbWorldWww /> Live Site
              </Link>
              <Link
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
                to="https://github.com/numanrahi/photo-craft-client"
              >
                <FaReact /> Client Repo
              </Link>
              <Link
                to="https://github.com/numanrahi/photo-craft-server"
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
              >
                <FaServer /> Server Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-around align-items-center m-0 w-100">
          <div className="col-md-6 col-11 mx-auto project-img-3 my-4"></div>
          <div className="col-md-6 col-11 mx-auto">
            <div className="display-6 pt-3 animate-character">ToyVerse</div>
            <div className="d-flex justify-content-start gap-3 mt-2">
              <div className="border-cus px-3 py-1 d-flex justify-content-center align-items-center gap-2">
                <MdOutlineEmojiPeople />
                Solo Project
              </div>
              <div className="border-cus px-3 py-1 d-flex justify-content-center align-items-center gap-2">
                <BiSolidTimeFive /> Duration{" "}
                <span style={{ color: "#0E2954" }}>1 Weeks</span>
              </div>
            </div>
            <div className="d-flex justify-content-start gap-3 mt-2">
              <Link
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
                to="https://toyverse-rahi.web.app/main"
              >
                <TbWorldWww /> Live Site
              </Link>
              <Link
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
                to="https://github.com/numanrahi/toy-verse-client"
              >
                <FaReact /> Client Repo
              </Link>
              <Link
                to="https://github.com/numanrahi/toy-verse-server"
                className="text-decoration-none btn btn-cus link-res text-white text-cus d-flex justify-content-center align-items-center gap-2"
              >
                <FaServer /> Server Repo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
