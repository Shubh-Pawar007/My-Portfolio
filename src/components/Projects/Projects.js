import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netmeds from "../../Assets/Projects/netmeds.png";
import blinkit from "../../Assets/Projects/blinkit.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netmeds}
              isBlog={false}
              title="Netmeds.com"
              description="Netmeds.com is leading E-Commerce website for all type of cosmetic products such as makeup, skin care, hair, fragrance's and tools and brush."
              link="https://github.com/Shubh-Pawar007/Netmeds-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blinkit}
              isBlog={false}
              title="blinkit"
              description="Blinkit (formerly Grofers) is an Indian instant delivery service. Customers of the company use a mobile application to order groceries and essentials online."
              link="https://github.com/Shubh-Pawar007/blinkit"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
