import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const GetRole = () => {
    const [roleList, setroleList] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:4001/roles").then((res)=>{
            console.log(res.data.data);
            setroleList(res.data.data);
        });
    };
    const DeleteData =(_id)=>{
        axios.delete(`http://localhost:4001/roles/${_id}`).then((res)=>{
            alert(res.data);
            getData();
        });
    };

    useEffect(() => {
    getData();
    }, [])
  return (
    <div>  
    <div className="content-wrapper card-body table-resposive col-md-10">
    <h1>This is Role List</h1> 
      <h3 className="row-1 d-inline-flex">Roles</h3>
      <Link to="/addrole" className="btn btn-info float-right">
        Add Role
      </Link>
      <table className="table table-hover table-striped">
        <thead className="m-0 text-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Role Name</th>
            
          </tr>
        </thead>
        <tbody>
          {roleList.map((role) => {
            return (
              <tr>
                <th scope="row">{role._id}</th>
                <td>{role.roleName}</td>
                <td><button onClick={() => DeleteData(role._id)} className='btn btn-danger'>DELETE</button>
                <Link to={`/getrole/updaterole/${role._id}`} className="btn btn-primary">UPDATE</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div></div>
  )
}
