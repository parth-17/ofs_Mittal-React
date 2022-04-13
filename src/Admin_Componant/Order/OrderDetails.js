import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const OrderDetails = () => {
    var id = useParams().id;

    const [userList, setuserList] = useState([]);
    
    

    const getData = () => {
        
      axios.get(`http://localhost:4001/ordersdetailsbyid/${id}`).then((res) => {
        console.log(res.data.data);
        // console.log("rolename",res.data.data[0].role.roleName);
        // console.log("isActive",res.data.data[0].isActive);
  
        setuserList(res.data.data);
        console.log('set data',res.data.data)
      });
    };
  
  
    // const DeleteData = (_id) => {
    //   if(window.confirm('Are you sure'))
    //   {
    //     axios.delete(`http://localhost:4001/users/${_id}`).then((res) => {
    //       alert(res.status);
    //     });
    //   }
    // };
  
  
    useEffect(() => {
      getData();
    }, []);
  
  
  return (
    <div className='container'>OrderDetails</div>
  )
}
