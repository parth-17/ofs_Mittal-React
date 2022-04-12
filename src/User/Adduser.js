import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Adduser = () => {
  const [roleList, setroleList] = useState([]);
  const [stateList, setstateList] = useState([]);
  const [cityList, setcityList] = useState([]);

  const [firstName, setfirstName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobileNum, setmobailNum] = useState("");
  const [gender, setgender] = useState("");
  const [isActive, setisActive] = useState("");
  const [role, setrole] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");

  const roleData = async () => {
    await axios.get("http://localhost:4001/roles").then((res) => {
      console.log("role List-----", res.data.data);
      setroleList(res.data.data);
    });

    axios.get("http://localhost:4001/states").then((res) => {
      console.log("state List---", res.data.data);
      setstateList(res.data.data);
    });

    axios.get("http://localhost:4001/cities").then((res) => {
      console.log("cities List---", res.data.data);
      setcityList(res.data.data);
    });
  };

  const roleOnChangeHandler = (e) => {
    setrole(e.target.value);
    console.log("roleId: ", e.target.value);
  };

  const stateOnChangeHandler = async (e) => {
    var stateid = e.target.value;
    console.log("state Id :", e.target.value);
    setstate(e.target.value);

    await axios
      .get(`http://localhost:4001/citiesbystateid/${stateid}`)
      .then((res) => {
        setcityList(res.data.data);
        console.log("city List---", res.data.data);
      });
  };

  const cityOnChangeHandler = async (e) => {
    console.log("city-id", e.target.value);
    setcity(e.target.value);
  };

  useEffect(() => {
    roleData();
  }, []);

  const submit = (e) => {
    e.preventDefault();

    var Data1 = {
      firstName: firstName,
      email: email,
      password: password,
      mobileNum: mobileNum,
      gender: gender,
      role: role,
      isActive: isActive,
    };
    var Data2 = {
      vendorName: firstName,
      address: address,
      email: email,
      contactNumber: mobileNum,
      pincode: pincode,
      //  user:user,
      state: state,
      city: city,
      isActive: isActive,
    };

    if (role == "62493c6379dd4902ea8995bc") {
      axios.post("http://localhost:4001/vendor", Data2).then((res) => {
        console.log(res.status);
        console.log(res.data);

        console.log("new data: ",Data2)
        toast.success('Vendor Added...', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
    } else {
      axios.post("http://localhost:4001/users", Data1).then((res) => {
        console.log(res.status);
        console.log(res.data);

        toast.success("User Added...", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }

    // if (firstName !== "" && address !== '' && email !== '' && mobileNum !== '' && pincode !== '' && state !== '' && city !== '' && isActive !== '') {

    // }
    // else alert("Fill All Details Are Require For Vendor")
  };
  return (
    <div className="content-wrapper card-body ">
      <form onSubmit={submit}>
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            required
            class="form-control"
            onChange={(e) => setfirstName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            required
            class="form-control"
            onChange={(e) => setemail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            required
            class="form-control"
            onChange={(e) => setpassword(e.target.value)}
          />

          <label>Mobail Number</label>
          <input
            type="text"
            required
            class="form-control"
            onChange={(e) => setmobailNum(e.target.value)}
          />

          {/* Gendor */}
          <div className="form-group" data-select2-id="55"></div>
          <label>Gender</label>
          <select
            className="form-control select2 select2-hidden-accessible "
            data-select2-id="9"
            aria-hidden="true"
            tabindex="-1"
            onChange={(e) => setgender(e.target.value)}
          >
            <option selected>Male</option>
            <option selected>Female</option>
          </select>

          <div className=" form-group" data-select2-id="5">
            <label>Role Name</label>
            <select
              className="form-control select2 select2-hidden-accessible"
              data-select2-id="9"
              tabindex="-1"
              aria-hidden="true"
              required
              onChange={(e) => roleOnChangeHandler(e)}
              placeholder="enter role"
            >
              <option>Select---</option>
              {roleList.map((role) => {
                if (role._id != "620c892f63551bfea59868d3") {
                  return (
                    <option value={role._id} data-select2-id="3">
                      {role.roleName}
                    </option>
                  );
                }
              })}
            </select>
          </div>

          {role == "62493c6379dd4902ea8995bc" ? (
            <>
              <div className="form-group">
                <label>Address</label>
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="Enter Your Parmanent Address..."
                  defaultValue={""}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>

              <div className=" form-group" data-select2-id="55">
                <label>State</label>
                <select
                  className="form-control select2 select2-hidden-accessible"
                  data-select2-id="9"
                  tabindex="-1"
                  aria-hidden="true"
                  required
                  onChange={(e) => stateOnChangeHandler(e)}
                >
                  <option>Select---</option>
                  {stateList.map((state) => {
                    return (
                      <option value={state._id} data-select2-id="3">
                        {state.stateName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className=" form-group" data-select2-id="55">
                <label>City</label>
                <select
                  className="form-control select2 select2-hidden-accessible"
                  data-select2-id="9"
                  tabindex="-1"
                  aria-hidden="true"
                  required
                  onChange={(e) => cityOnChangeHandler(e)}
                >
                  <option>Select---</option>
                  {cityList.map((city1) => {
                    return (
                      <option value={city1._id} data-select2-id="3">
                        {city1.cityName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <label>Pincode</label>
              <input
                type="text"
                required
                class="form-control"
                onChange={(e) => setpincode(e.target.value)}
              />
            </>
          ) : (
            ""
          )}

          <label>isActive</label>
          <input
            required
            type="text"
            class="form-control"
            onChange={(e) => setisActive(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};
