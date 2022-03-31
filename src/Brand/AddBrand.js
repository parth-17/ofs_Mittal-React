import axios from "axios";
import React, { useState } from "react";
import Header from "../Admin_Componant/Header";
import Menu from "../Admin_Componant/Menu";

export const AddBrand = () => {
    const [brandName, setbrandName] = useState("");

  var Data = {
    brandName: brandName,
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/brands", Data).then((res) => {
      console.log(res.status);
      console.log(res.data);
      alert("Brand Added....");
    });
  };
  return (
    <div>
      <Header />
      <Menu />
      <div className=" content-wrapper card-body">
        <form onSubmit={submit}>
          <div className=" form-group">
            <label>Brand Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Product Brand Name "
              onChange={(e) => setbrandName(e.target.value)}
            />
          </div>
  <button type="submit" class="btn btn-primary">Submit</button>

        </form>
      </div>
    </div>
  )
}
