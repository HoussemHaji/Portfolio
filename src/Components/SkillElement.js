import { Card } from "react-bootstrap";

export const SkillElement = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
