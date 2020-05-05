import React from "react";
import "./style.css";

function ContactMe(props) {
    return (
        <section className="my-5  text-dark contact" >
            <div className="container pb-5" id="contact_section" >
                <div className="row">
                    <div className="col-sm-12  shadow-lg p-4 ">
                        {/* <!-- Section heading --> */}
                        <h2 className="h1-responsive font-weight-bold text-center my-5">Contact Me</h2>
                        <hr className="hr-light my-4"/>
               {/* contact address */}
                        <div className="row text-center">
                            <div className="col-md-4">
                                <a className="btn-floating blue accent-1" href="/#">
                                    <i className="fas fa-map-marker-alt"></i>
                                </a>
                                <p>Metro Atlanta, United States</p>
                      
                            </div>
                            <div className="col-md-4">
                                <a className="btn-floating blue accent-1" href="/#">
                                    <i className="fas fa-phone"></i>
                                </a>
                                <p>+1-585-729-1840</p>
                            </div>
                            <div className="col-md-4">
                                <a className="btn-floating blue accent-1" href="/#">
                                    <i className="fas fa-envelope"></i>
                                </a>
                                <p>mesayr.bekele@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    {/* <!-- Grid column --> */}
                    <div className="col-lg-6 mb-lg-5 mb-5 shadow-lg">

                        {/* <!-- Form with header --> */}
                        <div className="card contact">
                            <div className="card-body">
                                <div className="form-group">
                                    {/* name */}
                                    <label className="control-label" >
                                        Your Name
  </label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </div>
                                        <input className="form-control" id="form-name" name="name" type="text" />
                                    </div>
                                    {/* email */}
                                    <label className="control-label" for="email">
                                        Your Email
  </label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fas fa-envelope prefix grey-text"></i>
                                        </div>
                                        <input className="form-control" id="email" name="email" type="text" />
                                    </div>
                                    {/* subject */}
                                    <label className="control-label">
                                        Subject
  </label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fas fa-tag prefix grey-text"></i>
                                        </div>
                                        <input className="form-control" id="subject" name="subject" type="text" />
                                    </div>
                                    {/* textarea */}
                                    <label className="control-label">
                                        Send message
  </label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fas fa-pencil-alt prefix grey-text"></i>
                                        </div>
                                        <textarea className="form-control" id="message" name="message" type="text" />
                                    </div>
                                    {/* submit */}
                                    <div className="text-center">
                                        <button className="btn btn-light-blue">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 border-dark contact rounded shadow-lg">

                        {/* <!--Google map--> */}
                        <div id="map-container-section" className="z-depth-1-half map-container-section mb-4" style={{ "height": "400px" }}>
                            <iframe src="https://maps.google.com/maps?q=Atlanta&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" style={{ "border": "0" }} allowfullscreen title="gmap"></iframe>
                        </div>
                    
                    

                    </div>

                </div>
            </div>






        </section >
    );
}

export default ContactMe;
