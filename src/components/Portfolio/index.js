
import React from "react";
import "./style.css";

function Portfolio(props) {
  return (
      <React.Fragment>
<div className="container-fluid bg-3 text-center" id="portfolio">    
  <h3 className="margin">Portfolio</h3> <br/>



  <div id="myCarousel" className="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner">
    <div className="item active">
    <div className="col-sm-3 text-center project">
      <p>Raven's Athletic Club</p>
     {/* links to project */}
          <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb/ravens-athletic-club" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}} data-toggle="tooltip" title="GitHub"></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://secure-beach-74289.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe zoom" style={{"color":"red"}}></i>
          
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
                <i className="fab fa-github zoom" style={{"color":"red"}} data-toggle="tooltip" title="GitHub"></i>
                
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://alexgignilliat.github.io/Digital-Asset-Monitor/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe zoom" style={{"color":"red"}}></i>
              <i className="fas fa-globe zoom" style={{"color":"red"}} data-toggle="tooltip" title="Deployed App"></i>
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
                <i className="fab fa-github zoom" style={{"color":"red"}} data-toggle="tooltip" title="GitHub"></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://mesayb.github.io/passwordGenerator/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/passwordGenerator.png" className="img-responsive margin project_thumbnail"  alt="Password Generator"/>
    </div>
    </div>

    <div className="item">
    <div className="col-sm-3 project"> 
      <p>Weather App</p>
      {/* links to project */}
      <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb/weatherCast" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}} data-toggle="tooltip" title="GitHub"></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://mesayb.github.io/weatherCast/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe zoom" style={{"color":"red"}}></i>
          
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
                <i className="fab fa-github zoom" style={{"color":"red"}} data-toggle="tooltip" title="GitHub"></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://dashboard.heroku.com/apps/employee-summary" target="_blank" rel="noopener noreferrer" >
              <i className="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/EmployeeSummaryGif.gif" className="img-responsive margin project_thumbnail" alt="employee summary gif"/>
    </div>

    <div className="col-sm-3 project"> 
      <p> Employee Tracker</p>
      {/* links to project */}
      <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons ">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb/Employee-Tracker" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}} data-toggle="tooltip" title="GitHub"></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="/#" target="_blank" rel="noopener noreferrer" >
              <i className="fas fa-globe zoom" style={{"color":"red"}}></i>
          
              </a>
            </li>
          </ul>
      <img src="images/EmployeeTracker.gif" className="img-responsive margin project_thumbnail" alt="Employee tracker gif"/>
    </div>
    
    </div>


  </div>

 
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>










</div>

</React.Fragment>
  );
}

export default Portfolio;
