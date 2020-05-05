
import React from "react";
import "./style.css";

function Portfolio(props) {
  return (
      <React.Fragment>
<div className="container-fluid bg-3 text-center" id="portfolio">    
  <h3 className="margin">Portfolio</h3> <br/>
  <div className="row">
    <div className="col-sm-4">
      <p>Digital Asset Monitor</p>
      <img src="images/digitalAssets.png" className="img-responsive margin project_thumbnail" alt="Digital Asset Monitor"/>
    </div>
    <div className="col-sm-4"> 
      <p>Password Generator</p>
      <img src="images/passwordGenerator.png" className="img-responsive margin project_thumbnail"  alt="Password Generator"/>
    </div>
    <div className="col-sm-4"> 
      <p>Weather App</p>
      <img src="images/weatherApp.png" className="img-responsive margin project_thumbnail" alt="Weather App"/>
    </div>
  </div>
</div>

</React.Fragment>
  );
}

export default Portfolio;
