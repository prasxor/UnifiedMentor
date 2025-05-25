// import React from "react";
// import MainTitle from "../../Atoms/MainTitle/MainTitle";
// import "./Homepage4.css";
// import ProjectCard from "../../Atoms/ProjectsCards/ProjectCard";
// import ProjectData from "../../Data/ProjectsData.json";

// const HomePage4 = () => {
//   return (
//     <div className="HomePage4Container container">
//       <MainTitle
//         content={"Projects"}
//         para={"These are my Projects, Take a look"}
//       />
//       <div className="HomePage4Cards">
//         {ProjectData.map((project, index) => (
//           <ProjectCard
//             key={index}
//             Img={project.ProjectImg}
//             title={project.ProjectName}
//             para={project.Description}
//             Link={project.LiveUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage4;


import React from "react";
import MainTitle from "../../Atoms/MainTitle/MainTitle";
import "./Homepage4.css";
import ProjectCard from "../../Atoms/ProjectsCards/ProjectCard";
import ProjectData from "../../Data/ProjectsData.json";

const HomePage4 = () => {
  return (
    <div className="HomePage4Container container">
      <MainTitle
        content={"Projects"}
        para={"These are my Projects, Take a look"}
      />
      <div className="HomePage4Cards">
        {ProjectData.slice(0, 3).map((project, index) => (
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
  );
};

export default HomePage4;
