import React from "react";
import CideryLogo from "./../img/cidery-logo.jpg";

function Header() {
  return (
    <React.Fragment>
    <img src={CideryLogo} alt="Harvest Moon Cidery"/>
    <h1>Harvest Moon Cidery</h1>
    </React.Fragment>
  );
}

export default Header;