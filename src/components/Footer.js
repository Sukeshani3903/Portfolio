import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sukeshani Wavhal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SW</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/explore#:~:text=GitHub%20Sponsors-,Sukeshani3903,-0%20starred%20topics"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sukeshaniwavhaldeveloper"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/wavhal_3903?igsh=bDF6OXFybDR0c3Zm"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
