
import React from "react";
import "../../assets/css/custom.css"

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white darker">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Kilimanjaro
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, 
              <i className="fa fa-heart heart" /> Kilimanjaro
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
