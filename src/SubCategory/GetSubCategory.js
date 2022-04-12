import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const GetSubCategory = () => {
    const [subcategoryList, setsubcategoryList] = useState([])
    const getData =()=>{
        axios.get("http://localhost:4001/subcategories").then((res)=>{
            console.log(res.data.data);
            setsubcategoryList(res.data.data);
        });
    };

    const DeleteData =(_id)=>{
        axios.delete(`http://localhost:4001/subcategories/${_id}`).then((res)=>{
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
    <h1>This is Sub-Category List</h1> 
      <h3 className="row-1 d-inline-flex">Sub-Category</h3>
      <Link to="addsubcategory" className="btn btn-info float-right">
        Add Sub-Category
      </Link>
      <table className="table table-hover table-striped">
        <thead className="m-0 text-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Sub-Category Name</th>
            <th scope="col">Category Name</th>
            <th scope="col">isActive</th>
          </tr>
        </thead>
        <tbody>
          {subcategoryList.map((subcategory) => {
            return (
              <tr>
                <th scope="row">{subcategory._id}</th>
                <td>{subcategory.subcategoryName}</td>
                <td>{subcategory.category.categoryName}</td>
                <td>{
                subcategory.isActive ? "Active" :"Not Active"
                }</td>

                <td><button onClick={() => DeleteData(subcategory._id)} className='btn btn-danger'>DELETE</button>

                <Link to={`updatecategory/${subcategory._id}`} className="btn btn-primary">UPDATE</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div></div>
  )
}
