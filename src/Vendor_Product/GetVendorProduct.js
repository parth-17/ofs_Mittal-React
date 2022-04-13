import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const GetVendorProduct = () => {

    const [vendorProductList, setvendorProductList] = useState([])

    const getData = async () =>{
        await axios.get("http://localhost:4001/vendorproducts").then((res)=>{
            console.log(res.data.data);
            console.log("qty",res.data.data[0].qty)
            console.log("qty",res.data.data[0].price)
            console.log("qty",res.data.data[0].product.productName)
            console.log("qty",res.data.data[0].vendor.vendorName)
            setvendorProductList(res.data.data);
        });
    };

    
    const DeleteData =(_id) =>{
        axios.delete(`http://localhost:4001/vendorproducts/${_id}`).then((res)=>{
            alert(res.data);
            getData();
        })
    }

    useEffect(() => {
      getData()
    }, [])
    
  return (
    <div className="content-wrapper card-body table-resposive col-md-10">
      <h1>This is vendor Product List</h1> 
        <Link to="addvendorproduct" className="btn btn-info float-right">
          Add Vendor Product
        </Link>
        <table className="table table-hover table-striped">
          <thead className="m-0 text-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price </th>
              <th scope="col">Product</th>
              <th scope="col">vendor</th>
            </tr>
          </thead>
          <tbody>
            {vendorProductList.map((vendorproduct) => {
              return (
                <tr>
                  <th scope="row">{vendorproduct._id}</th>
                  <td>{vendorproduct.qty}</td>
                  <td>{vendorproduct.price}</td>
                  <td>{vendorproduct.product.productName}</td>      
                  <td>{vendorproduct.vendor.vendorName}</td>

                  {/* if(role._id === "620c892f63551bfea59868d3"){ */}
                  <td><button onClick={() => DeleteData(vendorproduct._id)} className='btn btn-danger'>DELETE</button>
                  <Link to={`/productlist/updateproduct/${vendorproduct._id}`} className="btn btn-primary">UPDATE</Link>
                  </td>
                  {/* } */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
 
  )
}
