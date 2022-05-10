import React, { useState,useEffect } from "react"
import {  isSignInWithEmailLink, signInWithEmailLink, updatePassword } from "firebase/auth";
import {auth} from "../../firebase";
import { useNavigate } from "react-router-dom";
import {createOrUpdateUser} from "../../functions/auth";
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

const CompleteRegistrationForm = () => {
    let navigate = useNavigate();
    let mail=window.localStorage.getItem('emailForSignIn');
    let isValidLink=isSignInWithEmailLink(auth, window.location.href);
    if (  !isValidLink) {
        toast.error("Invalid link");
        setTimeout(()=>window.location.href = "/register",3000);
    }
    const initialState={
        name:"",
        enrollment_no:"",
        email:mail,
        program:"",
        year:0,
    };
    const [values,setValues]=useState(initialState);
    const [password,setPassword]=useState({
        pass1:"",
        pass2:"",
    });
    useEffect(()=>{
        if(!values.email && isValidLink)
        {
            setValues({...values,email:window.prompt('Please provide your email for confirmation')});
        }
    },[values.email])
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
        // console.log(e.target.name,"---------",e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword({...password,[e.target.name]:e.target.value})
        // console.log(e.target.name,"---------",e.target.value);
    }
  const handleValidation=()=>{
      let verify =true;
    //   console.log(values);
      if(!(values.email.length > 11) || !(values.email.substring(values.email.length-11)===".iitr.ac.in"))
      {
          verify=false;
          toast.error("Register with Gsuit Id");
      }
      else if(password.pass1 != password.pass2)
      {
          verify=false;
          toast.error("passwords does not match");
      }
      else if(!(password.pass1.length > 6 ))
      {
          verify=false;
          toast.error("password must be greater than 6 characters");
      }
      return verify;
  }
  const handleSubmit = () => {
    if(handleValidation())
    {
        console.log(values);
        signInWithEmailLink(auth, values.email, window.location.href)
            .then((result) => {
                window.localStorage.removeItem('emailForSignIn');
                const user = auth.currentUser;
                if(result.user.emailVerified)
                {
                    updatePassword(user, password.pass1)
                    .then(async() => {
                        toast.success("Registration Completed");
                        console.log("password login successfull");
                        const tokenId=await user.getIdTokenResult();
                        createOrUpdateUser(tokenId.token,values)
                        .then((res)=>{
                          console.log("user saved successfully",res)
                          navigate("/")
                        })
                        .catch(()=>console.log("token failed !!!"))
                     })
                    .catch((error) => {
                        console.log("error",error.message);
                        navigate('/register');
                    });
                    }
                    else{
                        navigate('/register');
                    }
            })
            .catch((error) => {
                console.log("error",error.message);
                toast.error(error.message);
            });
    }
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input name="name" onChange={handleChange} value={values.name}/>
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ type: 'email' },{ required: true }]}>
        <Input name="email" onChange={handleChange} value={values.email}/>
      </Form.Item>

      <Form.Item name="enrollment_no" label="Enrollment_no" rules={[{ required: true }]}>
        <Input name="enrollment_no" onChange={handleChange} value={values.enrollment_no}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="pass1"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password name="pass1" onChange={handlePasswordChange} value={password.pass1}/>
      </Form.Item>

      <Form.Item
        label="Comfirm Password"
        name="pass2"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password name="pass2" onChange={handlePasswordChange} value={password.pass2}/>
      </Form.Item>

      <Form.Item name="branch" label="Branch" rules={[{ required: true }]}>
      <Input name="branch" onChange={handleChange} value={values.branch}/>
      </Form.Item>

      <Form.Item name="year" label="Year" rules={[{ required: true }]}>
        <Input name="year" onChange={handleChange} value={values.year}/>
      </Form.Item>
      
      <Form.Item name="program" label="Program" rules={[{ required: true }]}>
      <Input name="program" onChange={handleChange} value={values.program}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

// export default Demo;

const CompleteRegistration=()=>{
    return (
        <div>
            <p>Enter Details</p>
            <CompleteRegistrationForm />
        </div>
    )
}

export default CompleteRegistration;