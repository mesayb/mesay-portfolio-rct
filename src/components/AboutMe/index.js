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
  <p>Web Developer Experienced in Quality Assurance Automation Tester with a demonstrated history of working in the financial services industry. Skilled in Requirements Analysis, manual testing, Agile Methodologies, Test Automation, Selenium, Cucumber, Jira, API testing, SQL and Software Development Life Cycle (SDLC). Strong quality assurance professional with a Bachelor of Science - BS focused in Chemical Engineering from Addis Ababa University. 
Current Full-Stack Web Development Student At Georgia Tech </p>
  <hr className="hr-light my-4"/>
<p><strong>JavaScript | HTML | CSS | JQuery | React | Node.js | MongoDB | MySQL</strong></p>
  <hr className="hr-light my-4"/>
          <ul className="list-inline text-center list-unstyled">
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x tw-ic" href="https://github.com/mesayb" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" style={{"color":"white"}}></i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x li-ic" href="https://www.linkedin.com/in/mesay-bekele/" target="_blank" rel="noopener noreferrer" >
                <i className="fab fa-linkedin-in" style={{"color":"white"}}> </i>
              </a>
            </li>
            <li className="list-inline-item myIcons">
              <a className="p-2 fa-2x ins-ic" href="/pdfresume">
                <i className="far fa-file-pdf" style={{"color":"white"}}></i>
              </a>
            </li>
          </ul>
  </div>

</div>
  );
}

export default AboutMe;
