import React, { useState,useEffect } from "react"
import {  sendSignInLinkToEmail } from "firebase/auth";
import {auth} from "../../firebase";
import { useNavigate } from 'react-router-dom';
import {register_redirect_url} from "../../const"
import { Form, Input, Button } from 'antd';
import { toast } from "react-toastify";
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

const RegisterForm = () => {
    let navigate = useNavigate();
    const [email,setEmail]=useState('');
  const handleValidation=()=>{
      let verify =true;
      if(!(email.length > 11) || !(email.substring(email.length-11)===".iitr.ac.in"))
      {
          verify=false;
          toast.error("Register with Gsuit Id");
      }
      return verify;
  }
  const handleSubmit = (values) => {
    if(handleValidation())
    {
        const actionCodeSettings = {
            url:register_redirect_url,
            handleCodeInApp: true
          };
            sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
                toast.success("Email link is sent to entered mail ID");
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`${errorCode} : ${errorMessage}`);
                    
            });
            setEmail("");
            console.log(email);
    }
  };

  return (
   
    <form classname="login-form" validateMessages={validateMessages}>
    <label classname="input">
      EMAIL:
      <input type="text"
        name="email"
        onChange={(e)=>{setEmail(e.target.value);}}
        value={email}
      />
    </label>
    <button type="primary" onClick={handleSubmit}>
      Register
      </button>
      </form>
  );
};

// export default Demo;

const Register=()=>{
    return (
        <div>
            <p>Register</p>
            <RegisterForm />
        </div>
    )
}

export default Register;