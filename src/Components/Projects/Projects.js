import "./Projects.css";
import ProjectItem from "./ProjectItem";
function Projects() {
  const projects_list = [
    {
      title: "Personal Portfolio",
      text: "This is my personal portfolio you can verify the source code on github",
      photo: "portfolio.png",
    },
    {
      title: "SpaceX Machine learning Capstone",
      text: "My project involves analyzing data and creating machine learning models to gain insights into SpaceX",
      photo: "portfolio.png",
    },
    {
      title: "SpaceX Machine learning Capstone",
      text: "My project involves analyzing data and creating machine learning models to gain insights into SpaceX",
      photo: "portfolio.png",
    },
  ];
  return (
    <div>
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        {projects_list.map((item) => (
          <ProjectItem data={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
