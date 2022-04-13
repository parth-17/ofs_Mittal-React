import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashbord } from "./Admin_Componant/Dashbord";
import { Login } from "./Login/Login";
import { AdminLockScreen } from "./Login/AdminLockScreen";

function App() {
  return (
    <div className="wrapper">
      {/* <AddProduct /> */}

      <Routes>
        <Route path="/" element={<AdminLockScreen />}></Route>
        <Route path="/*" element={<Dashbord />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
