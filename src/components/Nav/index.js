import React from "react";
import "./style.css";


function NavBar (){
  return (
    <nav className="navbar navbar-fixed-top navbar-default" style={{" color": "black"}}>
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="/">Mesay Bekele</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact_section">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar;