
import React from "react";
import "./style.css";

function Portfolio(props) {
  return (
      <React.Fragment>
<div className="container-fluid bg-3 text-center" id="portfolio">    
  <h3 className="margin">Portfolio</h3> <br/>
  <div className="row centerAll">
  <div className="col-sm-3 text-center project">
      <p>Raven's Athletic Club</p>
     {/* links to project */}
          <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb/ravens-athletic-club" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}}></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://secure-beach-74289.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/ravenclub.gif" className="img-responsive margin project_thumbnail text-center" alt="Raven's Athletic Club"/>
    </div>
    <div className="col-sm-3 project">
      <p>Digital Asset Monitor</p>
      {/* links to project */}
      <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/alexgignilliat/Digital-Asset-Monitor" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}}></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://alexgignilliat.github.io/Digital-Asset-Monitor/" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/digitalAssets.png" className="img-responsive margin project_thumbnail" alt="Digital Asset Monitor"/>
    </div>
    <div className="col-sm-3 project"> 
      <p>Password Generator</p>
      {/* links to project */}
      <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb/passwordGenerator" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}}></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://mesayb.github.io/passwordGenerator/" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/passwordGenerator.png" className="img-responsive margin project_thumbnail"  alt="Password Generator"/>
    </div>
    <div className="col-sm-3 project"> 
      <p>Weather App</p>
      {/* links to project */}
      <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb/weatherCast" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}}></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://mesayb.github.io/weatherCast/" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/weatherApp.png" className="img-responsive margin project_thumbnail text-center" alt="Weather App"/>
    </div>

    <div className="col-sm-3 project"> 
      <p>Node Employee Summary</p>
      {/* links to project */}
      <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb/EmployeeSummary" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}}></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://dashboard.heroku.com/apps/employee-summary" target="_blank" rel="noopener noreferrer" >
              <i class="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/employeeSummaryGif.gif" className="img-responsive margin project_thumbnail" alt="employee summary gif"/>
    </div>

    <div className="col-sm-3 project"> 
      <p> Employee Tracker</p>
      {/* links to project */}
      <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb/Employee-Tracker" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}}></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="/#" target="_blank" rel="noopener noreferrer" >
              <i class="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/employeeTracker.gif" className="img-responsive margin project_thumbnail" alt="Employee tracker gif"/>
    </div>
    
  
  </div>
</div>

</React.Fragment>
  );
}

export default Portfolio;
