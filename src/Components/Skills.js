import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data1 = [
    { title: "One", value: 80, color: "#6a36d2" },
    { title: "two", value: 20, color: "#151515" },
  ];
  const data2 = [
    { title: "One", value: 70, color: "#6a36d2" },
    { title: "two", value: 20, color: "#151515" },
  ];

  const data3 = [
    { title: "One", value: 85, color: "#6a36d2" },
    { title: "two", value: 20, color: "#151515" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I possess a diverse set of skills that enable me to excel in
                various creative <br /> and technical aspects. Here's a brief
                overview of my capabilities
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div className="pie">
                    <PieChart
                      data={data1}
                      lineWidth={30}
                      rounded
                      label={({ dataEntry }) =>
                        dataEntry.value === 80 ? `${dataEntry.value}%` : ""
                      }
                      labelPosition={0}
                      labelStyle={{ fill: "white" }}
                    />
                  </div>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <div className="pie">
                    <PieChart
                      data={data1}
                      lineWidth={30}
                      rounded
                      label={({ dataEntry }) =>
                        dataEntry.value === 80 ? `${dataEntry.value}%` : ""
                      }
                      labelPosition={0}
                      labelStyle={{ fill: "white" }}
                    />
                  </div>
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <div className="pie">
                    <PieChart
                      data={data3}
                      lineWidth={30}
                      rounded
                      label={({ dataEntry }) =>
                        dataEntry.value === 85 ? `${dataEntry.value}%` : ""
                      }
                      labelPosition={0}
                      labelStyle={{ fill: "white" }}
                    />
                  </div>
                  <h5>Deep Learning</h5>
                </div>
                <div className="item">
                  <div className="pie">
                    <PieChart
                      data={data2}
                      lineWidth={30}
                      rounded
                      label={({ dataEntry }) =>
                        dataEntry.value === 70 ? `${dataEntry.value}%` : ""
                      }
                      labelPosition={0}
                      labelStyle={{ fill: "white" }}
                    />
                  </div>
                  <h5>Networks Engineering</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
