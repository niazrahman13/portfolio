import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/BookMart.png";
import project2 from "../assets/images/cracker.png";
import project3 from "../assets/images/EDULearn.png";
import project4 from "../assets/images/Wedding.png";
import project_person from "../assets/images/Projects.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Book Mart",
      github_link: "https://github.com/niazrahman13/Book-Mart-Client",
      live_link: "https://book-mart-awesome.web.app/",
    },
    {
      img: project2,
      name: "Quiz Cracker",
      github_link: "https://github.com/niazrahman13/Quiz-Cracker",
      live_link: "https://quiz-cracker.netlify.app/",
    },
    {
      img: project3,
      name: "Edu Learn",
      github_link: "https://github.com/niazrahman13/Educational-Website-Client",
      live_link: "edu-learn-hero.web.app",
    },
    {
      img: project4,
      name: "Wedding Photography",
      github_link:
        "https://github.com/niazrahman13/Wedding-Photography-Client",
      live_link: "https://wedding-photography-a3144.web.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={16}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <button>
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Github
                      </a>
                    </button>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
