import React, { useEffect, useState } from "react";
import {Form, Button } from "react-bootstrap";

const Formulario = () => {

  const [data, setData]= useState({
    name:'',
    email:'',
    name1:'',
    email1:'',
    name2:'',
    email3:'',
  });

  const {name, email}= data

  const handleSubmit= e =>{
    e.preventDefault()
  }
  const handleInputChange= ({target}) =>{
    console.log(target);
    setData({
      ...data,
      [target.name]: target.value
    })
  }

  useEffect(() => {
    ///Montaje
    console.log('Mount to charge');
    return () => {
      //Desmontaje
      console.log('Dis-Mount');
    }
  }, [name])
  

  // setData({
  //   name:'Hi',
  //   name2:'Hi',
  //   name3:'Hi',
  //   email:'Whats up',
  //   email2:'Whats up',
  //   email3:'Whats up',

  //   [target.name]: target.value

  // })

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Text" name="name" placeholder="Enter your Name" value={name} onChange={handleInputChange}/>      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={handleInputChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
