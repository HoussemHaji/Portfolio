import { Card } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "./SkillItem.css";
function SkillItem(props) {
  const percentage = props.data.pour;
  return (
    <div>
      <Card
        style={{
          backgroundColor: "transparent",
          border: "0px",
          padding: "2rem",
        }}
      >
        <CircularProgressbar
          className="pourcentage"
          value={percentage}
          styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size

            // Colors
            pathColor: "#8B008B",
            textColor: "white",
            trailColor: "white",
            backgroundColor: "#3e98c7",
          })}
        />
        <div style={{ color: "white", marginTop: "2rem" }}>
          {props.data.title}
        </div>
      </Card>
    </div>
  );
}

export default SkillItem;
