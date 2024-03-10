import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login.jsx";
import ProctectLogin from "./auth/ProctectLogin.jsx";
import { SignUp } from "./components/login/SignUp.jsx";
import { Product } from "./components/product/Product.jsx";
import App from "./App.jsx";
import { Alert } from "react-bootstrap";
import NotFound from "./components/NotFound.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";

var user = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Header user={user} />
      <Routes>
        <Route element={<ProctectLogin user={user} />}>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<ProctectLogin user={user} redirect="/" />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </Router>
    <About />
  </React.StrictMode>
);
