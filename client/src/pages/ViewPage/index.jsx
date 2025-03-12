
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const [category, setCategory] = useState({
    modelName: "",
    color: "",
    warranty: "",
    price: "",
    image: "",
    item: "",
  });

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/product/viewById/${id}`
      );
      const json = await res.json();
      setCategory(json.data[0]); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen py-12 bg-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-1/2">
              <img
                src={category.image}
                alt={category.item}
                className="object-cover w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">
                {category.item}
              </h1>
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">
                    Model Name
                  </h2>
                  <p className="text-gray-600">{category.modelName}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">Color</h2>
                  <p className="text-gray-600">{category.color}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">
                    Warranty
                  </h2>
                  <p className="text-gray-600">{category.warranty}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">Price</h2>
                  <p className="text-2xl font-bold text-green-600">
                    LKR{category.price}.00
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full px-6 py-3 font-semibold text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
