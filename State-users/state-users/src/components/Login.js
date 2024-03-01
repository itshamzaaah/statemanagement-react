import React, { useState } from 'react'
 import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom";

const Login = () => {




  const history = useHistory();









    //using state to store data from the sign up fields
    // on clicking the button submit

    const [InputValue,setInputValue] = useState({
        email:"",
        password:""
    })

    //this state will be empty, to store the fields in that state firstly
    
    const [data,setdata] = useState([]);
    console.log(InputValue);



    // getting the input data 
    const getdata = (e) => {
       // console.log(e.target.value);

      // object destructing
       const {value,name} = e.target; 
      // console.log(value,name);

      setInputValue(()=>{
        return {
            ...InputValue,
            [name]:value
        }
      })



    }

 const addData = (e)=>{
    e.preventDefault();

    //getting the User fields data
    const getUserArr = localStorage.getItem("USER");
    console.log(getUserArr);

    //validation 

    const {email,password} = InputValue;


      

    if(email === ""){
        alert("Email field is required")
    }else if(!email.includes("@")){
        alert("Enter valid email address")
    }else if(password === ""){
        alert("Password field is required")
    }else if(password.length<5){
        alert("Password must be more then 5 character")
    }else{


        if(getUserArr && getUserArr.length){

            const Userdata = JSON.parse(getUserArr);  //converted the input data into object

            //comparing the both sign up and sign in data together
            const Userlogin = Userdata.filter((el,k)=>{
                return el.email === email && el.password === password
            });

            if(Userlogin.length === 0){
                alert("Invalid Details")
            }else{
                console.log("User successfully login");


                localStorage.setItem("login_details",JSON.stringify(Userlogin));
                history.push("/details");

            }

            

        }
       
    }



 }

  return (
    <>
          <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-5 p-4" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6 mb-2">Sign In</h3>
            <Form>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                
                < Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
              
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>
             
              <Button variant="primary" className="col-lg-6" onClick={addData} type="submit">
                Submit
              </Button>
  </Form> 

            <p className="mt-3">Haven't an Account <span><NavLink to = "/">Sign up</NavLink> </span></p>
          </div>
         <Sign_img /> 
        </section>
      </div>
    </>
  )
}

export default Login