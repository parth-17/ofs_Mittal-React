import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashbord } from "./Admin_Componant/Dashbord";
import { Login } from "./Login/Login";
import { VendorDashbord } from "./Vendor_Componant/VendorDashbord";
// import { AddRole } from "./Role/AddRole";
// import { Adduser } from "./User/Adduser";
// import { useEffect, useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

function App() {
  //   const [isLoading, setisLoading] = useState(false);

  //   useEffect(() => {
  //     setisLoading(true);

  //     setTimeout(() => {
  //       setisLoading(false);
  //     }, 200);
  //     return () => {};
  //   }, []);

  return (
    <div className="wrapper">
      {/* <AddProduct /> */}
      {/* <AddRole/> */}
      {/* <Adduser/> */}
      {/* {isLoading ? (
        <ClipLoader />
      ) : ( */}
      <>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admindashbord/*" element={<Dashbord />}></Route>
          <Route path="/VendorDashbord/*" element={<VendorDashbord />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </>
      {/* )} */}
    </div>
  );
}

export default App;
