

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import TextField from "../../components/Text_Field";
import donation from "../../assests/images/don.png";
import Button from "../../components/Button";

const Index = () => {
  const navigate = useNavigate();
  const email = sessionStorage.uEmail;
  const [productData, setProductData] = useState({
    modelName: "",
    color: "Black", // Default color
    price: "",
    warranty: "",
    imageBase64: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setProductData({
            ...productData,
            imageBase64: reader.result,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !productData.modelName ||
      !productData.color ||
      !productData.price ||
      !productData.warranty ||
      !productData.imageBase64
    ) {
      alert("Please fill in all the fields");
      return; // Exit the function early if any field is empty
    }
    const formData = {
      modelName: productData.modelName,
      color: productData.color,
      price: productData.price,
      warranty: productData.warranty,
      image: productData.imageBase64,
      email: email,
    };

    try {
      const response = await fetch("http://localhost:8000/api/product/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Item added to the system.");
        navigate("/product");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };

  return (
    <div>
      <div className="grid p-10 m-10 bg-gray-100 shadow-2xl rounded-2xl md:h-screen md:grid-cols-6">
        <div className="grid items-center justify-center col-span-2">
          <h1 className="block mb-4 text-3xl font-semibold tracking-wider text-gray-950">
            Add New Item
          </h1>
          <img src={donation} alt="donation" className="w-3/4" />
        </div>
        <div className="col-span-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              name="modelName"
              type="text"
              label="Model Name"
              placeholder="Model Name"
              onChange={handleInputChange}
            />
            <br />
            <label className="block mb-2 text-gray-700">Color</label>
            <select
              name="color"
              value={productData.color}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            >
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Gray">Gray</option>
            </select>
            <br />
            <TextField
              name="warranty"
              type="text"
              label="Warranty"
              placeholder="Warranty"
              onChange={handleInputChange}
            />
            <br />
            <TextField
              name="price"
              type="text"
              label="Price"
              placeholder="Enter Price"
              value={`LKR ${productData.price}`}
              onChange={(e) => {
                const newValue = e.target.value.replace("LKR ", "");
                setProductData({
                  ...productData,
                  price: newValue,
                });
              }}
            />
            <div className="grid md:grid-cols-3">
              <div className="col-span-2">
                <br />
                <h2 className="px-1 mb-4 text-xl font-semibold text-gray-700">
                  Upload an Image
                </h2>
                <input
                  type="file"
                  id="pic"
                  name="pic"
                  accept="image/png, image/jpeg"
                  onChange={handleImageUpload}
                />
                {productData.imageBase64 && (
                  <div className="mb-4">
                    <img
                      src={productData.imageBase64}
                      alt="Uploaded Image"
                      className="w-48 h-48 max-w-md mx-auto border-4 border-gray-700 rounded-full shadow-2xl"
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-end">
                  <Button
                    as={NavLink}
                    onClick={handleSubmit}
                    className={twMerge(
                      "  !bg-teal-700   border-teal-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
                    )}
                  >
                    <span
                      className={twMerge(
                        "!text-blue-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110"
                      )}
                    >
                      Add Item
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
