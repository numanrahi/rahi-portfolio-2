import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

import { BsCodeSlash } from "react-icons/bs";
import "./Services.css";

const Services = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div data-aos="fade-down" className="display-4 text-center mb-5">
        Expertise services
      </div>
      {/* <div className="row justify-content-center gap-5">
        <div className="border my-sm-2 col-11 col-md-3 rounded p-4 service-hover">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </div>
          <div className="fs-4 py-4">MERN Development</div>
          <div style={{ textAlign: "justify" }}>
            I have nearly a year of experience in creating awesome websites. I'm
            really good at using the MERN stack, which means I can build modern
            and functional sites. Whether you want a personal blog, an online
            store, or a professional website, I can make it happen
          </div>
        </div>
        <div className="border my-sm-2 col-11 col-md-3 rounded p-4 service-hover">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <div className="fs-4 py-4">Website Customization</div>
          <div style={{ textAlign: "justify" }}>
            I specialize in creating responsive website customizations that
            seamlessly adapt to different screen sizes, providing the best user
            experience on any device.
          </div>
        </div>
        <div className="border my-sm-2 col-11 col-md-3 rounded p-4 service-hover">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
          </div>
          <div className="fs-4 py-4">Website Solution</div>
          <div style={{ textAlign: "justify" }}>
            Elevate your online presence with tailored web solutions. From
            captivating design to seamless functionality, e-commerce expertise,
            SEO optimization, and ongoing support, I provide comprehensive
            services. Let's turn your digital vision into a reality. Contact me
            today!
          </div>
        </div>
      </div> */}
      <div className="px-3">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            borderRadius: "20px",
          }}
          speed={600}
          parallax={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image": "url(https://i.ibb.co/GTMkgPF/347317299795.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title py-2" data-swiper-parallax="-300">
              MERN Development
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                I have nearly a year of experience in creating awesome websites.
                I'm really good at using the MERN stack, which means I can build
                modern and functional sites. Whether you want a personal blog,
                an online store, or a professional website, I can make it happen
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title py-2" data-swiper-parallax="-300">
              Website Customization
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                I specialize in creating responsive website customizations that
                seamlessly adapt to different screen sizes, providing the best
                user experience on any device.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Website Solution
            </div>
            <div className="text " data-swiper-parallax="-100">
              <p>
                Elevate your online presence with tailored web solutions. From
                captivating design to seamless functionality, e-commerce
                expertise, SEO optimization, and ongoing support, I provide
                comprehensive services. Let's turn your digital vision into a
                reality. Contact me today!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
