import React from 'react'
import { Link } from 'react-router-dom'

export const AdminLockScreen = () => {
  return (
      <div>
{/* Automatic element centering */}
<div className="lockscreen-wrapper">
  <div className="lockscreen-logo">
    <a href="../../index2.html"><b>OFS</b>   :  Online Furniture Shoping</a>
  </div>
  {/* User name */}
  <div className="lockscreen-name">Harsh Modi</div>
  {/* START LOCK SCREEN ITEM */}
  <div className="lockscreen-item">
    {/* lockscreen image */}
    <div className="lockscreen-image">
      <img src="../../dist/img/user1-128x128.jpg" alt="User Image" />
    </div>
    {/* /.lockscreen-image */}
    {/* lockscreen credentials (contains the form) */}
    <form className="lockscreen-credentials">
      <div className="input-group">
        <input type="password" className="form-control" placeholder="password" />
        <div className="input-group-append">
          <Link to='/dashbord' type="button" className="btn"><i className="fas fa-arrow-right text-muted" /></Link>
        </div>
      </div>
    </form>
    {/* /.lockscreen credentials */}
  </div>
  {/* /.lockscreen-item */}
  <div className="help-block text-center">
    Enter your password to retrieve your session
  </div>
  <div className="text-center">
    <Link to="/login">Or sign in as a different user</Link>
  </div>
</div>
</div>
  )
}
