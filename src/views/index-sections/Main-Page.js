
/*eslint-disable*/
import React from "react";
import "../../assets/css/custom.css"

// reactstrap components
import {
  Button,
  NavItem
} from "reactstrap";


// core components

function MainPage() {
  return (
    <>
      <NavItem>
        <Button className="btn-round" color="danger" href="" target="_blank">
                Connect Wallet
        </Button>
      </NavItem>
    </>
  );
}

export default MainPage;
