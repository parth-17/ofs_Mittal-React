import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const GetUsers = () => {
  const [userList, setuserList] = useState([]);

  const getData = () => {
      
    axios.get("http://localhost:4001/users").then((res) => {
      console.log(res.data.data);
      setuserList(res.data.data);
    });
  };

  const DeleteData = (_id) => {
    {
      axios.delete(`http://localhost:4001/users/${_id}`).then((res) => {
        alert(res.status);
        getData();
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
      <div >
  <div className="content-wrapper card-body table-responsive p-0">
      <div className="col-md-10">
        <h3 className="row-1 d-inline-flex" > User</h3>
        <Link to='/adduser' className="btn btn-info float-right">Add user</Link>
    <table className=" table table-hover">
        <thead className="m-0 text-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">isActive</th>


          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr>
                <th scope="row">{user._id}</th>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                

                <td>{
                  user.isActive? "Active":"DisActive"
                }</td>
                {/* <td>{user.role}</td> */}
                {/* <td>{user.isActive}</td> */}

                <td>
                  <button onClick={()=> DeleteData(user._id)} className="btn btn-danger">DELETE</button>
                  
                  <Link to={`/user/updateuser/${user._id}`} className="btn btn-primary">UPDATE</Link>

                  
                  <Link to="/userdetails" className="btn btn-warning btn-round waves-effect" >View Details</Link>
                     
                </td>
              </tr>
            );
          })}
        </tbody>
        
      </table>
    </div>
    </div>
    </div>
  );
};
