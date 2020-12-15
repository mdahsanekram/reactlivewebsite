import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Menu from './Menu';


class ShowData extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {

            username :"",
            email : "",
            mobile : "",
            gender : "",
            address : "",
            city : "",
            state : "",
            pincode : "",
            data : []
        }
    }



    componentDidMount()
    {

        axios.post('http://localhost/firstproject/ShowData.php')

            .then((response)=>{
               

                

                this.setState({data  :  response.data});
               // Document.getElementById('requestSend').interHTML = "Reuest sending...";
               console.log(this.state.data);

            }).catch(function(error)
            {
                alert(error);
            })




    }



    render()
    {


        return (

                <div>

                <Menu />

<table class="table">
  <caption  className="h"><h1 >List of users</h1></caption>
  <thead>
    <tr>
      <th scope="col">Id </th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      <th scope="col">Pincode</th>

    </tr>
  </thead>
  <tbody>
    {

        this.state.data.map((user,index)=>(




            <tr key={user.id}>
               <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.state}</td>
                <td>{user.city}</td>
                <td>{user.pincode}</td>

            </tr>
        ))

    }
  </tbody>
</table>



                </div>

        )





    }
}


export default ShowData;