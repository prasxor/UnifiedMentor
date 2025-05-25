import React from "react";
import "./Projects.css";
import MainTitle from "../../components/Atoms/MainTitle/MainTitle";
import ProjectCard from "../../components/Atoms/ProjectsCards/ProjectCard";
import ProjectData from "../../components/Data/ProjectsData.json";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Prasxor Portfolio - Expert Web Developer for Hire</title>
        <meta
          name="description"
          content="I am a passionate frontend developer specializing in React, JavaScript, and UI/UX design. Check out my projects!"
        />
        <meta
          name="keywords"
          content="Prasxor, Prashant kumar sinha, web developer portfolio, hire react developer, javascript developer, UI/UX design, freelance web developer, website, ecommerce website,React Developer, Frontend Developer, JavaScript, Portfolio, Web Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Prashant kumar sinha (Prasxor)" />
        <meta
          property="og:title"
          content="Prasxor Portfolio - Web Development Excellence"
        />
        <meta
          property="og:description"
          content="Explore Prashant's (Prasxor) portfolio of cutting-edge web projects. Hire a skilled developer for your next big idea!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prasxor.me" />
        <meta
          property="og:image"
          content="https://prasxor.me/images/profile-preview.jpg"
        />
      </Helmet>
      <div className="container projectMainContainer">
        <MainTitle
          content={"Projects"}
          para={
            "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source."
          }
        />
        <div className="ProjectsArea">
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              Img={project.ProjectImg}
              title={project.ProjectName}
              para={project.Description}
              Link={project.LiveUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
