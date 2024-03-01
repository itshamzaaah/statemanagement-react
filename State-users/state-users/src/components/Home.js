import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom";


const Home = () => {

  const history = useHistory();


    //using state to store data from the sign up fields
    // on clicking the button submit

    const [InputValue,setInputValue] = useState({
        name:"",
        email:"",
        date:"",
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

    //validation 

    const {name,email,date,password} = InputValue;


    if(name === ""){
        alert("Name field is required")
    }else if(email === ""){
        alert("Email field is required")
    }else if(!email.includes("@")){
        alert("Enter valid email address")
    }else if(date === ""){
        alert("Date field is required")
    }else if(password === ""){
        alert("Password field is required")
    }else if(password.length<5){
        alert("Password must be more then 5 character")
    }else{
        console.log("success");


        //fields data store in localStorage in JSON 

        localStorage.setItem("USER",JSON.stringify([...data,InputValue]));
        history.push("/login");

    }



 }







  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-4" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6 mb-2">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                
                <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />
              
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
              
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                
                <Form.Control onChange={getdata} name="date" type="date"  />
              
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>
             
              <Button variant="primary" className="col-lg-6" onClick={addData} type="submit">
                Submit
              </Button>
            </Form>

            <p className="mt-3">Already Have an Account <span> <NavLink to = "/login">Sign in</NavLink> </span></p>
          </div>
        <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
