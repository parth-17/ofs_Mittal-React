import React from "react";
import { useState } from "react";
import axios from "axios";
import logo from "./png/logo.png";
import logo2 from "./png/logo-small-bottom.png";


export const CustomerSingup = () => {


  const [firstName, setfirstName] = useState('')
  const [email, setemail] = useState('')
  const [contactNum, setcontactNum] = useState('')
  const [password,setpassword] = useState('')
  const [gender, setgender] = useState('')

  

    var Data ={
        firstName:firstName,
        email:email,
        contactNum:contactNum,
        password:password
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:4001/roles',Data).then(res =>{
            console.log(res.status)
            console.log(res.data)
        })
    }
  return (
    <div>
      <div className="theme-loader">
        <div className="loader-track">
          <div className="preloader-wrapper">
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
            <div className="spinner-layer spinner-red">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
            <div className="spinner-layer spinner-yellow">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
            <div className="spinner-layer spinner-green">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="login-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={submit} className="md-float-material form-material">
                <div className="text-center">
                  <img src={logo} alt="logo.png" />
                </div>
                <div className="auth-box card">
                  <div className="card-block ">
                    <div className="row m-b-20">
                      <div className="col-md-12">
                        <h3 className="text-center txt-primary">Customer Sign up</h3>
                      </div>
                    </div>
                    <div className="row m-b-20">
                      <div className="col-md-6">
                        <a
                          href="#!"
                          className="btn btn-facebook m-b-20 btn-block waves-effect waves-light"
                        >
                          <i className="icofont icofont-social-facebook" />
                          facebook
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a
                          href="#!"
                          className="btn btn-twitter m-b-0 btn-block waves-effect waves-light"
                        >
                          <i className="icofont icofont-social-twitter" />
                          twitter
                        </a>
                      </div>
                    </div>
                    <p className="text-muted text-center p-b-5">
                      Sign up with your regular account
                    </p>
                    {/* first name */}
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        required
                        onChange={(e)=>setfirstName(e.target.value)}
                        placeholder="First Name"
                      />
                      <span className="form-bar" />
                    </div>
                    {/* Contact Number
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        name="Mnumber"
                        className="form-control"
                        required
                        placeholder="Contact Name"
                      />
                      <span className="form-bar" />
                    </div> */}
                    {/* email */}
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        required
                        placeholder="Your Email Address"
                        onChange={(e)=>setemail(e.target.value)}

                      />
                      <span className="form-bar" />
                    </div>
                  {/* contact Number */}
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        name="mobileNum"
                        className="form-control"
                        required
                        placeholder="Your Mobile Number"
                        onChange={(e)=>setcontactNum(e.target.value)}

                      />
                      <span className="form-bar" />
                    </div>
                    
                    {/* password */}
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group form-primary">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            required
                            placeholder="Password"
                          onChange={(e)=>setpassword(e.target.value)}/>
                          <span className="form-bar" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group form-primary">
                          <input
                            type="password"
                            name="confirm-password"
                            className="form-control"
                            required
                            placeholder="Confirm Password"
                          />
                          <span className="form-bar" />
                        </div>
                      </div>
                    </div>

                    {/* Gendor */}
                    <div className="row ">
                      <label className="col-sm-2 col-form-label">Gender</label>
                      <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender-1"
                              onChange={(e)=>setgender(e.target.value)}
                            />{" "}
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender-2"
                              defaultValue="option2"
                            />{" "}
                            Female
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Role Name */}
                    {/* Gendor */}
                    
                    <div className="row m-t-25 text-left">
                      <div className="col-md-12">
                        <div className="checkbox-fade fade-in-primary">
                          <label>
                            <input type="checkbox" defaultValue />
                            <span className="cr">
                              <i className="cr-icon icofont icofont-ui-check txt-primary" />
                            </span>
                            <span className="text-inverse">
                              I read and accept{" "}
                              <a href="#">Terms &amp; Conditions.</a>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkbox-fade fade-in-primary">
                          <label>
                            <input type="checkbox" defaultValue />
                            <span className="cr">
                              <i className="cr-icon icofont icofont-ui-check txt-primary" />
                            </span>
                            <span className="text-inverse">
                              Send me the <a href="#">Newsletter</a> weekly.
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row m-t-30">
                      <div className="col-md-12">
                        <button className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">
                          Sign up now
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-10">
                        <p className="text-inverse text-left m-b-0">
                          Thank you.
                        </p>
                        <p className="text-inverse text-left">
                          <a href="index.html">
                            <b>Back to website</b>
                          </a>
                        </p>
                      </div>
                      <div className="col-md-2">
                        <img src={logo2} alt="small-logo.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
