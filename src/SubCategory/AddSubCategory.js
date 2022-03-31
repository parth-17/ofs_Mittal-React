import axios from "axios";
import React, { useState } from "react";

export const AddSubCategory = () => {
  const [subcategoryName, setsubcategoryName] = useState("");
  const [category, setcategory] = useState("");
  const [isActive, setisActive] = useState("");

  var Data = {
    subcategoryName: subcategoryName,
    category: category,
    isActive: isActive,
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/subcategories", Data).then((res) => {
      console.log(res.status);
      console.log(res.data);
      alert("Category Added....");
    });
  };
  return (<div>
   
    <div className=" content-wrapper card-body">
    <h1>Add Sub-Category :-</h1> 

      <form onSubmit={submit}>
        <div className=" form-group">
          <label>Sub-Category Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Product Sub-Category Name "
            onChange={(e) => setsubcategoryName(e.target.value)}
          />
        </div>
        <div className=" form-group">
          <label>Category Id</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Product Category Id "
            onChange={(e) => setcategory(e.target.value)}
          />
        </div><div className=" form-group">
          <label>isActive</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter 0 or 1 "
            onChange={(e) => setisActive(e.target.value)}
          />
        </div>
<button type="submit" class="btn btn-primary">Submit</button>

      </form>
    </div>
  </div>
  );
};
