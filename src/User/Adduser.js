import React from 'react'
import {useState} from 'react'
import axios from 'axios'


export const Adduser = () => {
  const [firstName, setfirstName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [mobileNum, setmobailNum] = useState('');
  const [gender, setgender] = useState('');
  const [isActive, setisActive] = useState('');

 

    var Data ={
      firstName: firstName,
      email: email,
      password: password,
      mobileNum: mobileNum,
      gender: gender,
      isActive: isActive,
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:4001/users',Data).then(res =>{
            console.log(res.status)
            console.log(res.data)
        })
    }
    
  return (
    <div>
    <form onSubmit={submit}>
      <div class="form-group">
        <label>First Name</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setfirstName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setemail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setpassword(e.target.value)}
        />

        <label>Mobail Number</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setmobailNum(e.target.value)}
        />

        {/* Gendor */}
        <label>Gender</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setgender(e.target.value)}
        />
        
        <label>isActive</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setisActive(e.target.value)}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  )
}
