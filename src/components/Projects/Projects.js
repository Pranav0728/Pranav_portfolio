import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AkEvent from "../../Assets/Projects/AKEvents.png"
import DoubtAway from "../../Assets/Projects/DoubtAway.png"
import ExpertEase from '../../Assets/Projects/ExpertEase.png'
import KBC from "../../Assets/Projects/KBC.png"
import DoubtAwayMobile from '../../Assets/Projects/DoubtAway_Mobile.png'
import lopipedia from '../../Assets/Projects/Lopipedia.png'

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
              imgPath={AkEvent}
              isBlog={false}
              title="AK Events"
              description="This is the first freelancing website I created for AK Events using HTML, CSS, and JavaScript. It helps AK Events show their work and connect with clients easily. The site has a simple design, easy navigation, and a contact form for quick communication."
              ghLink="https://github.com/Pranav0728/AK_Events"
              demoLink="https://ak-events.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DoubtAway}
              isBlog={false}
              title="DoubtAway"
              description="DoubtAway is a web app that helps students and teachers connect to solve doubts. I built it using React.js and Firebase. Students can easily talk, chat, and meet with teachers to get their questions answered quickly."
              ghLink="https://github.com/Pranav0728/DoubtAway"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpertEase}
              isBlog={false}
              title="ExpertEase"
              description="I made a landing page for my idea called ExpertEase. It's all about making life easier by giving people quick help and info on things like coding or fitness. We're making an app with special chatbots for different topics. Using OpenAI's tech, we'll customize these chatbots to give personalized advice. And while working on this project, I learned about making software that's easy to use and can grow big."
              ghLink="https://github.com/Pranav0728/ExpertEase"
              demoLink="https://expert-ease-zeta.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KBC}
              isBlog={false}
              title="KBC"
              description="I designed a 'Kaun Banega Crorepati' game for a college competition named 'KBC on Republic Day' using HTML, CSS, and JavaScript. As the technical head for the event, I took charge of creating this project, and I was also awarded a trophy by the college for this game."
              ghLink="https://github.com/Pranav0728/KBC_Game"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DoubtAwayMobile}
              isBlog={false}
              title="DoubtAway_MobileApp"
              description="DoubtAway is a Mobile app that helps students and teachers connect to solve doubts. I built it using flutter. Students can easily talk, chat, and meet with teachers to get their questions answered quickly."
              ghLink="https://github.com/Pranav0728/DoubtAway-Flutter-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lopipedia}
              isBlog={false}
              title="Lopipedia-Lequipedia Clone"
              description="I crafted a static Liquipedia replica using HTML, CSS, and JavaScript. It doesn't update automatically and doesn't require any server-side processing. It's all about showcasing design and frontend skills in a simplified form."
              ghLink="https://github.com/Pranav0728/Liquipedia_clone"
              demoLink="https://github.com/Pranav0728/Liquipedia_clone"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
