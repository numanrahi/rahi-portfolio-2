import React from "react";
import CountUp from "react-countup";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div>
      <div className="display-4 text-center mb-5">
        Why you choose<span className="text-primary"> ME</span> 
      </div>
      <div className="row py-5 w-100 mx-auto">
        <div className="col-11 mx-auto col-md-6 display-6 p-2 d-flex flex-column align-items-center">
          <div className="border-time">
            <div>
              <CountUp start={0} duration={5} end={30} enableScrollSpy="true" />
              +
            </div>
            <div>Projects</div>
          </div>
        </div>
        <div className="col-11 mx-auto col-md-6 display-6 p-2 d-flex flex-column align-items-center">
          <div className="border-time">
            <div>
              <CountUp start={0} duration={5} end={12} enableScrollSpy="true" />
              +
            </div>
            <div>Assignments</div>
          </div>
        </div>
        <div
          data-aos="fade-up-right"
          className="col-11 mx-auto col-md-6 display-6 p-2 d-flex flex-column align-items-center"
        >
          <div className="border-time">
            <div>
              <CountUp start={0} duration={5} end={30} enableScrollSpy="true" />
              +
            </div>
            <div>Repositories</div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          className="col-11 mx-auto col-md-6 display-6 p-2 d-flex flex-column align-items-center"
        >
          <div className="border-time">
            <div>
              <CountUp
                start={0}
                duration={5}
                end={475}
                enableScrollSpy="true"
              />
              +
            </div>
            <div>Commits</div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="col-11 mx-auto col-md-12 display-6 py-2 d-flex flex-column align-items-center"
        >
          <div className="border-time py-md-4 py-4 px-3">
            Experienced in Team Work
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
