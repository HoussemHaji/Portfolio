import { Card, Button } from "react-bootstrap";
function ProjectItem(props) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={require(`./images/${props.data.photo}`)}
      />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.text}</Card.Text>
        <Button variant="outline-secondary">
          <a href={props.data.link}>View in Github</a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectItem;
