import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./auth.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const LoginForm = () => {
  let navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        toast.success("Login Successfull");
        const user = userCredential.user;
        const tokenId = await user.getIdTokenResult();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="login-form">
      <div>TECH SARTHI</div>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={values.email}
        placeholder="Email ID"
      />
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={values.password}
        placeholder="Password"
      />
      <Link to="/forgot/password">Forgot Password?</Link>
      <button type="primary" onClick={handleSubmit}>
        Login
      </button>
      <Link to="/register">
        <button type="primary" onClick={handleSubmit}>
          Register
        </button>
      </Link>
    </div>
  );
};

// export default Demo;

const Login = () => {
  return (
    <div className="login-page">
      <p>Login</p>
      <LoginForm />
    </div>
  );
};

export default Login;
