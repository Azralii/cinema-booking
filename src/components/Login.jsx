import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')




    const handleLogin =(e)=>{
        e.preventDefault()
        if(email == "" || password == ''){
            alert('Please fill all fileds')
            return
        }

        fetch(`http://localhost:9999/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
            localStorage.setItem('userDetails',JSON.stringify(data))
            localStorage.setItem('authToken',data.token)
            window.location.href = '/'
        }).catch(err=>{
            console.log('error while signup',err)
        })
    }


  return (
    <div className="container">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
