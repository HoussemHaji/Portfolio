import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "My Portfolio",
      description:
        "My personal portfolio website built using React.js. As a passionate ICT engineering student at INSAT and an AI enthusiast, I've combined my skills to create a dynamic portfolio that reflects my journey in the world of technology.",
      pict: require("../assets/img/project1.png"),
    },
    {
      id: 2,
      title: "Investigating-Netflix-Movies-and-Guest-Stars-in-The-Office",
      description:
        " Applying the foundational Python skills by manipulating and visualizing movie and TV data.",
      pict: require("../assets/img/project2.jpg"),
    },
    {
      id: 3,
      title: "Chatbox internship task",
      description:
        "This is my internship task of a Chatbox project which is a sophisticated chatbot designed for call centers, capable of answering questions and providing information to callers.",
      pict: require("../assets/img/project3.jpg"),
    },
    {
      id: 4,
      title: "Applied-Data-Science-Capstone-Project-SpaceX",
      description:
        "We go through what data scientists go through in real life when working with real datasets. We assume the role of a Data Scientist working for a startup intending to compete with SpaceX.",
      pict: require("../assets/img/project4.webp"),
    },
    {
      id: 5,
      title: "Topic Extraction From Video (PPP)",
      description:
        "The aim of this project is to segment and extract topics from TED Talks videos using Machine Learning and NLP techniques. The data are not labeled to train a classifier and predict categories.",
      pict: require("../assets/img/project5.webp"),
    },
    {
      id: 6,
      title: "Food Ordering App",
      description: "",
      pict: require("../assets/img/project6.png"),
    },
  ];
  return (
    <div className="projects" id="projects">
      <div className="tagline">Projects</div>
      <div className="project-section">
        {projectList.map((element) => (
          <ProjectItem
            key={element.id}
            title={element.title}
            description={element.description}
            pict={element.pict}
          ></ProjectItem>
        ))}
      </div>
    </div>
  );
};
