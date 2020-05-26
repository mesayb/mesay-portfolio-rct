import React from "react";
import "./style.css";

function AboutMe (props) {
  return (
<div className="container-fluid bg-2 text-center" id="aboutme">
  <div className="col-sm-4">
  <div class="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="mesay-bekele"><a class="LI-simple-link" href='https://www.linkedin.com/in/mesay-bekele?trk=profile-badge' target="_blank" rel="noopener noreferrer">Mesay Bekele</a></div>
  </div>

  <div className="col-sm-8">
  <h3 className="margin">About Me</h3>
  <p>Full Stack Web Developer with experience in manual Software Quality Assurance and Software Automation Testing. Recently earned a certificate in Full Stack Web Development from Georgia Institute of Technology. Experienced in helping organizations improve software quality by assessing the quality of software products through manual testing and creating automated tests. Excited to develop  Quality focused responsive web application by leveraging my background in Software testing and newly acquired skills </p>
  <hr className="hr-light my-4"/>
<p><strong>JavaScript | HTML | CSS | jQuery | React | Express | Node.js  <br/> MongoDB | MySQL</strong></p>
  <hr className="hr-light my-4"/>
          <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github zoom" style={{"color":"red"}}></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://www.linkedin.com/in/mesay-bekele/" target="_blank" rel="noopener noreferrer" >
                <i className="fab fa-linkedin-in zoom" style={{"color":"red"}}> </i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x ins-ic" href="/pdfresume">
                <i className="far fa-file-pdf zoom" style={{"color":"red"}}></i>
              </a>
            </li>
          </ul>
  </div>

</div>
  );
}

export default AboutMe;
