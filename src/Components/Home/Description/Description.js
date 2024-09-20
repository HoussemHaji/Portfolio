import "./Description.css";
import bannerImg from "../../../assets/banner-img.svg";
import { Col, Container, Row, Button } from "react-bootstrap";
import { MovingComponent } from "react-moving-text";

function Description() {
  return (
    <div className="description">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={8}>
            <div className="desc">
              <MovingComponent
                type="typewriter"
                dataText={[
                  "........",
                  "Hi! I am Houssem ",

                  "ICT Engineering Student",
                ]}
              />
            </div>
          </Col>
          <Col>
            <img src={bannerImg} alt="imageHere" class="animate-bounce " />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Description;
