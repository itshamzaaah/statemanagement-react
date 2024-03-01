import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom"

const Details = () => {
  const [loginData, setloginData] = useState([]);
  // console.log(loginData);

  const history = useHistory();

  var todayDate = new Date().toISOString().slice(0, 10);

  //bootstrap popup model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const Birthday = () => {
    const getuser = localStorage.getItem("login_details");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      //console.log(user);
      setloginData(user);

      const userbirth = loginData.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 1000);
      }
    }
  };

  const userLogOut = ()=>{
    localStorage.removeItem("login_details");
    history.push("/");
  }
  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {loginData.length === 0 ? (
       
       <div
       className="modal show"
       style={{ display: 'block', position: 'initial' }}
     >
       <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Register Yourself</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>To Access this Page, You have to register your Account.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"onClick={()=>history.push("/")}>Register</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </div>
      ) : (
        <>
          <h1>Details Page</h1>
          <Button onClick={userLogOut}>LogOut</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Successfully Login </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you are successfully login to detail Page!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default Details;
