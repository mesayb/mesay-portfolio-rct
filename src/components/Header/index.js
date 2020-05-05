
import React from "react";
import "./style.css";

function Header(props) {
  return (
      <React.Fragment>
<div className="container-fluid bg-1 text-center">
  <h3 className="margin">Web Developer</h3>
  <img src="images/mesay.png" className="img-responsive img-circle margin" style={{display:'inline'}} alt="Bird" width="350" height="350"/>
  <h3>Software Automation Tester</h3>
</div>
</React.Fragment>
  );
}

export default Header;






