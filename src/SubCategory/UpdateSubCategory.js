import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const UpdateSubCategory = () => {
  var id = useParams().id;
  console.log("Id--", id);

  const [data, setdata] = useState("");
  const [subcategoryName, setsubcategoryName] = useState(data.subcategoryName);
  const [category, setcategory] = useState(data.category);
  const [isActive, setisActive] = useState(data.isActive);

  const getData = () => {
    axios.get(`http://localhost:4001/subcategories/${id}`).then((res) => {
      setdata(res.data.data);
      console.log("--", res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const update = (e) => {
    var updatedData = {
      subcategoryName: subcategoryName,
      category: category,
      isActive: isActive,
    };
    e.preventDefault();

    axios
      .put(`http://localhost:4001/subcategories/${id}`, updatedData)
      .then((res) => {
        alert("Data Updated.....");
      });
  };
  return (
  <div>
    <div className=" content-wrapper card-body">
    <h1>This is Update Sub-Category </h1> 
      <form onSubmit={update}>
        <div className=" form-group">
          <label>Sub-Category Name</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.subcategoryName}
            onChange={(e) => setsubcategoryName(e.target.value)}
          />
        </div>
        <div className=" form-group">
          <label>Category Id</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.category}
            onChange={(e) => setcategory(e.target.value)}
          />
        </div><div className=" form-group">
          <label>isActive</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.isActive}
            onChange={(e) => setisActive(e.target.value)}
          />
        </div>
<button type="submit" class="btn btn-primary">Submit</button>

      </form>
    </div>
  </div>
  );
};
