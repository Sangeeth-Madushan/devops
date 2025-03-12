
import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Card from "./Card";

const Index = () => {
  const [category, setCategory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!sessionStorage.uEmail);
    fetchData();
  }, []);

  const handleDonation = () => {
    if (isLoggedIn) {
      window.location.href = "/add-product";
    } else {
      window.alert("You need to log in to add a donation");
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "http://localhost:8000/api/product/viewProduct"
      );
      const json = await res.json();
      setCategory(json.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div className="pt-12 p-9">
      <h2 className="flex items-center justify-center pt-6 text-4xl font-semibold text-gray-900">
        iPhones
      </h2>

      {/* ✅ Conditionally render the "Add Donation" button */}
      {isLoggedIn && (
        <div className="flex justify-end mb-6 ">
          <Button
            as={NavLink}
            onClick={handleDonation}
            className={twMerge(
              "bg-teal-800 border-teal-400 border-2 px-6 py-3 hover:scale-105"
            )}
          >
            <span className="text-blue-200 uppercase tracking- wide bold text-">
              Add Product
            </span>
          </Button>
        </div>
      )}

      <hr className="w-full mb-6 " />

      {/* ✅ Grid Layout for 4 Cards Per Row */}
      {isLoading ? (
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-[275px] h-[300px] bg-gray-200 border-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {category.length > 0 ? (
            category.map((option, index) => (
              <Card
                key={index}
                _id={option._id}
                title={option.modelName}
                image={option.image}
              />
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">
              No products available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
