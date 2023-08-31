import React from "react";
import "./style/about.css";
import { Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        About <span>Me</span>
      </div>
      <div className="about-content d-flex align-item-center justify-content-between">
        <Container className="d-flex align-item-center justify-content-between flex-column flex-lg-row">
          <Col md="12" lg="6">
            <div className="about-img">
              <img src="/images/about_img.jpg" />
            </div>
          </Col>
          <Col md="12" lg="6">
            <div className="about-description">
              <div className="about-description-word">
                Hey, I'm Mohamed Shakokah, a junior front-end developer with a
                passion for creating captivating web experiences. Proficient in
                HTML, CSS, and JavaScript, I'm dedicated to turning designs into
                interactive websites. I've already collaborated on projects that
                refined my problem-solving skills and enriched my teamwork
                abilities. Whether it's fine-tuning layouts or diving into CSS
                frameworks, I'm eager to take on challenges and grow. Beyond
                coding, I experiment with design tools and delve into UX/UI
                principles. My goal is to merge aesthetics and functionality to
                craft impactful digital solutions. Let's build something
                incredible together!
              </div>
              <div className="about-description-btn">Read More</div>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default About;
