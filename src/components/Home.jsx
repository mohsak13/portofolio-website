import React from "react";
import "./style/home.css";
import { Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <Container className="d-flex align-items-center justify-content-between container-home">
        <Col sm="12" md="12" lg="6">
          <div className="home-info">
            <div className="home-info-title">I Am Mohammed Shakokah</div>
            <div className="home-info-title">A Web Developer</div>
            <div className="home-info-description">
              Passionate junior front-end developer crafting dynamic web experiences. Proficient in HTML, CSS, and JavaScript. Eager to learn, collaborate, and drive user-centric and innovative digital solutions.
            </div>
          </div>
        </Col>
        <Col md="5" lg="6">
          <div className="home-img">
            <img src="/images/img2.png" alt="" />
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Home;
