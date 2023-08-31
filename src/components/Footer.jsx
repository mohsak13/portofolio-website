import React from "react";
import "./style/footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="d-flex justify-content-between align-items-start px-5 container-footer">
        <div className="footer-icon">
          <div className="footer-icon-title">Follow Us</div>
          <div className="footer-i">
            <a style={{ color: "white" }} href="https://github.com/mohsak13">
              <i class="bi bi-github"></i>
            </a>
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/muhammad-shakokah-52912228b"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-email mt-3">
          Contact Me : <span>mohammedshakokah@gmail.com</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
