import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';
import Menu from './Menu';

class RegistrationForm extends Component
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
            pincode : ""
        }
    }

    handleChange = (event) =>{

        this.setState({[event.target.name] : event.target.value});
    }


    handleSubmit = (event) =>
    {
           event.preventDefault();

       
           
            let fdata= new FormData();

            fdata.append("username",this.state.username);
            fdata.append("email",this.state.email);
            fdata.append("mobile",this.state.mobile);
            fdata.append("gender",this.state.gender);
            fdata.append("adderss",this.state.address);
            fdata.append("city",this.state.city);
            fdata.append("state",this.state.state);
            fdata.append("pincode",this.state.pincode);

           
            axios.post('http://localhost/firstproject/FormFill.php',fdata)

            .then((response)=>{
                this.setState({username : " "});
                this.setState({email : " "});
                this.setState({ mobile : " "});
                this.setState({gender : " "});
                this.setState({address : " "});
                this.setState({city : " "});
                this.setState({pincode : " "});

                alert(response.data);

               // Document.getElementById('requestSend').interHTML = "Reuest sending...";


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

        <div  className="styl">
           
           <form className="col-md-12"  onSubmit={this.handleSubmit}>
          <p><h1 >Registration Form</h1></p> <br></br>
             <div className="form-group">

                        <div className="form-group col-md-12">
                          <label for="validationTooltip01">Name</label>
                          <input type="text" className="form-control" id="validationTooltip01" placeholder="Name"  name="username" value={this.state.username}  onChange={this.handleChange}  required/>
                          
                        </div>

                        <div className="form-group col-md-12" >
                      <label for="inputGender">Gender</label>
                      <select id="inputGender" className="form-control" name="gender" value={this.state.gender}  onChange={this.handleChange} >
                        <option selected>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                     </div>
                       
                        <div className="form-group col-md-12">
                        <label for="inputAddress">Mobile</label>
                        <input type="text" className="form-control" id="inputMobile" placeholder="9876543210" name="mobile" value={this.state.mobile}  onChange={this.handleChange} required/>
                        </div>

                        <div className="form-group col-md-12">
                          <label for="inputEmail4">Email</label>
                          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name="email" value={this.state.email}  onChange={this.handleChange} required/>
                        </div>

                        <div className="form-group col-md-12">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Main St" name="address"  value={this.state.address}  onChange={this.handleChange} required/>
                        </div>
                       
                </div>
             


             <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputCity">City</label>
                      <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city}  onChange={this.handleChange}/>
                    </div>

                    <div className="form-group col-md-4" >
                      <label for="inputState">State</label>
                      <select id="inputState" className="form-control" name="state" value={this.state.state}  onChange={this.handleChange} >
                        <option selected>Choose...</option>
                        <option>Asam</option>
                        <option>Bangal</option>
                      </select>
                     </div>

            <div className="form-group col-md-2">
              <label for="inputZip">Pincode</label>
              <input type="text" className="form-control" id="inputZip" name="pincode" value={this.state.pincode}  onChange={this.handleChange} />
            </div>

            
        
           
             <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
        
      </form>

      </div>
           
    </div>
           
           
           
        );
    }
}



export default RegistrationForm;