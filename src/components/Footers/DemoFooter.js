
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
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
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> Kilimanjaro
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
