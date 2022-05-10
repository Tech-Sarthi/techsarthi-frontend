import React, { useState } from "react"
import {  sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../../firebase";
import { useNavigate } from "react-router-dom";
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

const ResetPasswordForm = () => {
    let navigate = useNavigate();
    const [email,setEmail]=useState("");
  const handleSubmit = () => {
    // console.log('Success:', values);
              console.log(email);
              sendPasswordResetEmail(auth,email)
                .then(() => {
                    toast.success("Password reset link is sent to entered mail ID");
                    navigate("/");
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(error);
                    toast.error(`message: ${errorMessage}`);
                        
                });
                setEmail("");
                // console.log(email);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>

      <Form.Item name="email" label="Email" rules={[{ type: 'email' },{ required: true }]}>
        <Input name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
};

// export default Demo;

const ResetPassword=()=>{
    return (
        <div>
            <p>Reset Password</p>
            <ResetPasswordForm />
        </div>
    )
}

export default ResetPassword;