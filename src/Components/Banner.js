import { Col, Container, Row, Image } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header.png";
import { useState, useEffect } from "react";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Engineering Student", "Web Developer", "AI Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {" "}
              {"Hi! I'm Houssem"}{" "}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Engineering Student", "Web Developer", "AI Enthusiast" ]'
              >
                {" "}
              </span>{" "}
              <br />
              <span className="wrap">{text}</span>
            </h1>

            <p>
              As an aspiring ICT engineering student, I am enthusiastic about
              both the fields of Machine Learning and Development. My passion
              for using data-driven solutions to tackle real-world challenges
              has inspired me to delve deep into the concepts and techniques
              that underpin these cutting-edge technologies.
            </p>
            <button onClick={() => console.log("let's connect")}>
              Let's connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={7} md={4}>
            <img
              className="animate__animated animate__zoomIn"
              src={HeaderImg}
              alt="MyImage"
              style={{ width: "80%", height: "auto", borderRadius: "50%" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
