import "./Skills.css";
import SkillItem from "./SkillItem";
function Skills() {
  const skills_list = [
    {
      title: "Web Developement",
      pour: 70,
    },
    {
      title: "Machine learning",
      pour: 75,
    },
    {
      title: "Deep Learning",
      pour: 75,
    },
    {
      title: "Programming",
      pour: 85,
    },
  ];
  return (
    <div className="skills-container">
      <div className="skills-title">Skills</div>
      <div className="skills-items">
        {skills_list.map((item) => (
          <SkillItem data={item} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
