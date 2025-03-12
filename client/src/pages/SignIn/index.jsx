

import React, { useState } from "react";
import logoIn from "../../assests/images/logo_in.png";
import TextField from "../../components/Text_Field";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      window.alert("Email and password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log("login response :", result);

      if (result.isSuccess) {
        window.alert("Login successful");
        sessionStorage.setItem("uEmail", email);
        Cookies.set("isLogin", "true");
        navigate("/");
      } else {
        window.alert(result.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
      window.alert("Login failed");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image Section */}
      <div className="flex flex-col items-center justify-center w-1/2 p-10 text-white bg-gradient-to-r from-teal-600 to-teal-400">
        <img src={logoIn} alt="Logo" className="w-3/5 mb-6" />
        <h2 className="text-3xl font-bold">Welcome Back!</h2>
        <p className="mt-2 text-lg">
          Sign in to continue and manage your account.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center w-1/2">
        <div className="w-3/4 p-10 bg-white shadow-lg h-2/3 rounded-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-center">Sign in</h2>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <TextField
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <TextField
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-teal-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 text-white transition bg-teal-600 rounded-lg hover:bg-teal-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
