import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/adsprint.png";
import projImg2 from "../assets/bharosa.png";
import projImg3 from "../assets/collage.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Singaji Central (collage management)",
      description: "In our college, we are creating an online system where a student can take Admission and all the functionality of our college can be automated by the application. ",
      imgUrl: projImg3,
      url: 'https://central.ssism.org/login'
    },
    {
      title: "Bharosa Agri Tech",
      description: "A Portal where we have all our farmers, their land & crop information, can verify their basic info & land geotag info from the portal and generate the reports for their land, which will help to get the loans from Bank",
      imgUrl: projImg2,
      url: 'https://bharosa.farm/'
    },
    {
      title: "Ad-Sprint",
      description: "It offers news agencies a platform to post ads, simplifying the advertising process with a variety of types of advertising, including classifieds, obituaries, displays, as well as audited and unaudited financial reports.",
      imgUrl: projImg1,
      url: 'https://wfs.adsprint.in'
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>Projects</h2>
                  <p>Passionate about staying up-to-date with the latest developments in front-end technologies, and actively engaged in the development community through forums, blogs, and open source and private contributions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  openWeb={() => window.open(project.url, "_blank")}
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
