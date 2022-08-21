import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netmeds from "../../Assets/Projects/netmeds.jpg";
import blinkit from "../../Assets/Projects/blinkit.png";
import SimpleStore from "../../Assets/Projects/SimpleStore.png"


function Projects() {
  return (
    <div id="projects">
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
              techStack="TechStack-ReactJS | JavaScript | NodeJs | HTML | CSS"
                
              responsbiities="Areas of responsibility:
              Developed the Medicine and Product Details page.
              Implemented filter and sorting function in the project"
                
              link="https://unrivaled-sprite-2be9c1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SimpleStore}
              isBlog={false}
              title="Simple Store"
              techStack="TechStack-ReactJS | JavaScript | NodeJs | HTML | CSS"
              description="Simple Store is a collaborative & indeginious project built in a hackathon Event at Masai School. It is resource management web application for various retail shops"
              responsbiities="Areas of responsibility:
              Built authentication and integrated it with the frontend.
              Developed the Landing Page and implemented filter functionality"
                
              link="https://simple-store-project-hackathon.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blinkit}
              isBlog={false}
              title="blinkit"
              techStack="TechStack- JavaScript | HTML | CSS"
              description="Blinkit (formerly Grofers) is an Indian instant delivery service. Customers of the company use a mobile application to order groceries and essentials online."
              responsbiities="Areas of responsibility:
              Built web pages and integrated it with the frontend.
              Developed the Home and Payment Authentication page"

              link="https://blink-it-by-arshad-gaurav-ayush-rohit-shubham.netlify.app/"
            />
          </Col>

         
        </Row>
      </Container>
      </Container>
      </div>
  );
}

export default Projects;
