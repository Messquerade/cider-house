import React from "react";
import CideryLogo from "./../img/cidery-logo.jpg";

function Header() {
  return (
    <React.Fragment>
    <div className="row">
    <img className="col-3" src={CideryLogo} alt="Harvest Moon Cidery"/>
    <h1 className="col-9 title">Harvest Moon Ciderworks</h1>
    </div>
    </React.Fragment>
  );
}

export default Header;