
/*eslint-disable*/
import React from "react";
import "../../assets/css/custom.css"

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";


// core components

function MainPage() {
  return (
    <>
      <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href=""
                target="_blank"
              >
                Connect Wallet
              </Button>
            </NavItem>
    </>
  );
}

export default MainPage;
