import { Card, Button } from "react-bootstrap";

export const ProjectItem = (props) => {
  return (
    <div className="project-item">
      <Card style={{ backgroundColor: "#151515  " }}>
        <Card.Img
          style={{
            borderRadius: "20px",
            padding: "10px",
          }}
          variant="top"
          src={props.pict}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <a
            href="https://github.com/HoussemHaji"
            style={{
              textDecoration: "none",
              textDecorationColor: "transparent",
            }}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline-secondary"> GitHub</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};
