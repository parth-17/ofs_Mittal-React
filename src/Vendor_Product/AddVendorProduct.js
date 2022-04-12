import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

export const AddVendorProduct = () => {

    const [productList, setproductList] = useState([])
    const [vendorList, setvendorList] = useState([])
    const [product, setproduct] = useState('')
    const [vendor, setvendor] = useState('')
    const [qty, setqty] = useState('')
    const [price, setprice] = useState('')

    
    const getData = async () => {
        await axios.get("http://localhost:4001/products").then((res) => {
          setproductList(res.data.data);
          console.log("product List-----", res.data.data);

           axios.get("http://localhost:4001/vendor").then((res) =>{
              console.log('vendor List', res.data.data);
              setvendorList(res.data.data);

          })
        });
      };

    

      const ProductListOnChangeHandler =  (e) =>{
        setproduct(e.target.value)
        console.log('product Id',e.target.value);

      }

      const VendorListOnChangeHandler =  (e) =>{
        setvendor(e.target.value)
        console.log('vendor Id',e.target.value);
        
      }
      useEffect(() => {
        getData();
      }, [])
      
var Data ={
    qty:qty,
    price:price,
    product:product,
    vendor:vendor
}
const submit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:4001/vendorproducts",Data).then((res) => {
        console.log(res.status);
        console.log(res.data);
        alert("Vendor Product Added .......")
    });

};
  return (
    <div>
      <div className=" content-wrapper card-body">
        <form onSubmit={submit}>
          <div className=" form-group">
            <label>Quantity</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your Product Name "
              onChange={(e) => setqty(e.target.value)}
            />
          </div>
          <div className=" form-group">
            <label>Price</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter  Product Base price "
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <div className=" form-group" data-select2-id="55">
            <label>Product</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
              onChange={(e) => ProductListOnChangeHandler(e)}
            >
              {productList.map((product) => {
                return (
                  <option
                    selected="selected"
                    value={product._id}
                    data-select2-id="3"
                  >
                    {product.productName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className=" form-group" data-select2-id="55">
            <label>Vendor Detail</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
              onChange={(e) => VendorListOnChangeHandler(e)}
              >
              {vendorList.map((vendor) => {
                return (
                  <option selected="selected" 
                  value={vendor._id}
                  data-select2-id="3">
                    {vendor.vendorName}
                    
                  </option>
                );
              })}
            </select>
          </div>
          
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
