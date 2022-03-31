import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const GetBrand = () => {
    const [brandList, setbrandList] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:4001/brands").then((res)=>{
            console.log(res.data.data);
            setbrandList(res.data.data);
        });
    };

    const DeleteData =(_id)=>{
        axios.delete(`http://localhost:4001/brands/${_id}`).then((res)=>{
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
    <h1>This is Brand List</h1> 
      <h3 className="row-1 d-inline-flex">Brand</h3>
      <Link to="/addbrand" className="btn btn-info float-right">
        Add Brand
      </Link>
      <table className="table table-hover table-striped">
        <thead className="m-0 text-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Brand Name</th>
            
          </tr>
        </thead>
        <tbody>
          {brandList.map((brand) => {
            return (
              <tr>
                <th scope="row">{brand._id}</th>
                <td>{brand.brandName}</td>
                <td><button onClick={() => DeleteData(brand._id)} className='btn btn-danger'>DELETE</button>
                <Link to={`/getbrand/updatebrand/${brand._id}`} className="btn btn-primary">UPDATE</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div></div>
  )
}
