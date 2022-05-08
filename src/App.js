import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./components/nav/Header"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
    </>
  );
}

export default App;
