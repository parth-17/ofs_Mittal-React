import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./png/logo.png";


export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  var navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setemail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setpassword(e.target.value);
  };


  const submit = async (e) => {
    e.preventDefault();

    var loginData = {
      email: email,
      password: password,
    };

    await axios.post(`http://localhost:4001/login`, loginData).then((res) => {
      if (res.data.status == 200) {
        console.log("axios post called", res.data.data);

        console.log("email", res.data.data.email);
        console.log("roleName", res.data.data.role.roleName);
        console.log("roleId", res.data.data.role._id);

        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("roleName", res.data.data.role.roleName);
        localStorage.setItem("roleId", res.data.data.role._id)

        if (res.data.data.role._id == "620c892f63551bfea59868d3") {
          navigate("/Admindashbord");
        }

        else if(res.data.data.role._id == "62493c6379dd4902ea8995bc"){
          navigate("/VendorDashbord")
        }

      } else {
        console.log("Invalid credentials", res.data.data);
        alert("Invalid Credentials");
      }
    });
    
  };

  return (
    <div>
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
                <form
                  onSubmit={submit}
                  className="md-float-material form-material"
                >
                  <div className="text-center">
                    <img src={logo} alt="logo.png" />
                  </div>
                  <div className="auth-box card">
                    <div className="card-block">
                      <div className="row m-b-20">
                        <div className="col-md-12">
                          <h3 className="text-center txt-primary">Sign In</h3>
                        </div>
                      </div>
                      <div className="row m-b-20">
                        <div className="col-md-6">
                          <button className="btn btn-facebook m-b-20 btn-block">
                            <i className="icofont icofont-social-facebook" />
                            facebook
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button className="btn btn-twitter m-b-20 btn-block">
                            <i className="icofont icofont-social-twitter" />
                            twitter
                          </button>
                        </div>
                      </div>
                      <p className="text-muted text-center p-b-5">
                        Sign in with your regular account
                      </p>
                      <div className="form-group form-primary">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={(e) => {
                            emailChangeHandler(e);
                          }}
                          required
                          placeholder="Enter Email"
                        />
                        <span className="form-bar" />
                      </div>
                      <div className="form-group form-primary">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          onChange={(e) => {
                            passwordChangeHandler(e);
                          }}
                          required
                          placeholder="Password"
                        />
                        <span className="form-bar" />
                      </div>
                      <div className="row m-t-25 text-left">
                        <div className="col-12">
                          <div className="checkbox-fade fade-in-primary">
                            <label>
                              <input type="checkbox" defaultValue />
                              <span className="cr">
                                <i className="cr-icon icofont icofont-ui-check txt-primary" />
                              </span>
                              <span className="text-inverse">Remember me</span>
                            </label>
                          </div>
                          <div className="forgot-phone text-right float-right">
                            <a
                              href="auth-reset-password.html"
                              className="text-right f-w-600"
                            >
                              {" "}
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row m-t-30">
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                          >
                            LOGIN
                          </button>
          
                        </div>
                      </div>
                      <p className="text-inverse text-left">
                        Don't have an account?
                        <Link to="/vendorsingup">
                          <b>For Vendor Register here </b>
                        </Link>
                        for free!
                      </p>
                      <p className="text-inverse text-left">
                        Don't have an account?
                        <Link to="/customersingup">
                          <b>For Customer Register here </b>
                        </Link>
                        for free!
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
