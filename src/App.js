import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./components/nav/Header";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import About from "./components/About/About";
import Admin from "./pages/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompleteRegistration from "./pages/auth/CompleteRegistration";
import ResetPassword from "./pages/auth/ResetPassword";
import Team from "./pages/team/Team";
import Footer from "./components/footer/footer";

require("typeface-quantico");
require("typeface-heebo");

function App() {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route
            exact
            path="/register/complete"
            element={<CompleteRegistration />}
          />
          <Route exact path="/forgot/password" element={<ResetPassword />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/team" element={<Team />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
