
/*eslint-disable*/
import React from "react";
import "../../assets/css/custom.css"

// reactstrap components
import { Container } from "reactstrap";

// core components

function MainPage() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            
            <div className="title-brand">
            
            <h2 className="text-center">
            Regenerative Finance (ReFi)
            </h2>
            <h2 className="presentation-subtitle text-center">
            with
            </h2>
              <h1 className="main-header"><span className="green">Kili</span>manjaro</h1>
              <div className="fog-low">
                <img alt="..." src={require("../../assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("../../assets/img/fog-low.png")} />
              </div>
            </div>
            
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../../assets/img/clouds.png") + ")"
          }}
        />
        
      </div>
    </>
  );
}

export default MainPage;
