
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/Logo.png";
import TextField from "../../components/Text_Field";

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    district: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Email and password are required.");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Successfully Registered");
        window.location.href = "/sign-in";
      } else if (response.status === 409) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side - Branding */}
      <div className="flex flex-col items-center justify-center w-1/2 p-10 text-white bg-gradient-to-r from-teal-500 to-teal-700">
        <img src={logo} alt="logo" className="w-40 mb-6" />
        <h1 className="text-3xl font-bold">Join goDonateMe</h1>
        <p className="mt-2 text-lg">Sign up and start your journey with us.</p>
      </div>
      
      {/* Right Side - Signup Form */}
      <div className="flex items-center justify-center w-1/2 p-10">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <TextField name="fname" type="text" placeholder="First Name" onChange={handleChange} />
              <TextField name="lname" type="text" placeholder="Last Name" onChange={handleChange} />
            </div>
            <TextField name="email" type="email" placeholder="E-mail Address" onChange={handleChange} />
            <TextField name="password" type="password" placeholder="Password" onChange={handleChange} />
            <TextField name="district" type="text" placeholder="District" onChange={handleChange} />
            <TextField name="mobile" type="text" placeholder="Mobile Number" onChange={handleChange} />
            
            <button type="submit" className="w-full py-2 mt-4 text-white transition bg-teal-600 rounded-lg hover:bg-teal-700">Sign Up</button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account? <Link to="/sign-in" className="font-bold text-teal-600">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
