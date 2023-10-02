import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mt-5 mx-auto">
      <div className="display-4 text-center mb-5">Recent Projects</div>
      <div className="mx-auto">
        <div className="row justify-content-around align-items-center m-0 w-100">
          <div className="col-md-6 col-11 mx-auto project-img-1 my-4"></div>
          <div className="col-md-6 col-11 mx-auto">
            <div className="display-6 pt-3 text-center mx-auto animate-character">
              Titans Arena
            </div>
            <div className="d-flex justify-content-around my-3 fs-5">
              <div>(Team Project)</div>
              <div>
                Duration: <span style={{ color: "#0E2954" }}>7 Weeks</span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <Link
                className="text-decoration-none text-cus"
                to="https://titans-arena.web.app/"
              >
                Live Site
              </Link>
              <Link
                className="text-decoration-none text-cus"
                to="https://github.com/safoun10/Titans_Arena"
              >
                Client Repo
              </Link>
              <Link
                to="https://github.com/safoun10/Titans_Arena_Server"
                className="text-decoration-none text-cus"
              >
                Server Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-around align-items-center m-0 w-100">
          <div className="col-md-6 col-11 mx-auto project-img-2 my-4"></div>
          <div className="col-md-6 col-11 mx-auto">
            <div className="display-6 pt-3 text-center animate-character">PhotoCraft</div>
            <div className="d-flex justify-content-around my-3 fs-5">
              <div>(Solo Project)</div>
              <div>
                Duration: <span style={{ color: "#0E2954" }}>1 Weeks</span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <Link
                className="text-decoration-none text-cus"
                to="https://photo-craft-rahi.web.app/"
              >
                Live Site
              </Link>
              <Link
                className="text-decoration-none text-cus"
                to="https://github.com/numanrahi/photo-craft-client"
              >
                Client Repo
              </Link>
              <Link
                to="https://github.com/numanrahi/photo-craft-server"
                className="text-decoration-none text-cus"
              >
                Server Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-around align-items-center m-0 w-100">
          <div className="col-md-6 col-11 mx-auto project-img-3 my-4"></div>
          <div className="col-md-6 col-11 mx-auto">
            <div className="display-6 pt-3 text-center animate-character">ToyVerse</div>
            <div className="d-flex justify-content-around my-3 fs-5">
              <div>(Solo Project)</div>
              <div>
                Duration: <span style={{ color: "#0E2954" }}>1 Weeks</span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <Link
                className="text-decoration-none text-cus"
                to="https://toyverse-rahi.web.app/main"
              >
                Live Site
              </Link>
              <Link
                className="text-decoration-none text-cus"
                to="https://github.com/numanrahi/toy-verse-client"
              >
                Client Repo
              </Link>
              <Link
                to="https://github.com/numanrahi/toy-verse-server"
                className="text-decoration-none text-cus"
              >
                Server Repo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
