import React, { useState, useEffect } from "react";
import TextField from "../../components/Text_Field";
import Button from "../../components/Button";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Index = () => {
  const [user, setUser] = useState([]);
  const [donation, setDonation] = useState([]);
  const [needDonation, setNeedDonation] = useState([]);
  const email = sessionStorage.uEmail;

  const [formData, setFormData] = useState({
    firstName: "", // Initialize with empty strings
    lastName: "",
    password: "",
    district: "",
    mobileNo: "",
  });

  const [password, setPassword] = useState({
    firstName: "", // Initialize with empty strings
    lastName: "",
    password: "",
    district: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleDelete = async (id) => {
    // Ask the user for confirmation
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/product/deleteProduct/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Product deleted successfully, you can redirect or show a success message
          alert("Product deleted successfully!");
          // Remove the deleted product from the state
        } else {
          // Handle errors, show an error message, or log the error
          alert("Failed to delete product. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        // Handle the error (e.g., show an error message to the user)
      }
    }
    fetchDonation();
    fetchData();
  };

  const handleNeedDelete = async (id) => {
    // Ask the user for confirmation
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/need/deleteNeed/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Product deleted successfully, you can redirect or show a success message
          alert("Product deleted successfully!");
          // Remove the deleted product from the state
        } else {
          // Handle errors, show an error message, or log the error
          alert("Failed to delete product. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        // Handle the error (e.g., show an error message to the user)
      }
    }
    fetchNeedData();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/user/updateUser/${email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("User details updated successfully!");
        fetchData(); // Fetch updated user details
      } else {
        alert("Failed to update user details. Please try again.");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handlePassowrd = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/user/updateUser/${email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(password),
        }
      );

      if (response.ok) {
        alert("Password updated successfully!");
        fetchData(); // Fetch updated user details
      } else {
        alert("Failed to update user details. Please try again.");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/user/getUser/${email}`
      );
      const json = await res.json();
      setUser(json.data[0]);

      setFormData({
        firstName: json.data[0].firstName,
        lastName: json.data[0].lastName,
        password: json.data[0].password,
        district: json.data[0].district,
        mobileNo: json.data[0].mobileNo,
      });

      setPassword({
        firstName: json.data[0].firstName,
        lastName: json.data[0].lastName,
        district: json.data[0].district,
        mobileNo: json.data[0].mobileNo,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDonation = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/product/viewByEmail/${email}`
      );
      const json = await res.json();
      setDonation(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchNeedData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/need/viewByEmail/${email}`
      );
      const json = await res.json();
      setNeedDonation(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("cc0", donation);

  console.log("user d : ", user.email);

  useEffect(() => {
    fetchNeedData();
    fetchData();
    fetchDonation();
  }, [email]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div className="p-10 m-10 rounded-2xl bg-slate-300 w-[80%] mx-auto">
        <h1 className="m-10 text-xl font-bold tracking-wider">
          Account Details
        </h1>
        <form onSubmit={handleUpdate}>
          <br />
          <div className="ml-10 mr-10 ">
            <div className="grid grid-cols-2 ">
              <div className="mr-1">
                <TextField
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>
              <div className="ml-1">
                <TextField
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
            </div>

            <TextField
              name="district"
              type="text"
              label="District"
              placeholder="District"
              onChange={handleChange}
              value={formData.district}
            />
            <TextField
              name="mobileNo"
              type="text"
              label="Mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              value={formData.mobileNo}
            />
          </div>

          <div className="pt-5 mt-10">
            <hr className="h-4 ml-10 mr-10 w-5-6 " />
          </div>

          <div className="flex justify-end mr-10">
            <Button
              type="submit"
              className={twMerge(
                "  !bg-teal-600   border-green-200 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[10px] hover:scale-105"
              )}
            >
              <span
                className={twMerge(
                  "!text-green-200 text-[10px] font-[900] uppercase tracking-[2px] hover:scale-100"
                )}
              >
                Update Details
              </span>
            </Button>
          </div>
        </form>
        <div className="ml-10 mr-10">
          <TextField
            name="password"
            type="password"
            label="Password"
            placeholder="Add new password here"
            onChange={handleChange}
            value={password.password}
          />
          <div className="pt-5 mt-10">
            <hr className="h-4 ml-10 mr-10 w-5-6 " />
          </div>
          <div className="flex justify-end ">
            <Button
              onClick={handlePassowrd}
              className={twMerge(
                "  !bg-teal-600   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[10px] hover:scale-105"
              )}
            >
              <span
                className={twMerge(
                  "!text-green-200 text-[10px] font-[900] uppercase tracking-[2px] hover:scale-100"
                )}
              >
                Update Password
              </span>
            </Button>
          </div>
        </div>

        <div></div>
      </div>

      <div className="flex flex-col items-center justify-center w-[80%] mx-auto">
        <h1 className="m-10 text-xl font-bold tracking-wider">
          Product Details
        </h1>
        <table className="w-full p-8 shadow-2xl rounded-xl">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-semibold leading-4 tracking-wider text-center text-gray-100 uppercase bg-teal-600">
                Model
              </th>
              <th className="px-6 py-3 text-xs font-semibold leading-4 tracking-wider text-center text-gray-100 uppercase bg-teal-600">
                Price(LKR)
              </th>
              <th className="px-6 py-3 text-xs font-semibold leading-4 tracking-wider text-center text-gray-100 uppercase bg-teal-600">
                Image
              </th>
              <th className="px-6 py-3 text-xs font-semibold leading-4 tracking-wider text-center text-gray-100 uppercase bg-teal-600">
                Actions
              </th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {donation ? (
              donation.map((option, index) => (
                <tr key={option._id} className="hover:bg-gray-50 ">
                  <td className="px-6 py-4 text-sm leading-5 text-center text-gray-800 whitespace-nowrap">
                    {option.modelName}
                  </td>
                  <td className="px-6 py-4 text-sm leading-5 text-center text-gray-800 whitespace-nowrap">
                    {option.price}
                  </td>
                  <td className="flex items-center justify-center px-6 py-4 text-sm leading-5 text-center text-gray-800 whitespace-nowrap">
                    <img
                      src={option.image}
                      className="rounded-2xl border opacity-[1] duration-300 ease-in hover:scale-110 hover:border-gradient-yellow-900 hover:opacity-[1] md:h-[30px] md:min-w-[20px] lg:h-[80px]"
                      alt={option.item}
                    />
                  </td>
                  <td className="px-6 py-4 text-sm leading-5 text-gray-800 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <button
                        className="w-1/3 h-full text-white bg-rose-700 rounded-xl"
                        onClick={() => handleDelete(option._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              // Display a message or component when there's no data
              <tr>
                <td colSpan="4">No data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
