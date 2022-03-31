import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UpdateProduct = () => {
  var id = useParams().productId;
  console.log("Id--", id);

  const [data, setData] = useState("");
  const [categoryList, setcategoryList] = useState([]);
  const [subcategoryList, setsubcategoryList] = useState([]);
  const [brandList, setbrandList] = useState([]);
  const [productName, setproductName] = useState(data.productName);
  const [baseprice, setBaseprice] = useState(data.baseprice);
  const [category, setCategory] = useState(data.category);
  const [subcategory, setSubcategory] = useState(data.subcategory);
  const [brand, setbrand] = useState(data.brand);

  const getData = () => {
    axios.get(`http://localhost:4001/products/${id}`).then((res) => {
      setData(res.data.data);
      console.log("--", res.data.data);
    });

    axios.get(`http://localhost:4001/categories`).then((res) => {
      setcategoryList(res.data.data);
      console.log("--", res.data.data);
    });

    axios.get(`http://localhost:4001/subcategories`).then((res) => {
      setsubcategoryList(res.data.data);
      console.log("--", res.data.data);
    });

    axios.get(`http://localhost:4001/brands`).then((res) => {
      setbrandList(res.data.data);
      console.log("--", res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("product - Data", data);


  const update = (e) => {
    var updatedData = {
      productName: productName,
      baseprice: baseprice,
      category: category,
      subcategory: subcategory,
      brand: brand,
    };
    e.preventDefault();

    axios
      .put(`http://localhost:4001/products/${id}`, updatedData)
      .then((res) => {
        alert("Data updated...");
      });
  };

  return (
    <div className=" content-wrapper card-body">

      {data.category !== undefined &&
      data.subcategory !== undefined &&
      data.brand !== undefined ? (
      <form onSubmit={update}>
        <div className=" form-group">
          <label>Product Name</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.productName}
            onChange={(e) => setproductName(e.target.value)}
          />
        </div>
        <div className=" form-group">
          <label>Base Price</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.baseprice}
            onChange={(e) => setBaseprice(e.target.value)}
          />
        </div>
        <div className=" form-group">
          <label>Category</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className=" form-group">
          <label>Sub-Category</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />
        </div>
        <div className=" form-group">
          <label>Brand</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.brand}
            onChange={(e) => setbrand(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      ) :("Loading....")
      }
    </div>
  );
};
