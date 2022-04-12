import axios from "axios";
import React ,{useState , useEffect} from "react";

// vendorName:vendorName,
// address:address,
// email:email,
// contactNumber:contactNumber,
// pincode:pincode,
// user:user,
// state:state,
// city:city,
// isActive:req.body.isActive

export const AddVendor = () => {
  const [vendorName, setvendorName] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState('');
  const [contactNumber, setcontactNumber] = useState('')
  const [pincode, setpincode] = useState('')
  const [user, setuser] = useState('')
  const [state, setstate] = useState('')
  const [city, setcity] = useState('')
  const [isActive, setisActive] = useState('')

  const vendorNameChangeHAndler = (e) => {
    setvendorName(e.target.value);
  };

  var Data = {
    vendorName: vendorName,
    email:email,
    address:address,
    contactNumber:contactNumber,
    pincode:pincode,
    user:user,
    state:state,
    city:city,
    isActive:isActive
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/vendor', Data).then((res) => {
      console.log(res.status);
      console.log(res.data);
    });
  };

//   useEffect(() => {
//     AddVendor();
//   }, []);
  return (
    <div  className="container content-wrapper card-body">
      <h3>Add Vendor :-</h3>
      <form onSubmit={submit}>
        <div className=" form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Vendor First Name "
            onChange={(e) => vendorNameChangeHAndler(e)}
          />
          <label>Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Email "
            onChange={(e) =>setemail(e.target.value)}
          />
          <label>Address</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Address "
            onChange={(e) =>setaddress(e.target.value)}
          />
          <label>Mobile Number</label>
          <input
            type="text"
            class="form-control"
            placeholder="9876xxxxxx"
            onChange={(e) =>setcontactNumber(e.target.value)}
          />
          <label>Pincode</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) =>setpincode(e.target.value)}
          />
          <label>User</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter User"
            onChange={(e) =>setuser(e.target.value)}
          />
          <label>State</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter state"
            onChange={(e) =>setstate(e.target.value)}
          />
          <label>City</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter City"
            onChange={(e) =>setcity(e.target.value)}
          />
          <label>isActive</label>
          <input
            type="Number"
            placeholder="Enter 0 or 1"
            class="form-control"
            onChange={(e) =>setisActive(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
