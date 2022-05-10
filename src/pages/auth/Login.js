import React, { useState,useEffect } from "react"
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { toast } from "react-toastify";
import {Link} from "react-router-dom"
import 'antd/dist/antd.css';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const LoginForm = () => {
    let navigate = useNavigate();
    
    const initialState={
        email:"",
        password:"",
    };
    const [values,setValues]=useState(initialState);
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then(async (userCredential) => {
    toast.success("Login Successfull");
    const user = userCredential.user;
    const tokenId=await user.getIdTokenResult();
    navigate("/");
    })
    .catch((error) => {
    console.log(error.message);
    toast.error(error.message);
    });
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>

      <Form.Item name="email" label="Email" rules={[{ type: 'email' },{ required: true }]}>
        <Input name="email" onChange={handleChange} value={values.email}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password name="password" onChange={handleChange} value={values.password}/>
      </Form.Item>
      <Link to="/forgot/password" className="float-right text-danger">Forgot Password?</Link>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

// export default Demo;

const Login=()=>{
    return (
        <div>
            <p>Login</p>
            <LoginForm />
        </div>
    )
}

export default Login;