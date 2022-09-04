import React from "react";
import "../../assets/css/custom.css"

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download dark"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">dfgdfgdfgdfgdfdfgdfgdrfgdfd</h3>
              <h5 className="description">
                dfdfdgfdhfhfdffffffffffffffffffffffffffffhdfdhfhdfhdfdfhdfhdfhdfhdfhdfhdfhdfhdfd
                dhfhdffdddddddddddfgdhdfhddfdfghdgfyhretyrturytyutiyrirtyuirtyuityoiotyuoiyuioyui
                tdyhrftujrfhjgfhjgyhdfcghdfghdftgdhfghdfghdfghdfghdfghdfg.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                href="https://www.creative-tim.com/product/now-ui-kit-react?ref=nukr-index-page"
                role="button"
                size="lg"
              >
                Plant A Tree
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href=""
                outline
                role="button"
                size="lg"
                target="_blank"
              >
                Monitor a tree
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Want more?</h2>
              <h5 className="description">
                We're going to launch{" "}
                <a
                  href=""
                  onClick={(e) => e.preventDefault()}
                >
                  dsfgdfghdfgdhfghdfghdf
                </a>
                kjhgkjyghkjhgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkgkhkjhgkjh
                kjyghkjhhhhhhhhhhhgkhgkjhgkjhgkjhkjhkjkjhgkjhgkjhkjghkjhjkhgkjhkjghkjgkjhgkjyhgjyhghjgkjhgkhjgkhj
                ,jvhgkjhgkjhkjhkjhgkjh.
              </h5>
            </Col>
            <Col md="12">
              <Button
                className="btn-neutral btn-round"
                color="default"
                href=""
                size="lg"
                target="_blank"
              >
                <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                Upgrade to PRO
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href=""
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href=""
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href=""
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="github"
                href=""
                id="tooltip331904895"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
