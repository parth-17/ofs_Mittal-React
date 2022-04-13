import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateBrand = () => {
    var id = useParams().id;
    console.log("Id--",id);

    const [data, setdata] = useState('')
    const [brandName, setbrandName] = useState(data.brandName)

    const getData=()=>{
        axios.get(`http://localhost:4001/brands/${id}`).then((res)=>{
            setdata(res.data.data);
            console.log("--",res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const update =(e)=>{
        var updatedData ={
            brandName:brandName
        };
        e.preventDefault();

        axios.put(`http://localhost:4001/brands/${id}`,updatedData).then((res)=>{
            alert('Data Updated.....');
        });
    };
  return (
    <div>
        <div className=" content-wrapper card-body">
    <h1>This is Update Brand </h1> 
    <form onSubmit={update}>
      <div class="form-group">
        <label>Brand Name</label>
        <input
          type="text"
          class="form-control"
          defaultValue={data.brandName}
          onChange={(e) => setbrandName(e.target.value)}
        /></div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        </form>
        </div>
        </div>
  )
}
