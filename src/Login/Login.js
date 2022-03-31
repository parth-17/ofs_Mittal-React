import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './png/logo.png'

export const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  var navigate = useNavigate

  const emailChangeHandler= (e) =>{
    setemail(e.target.value)
  }

  const passwordChangeHandler =(e)=>{

  }

  const [roleList, setroleList] = useState([])
  const getData = ()=>{
    axios.get("http://localhost:4001/roles").then((res) => {
      console.log(res.data.data);
      setroleList(res.data.data);
    });
  };
  
  useEffect(() => {
    getData();
  }, []);

  const submit =async(e) => {
    e.preventDefault();

    var loginData ={
      email:email,
      password:password
    }
    await axios.post(`http://localhost:4001/login`).then((res)=>{
      
    })

  }

  return (
    <div>
  <div><div className="theme-loader">
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
            <form className="md-float-material form-material">
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
                      <button className="btn btn-facebook m-b-20 btn-block"><i className="icofont icofont-social-facebook" />facebook</button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-twitter m-b-20 btn-block"><i className="icofont icofont-social-twitter" />twitter</button>
                    </div>
                  </div>
                  <p className="text-muted text-center p-b-5">Sign in with your regular account</p>
                  <div className="form-group form-primary">
                    <input type="email" name="email" className="form-control" required placeholder='Enter Email' />
                    <span className="form-bar" />
                    
                  </div>
                  <div className="form-group form-primary">
                    <input type="password" name="password" className="form-control" required placeholder='Password'/>
                    <span className="form-bar" />
                    
                  </div>
                  <div class="form-group" data-select2-id="31">
                  <label>ROLE</label>
                    <select className="form-control select2 select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                  {roleList.map((role)=>{
                    return(
                    <option selected="selected" data-select2-id="3">{role.roleName}</option>
                    
                    )})}
                    </select>
                  
                  {/* <select class="form-control select2 select2-hidden-accessible" style="width: 100%;" data-select2-id="1" tabindex="-1" aria-hidden="true">
                    <option selected="selected" data-select2-id="3">Alabama</option>
                    <option data-select2-id="39">Alaska</option>
                    <option data-select2-id="40">California</option>
                    <option data-select2-id="41">Delaware</option>
                    <option data-select2-id="42">Tennessee</option>
                    <option data-select2-id="43">Texas</option>
                    <option data-select2-id="44">Washington</option>
                  </select> */}
                </div>
                  <div className="row m-t-25 text-left">
                    <div className="col-12">
                      <div className="checkbox-fade fade-in-primary">
                        <label>
                          <input type="checkbox" defaultValue />
                          <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary" /></span>
                          <span className="text-inverse">Remember me</span>
                        </label>
                      </div>    
                      <div className="forgot-phone text-right float-right">
                        <a href="auth-reset-password.html" className="text-right f-w-600"> Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-30">
                    <div className="col-md-12">
                     {/* <button type="button" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</button> */}
                      <Link to='/dashbord' className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</Link>                    
                    </div>
                  </div>
                  <p className="text-inverse text-left">Don't have an account?<Link to="/vendorsingup"><b>For Vendor Register here </b></Link>for free!</p>
                  <p className="text-inverse text-left">Don't have an account?<Link to="/customersingup"><b>For Customer Register here </b></Link>for free!</p>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section></div>

</div>
  )
}