import React from "react";
import "./style/skills.css";
import { Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">My Skills</div>
      <div className="skills-header-description">
        Proficient in following skills: I specialize in crafting engaging and
        responsive web interfaces. Skilled in turning design concepts into code,
        I'm adept at enhancing user experiences through animations and dynamic
        elements. Eager to contribute creativity and precision to every project.
      </div>
      <div className="skills-contain">
        <Container className="d-flex justify-content-center flex-column align-item-center mt-3">
          <Row>
            <Col xs="12" lg="6">
              <div className="skill-box box1">
                <div className="skill-box-header html">HTML</div>
                <div className="skill-box-description">
                  Mastery of HTML allows me to construct the structural
                  foundation of websites with precision. I ensure clean and
                  semantic code for optimal functionality and accessibility.
                </div>
                <div className="skill-box-experience" data-width="80%">
                  Skill
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="skill-box">
                <div className="skill-box-header css">CSS</div>
                <div className="skill-box-description">
                  Proficient in CSS, I craft visually stunning and responsive
                  designs. I employ layout techniques, manage stylesheets
                  efficiently, and create engaging user interfaces
                </div>
                <div className="skill-box-experience" data-width="75%">
                  Skill
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <div className="skill-box">
                <div className="skill-box-header js">JavaScript</div>
                <div className="skill-box-description">
                  JavaScript-savvy, I add dynamic interactivity to websites.
                  From user input handling to seamless animations, I contribute
                  to immersive and user-friendly experiences through coding
                </div>
                <div className="skill-box-experience" data-width="70%">
                  Skill
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="skill-box">
                <div className="skill-box-header react">REACT</div>
                <div className="skill-box-description">
                  Proficient in React.js, I build dynamic and modular user
                  interfaces. I create reusable components, manage state
                  effectively, and contribute to seamless front-end experiences.
                </div>
                <div className="skill-box-experience" data-width="90%">
                  Skill
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <div className="skill-box">
                <div className="skill-box-header ty">TypeScript</div>
                <div className="skill-box-description">
                  Skilled in TypeScript, I create type-safe and maintainable
                  code, promoting efficient collaboration and building robust
                  applications with enhanced predictability.
                </div>
                <div className="skill-box-experience" data-width="70%">
                  Skill
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="skill-box">
                <div className="skill-box-header sass">SASS</div>
                <div className="skill-box-description">
                  Adept in SASS, I streamline stylesheets, utilizing variables
                  and mixins for efficient and consistent styling, resulting in
                  cleaner and more manageable code.
                </div>
                <div className="skill-box-experience" data-width="90%">
                  Skill
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
