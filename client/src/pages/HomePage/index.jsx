

import React from "react";
import RectangleImage from "../../assests/images/rectangle-161@2x.png";
import Girls3 from "../../assests/images/girl3.png";
import Button from "../../components/Button";
import { twMerge } from "tailwind-merge";

import banner2 from "../../assests/banner2.jpg";
import banner3 from "../../assests/banner3.jpg";
import banner4 from "../../assests/banner4.jpg";
import banner5 from "../../assests/banner5.jpeg";

import customer1 from "../../assests/customer/1.jpeg";
import customer2 from "../../assests/customer/2.jpeg";
import customer3 from "../../assests/customer/3.jpeg";
import customer4 from "../../assests/customer/4.jpeg";

// Import the Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [banner5, banner2, banner3, banner4];

// Swipper Section
const SwiperComponent = () => {
  return (
    <div className="p-4 pt-10 md:p-15">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="rounded-2xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex justify-center items-center h-[200px] md:h-[400px] lg:h-[460px] w-full"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="px-20 py-10"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Index = () => {
  const userEmail = sessionStorage.getItem("uEmail");

  return (
    <>
      {/* First section */}
      <div
        style={{
          backgroundImage: `url(${RectangleImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "85% center",
        }}
        className="w-full flex flex-col md:flex-row h-screen bg-repeat p-5 pt-[50px] text-black"
      >
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <p className="px-4 text-3xl font-bold text-center md:text-6xl md:text-left md:px-20">
            Your Destination for Mobile Marvels
          </p>
          <p className="px-4 py-6 text-sm text-center md:text-2xl md:text-left md:px-20">
            Discover the latest smartphones and accessories at unbeatable prices!
            Shop now for top brands, exclusive deals, and fast delivery all in one
            place!.
          </p>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>

      {/* Second Section */}
      <div
        style={{
          backgroundImage: `url(${Girls3})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "5% center",
        }}
        className="w-full flex flex-col md:flex-row h-screen bg-repeat p-5 pt-[80px] text-black"
      >
        <div className="w-full md:w-1/2"></div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <p className="px-4 text-4xl font-bold text-center md:text-6xl md:text-left md:px-20">
            Let's,
            <br />
            Grab Your
            <br />
            Dream Mobile
          </p>
          <p className="px-4 py-6 text-lg text-center md:text-2xl md:text-left md:px-20">
            Your ride, your way
            <br /> fast, safe, and reliable
          </p>
          <div className="px-4 md:px-20">
            {userEmail ? (
              <Button
                as="a"
                href="https://applestorelk.com/index.php/product-category/iphone/"
                target="_blank"
                rel="noopener noreferrer"
                className={twMerge(
                  "!bg-teal-600 border-teal-500 border-2 border-solid px-6 py-3 md:px-8 md:py-4 hover:scale-110"
                )}
              >
                <span className="!text-blue-200 text-sm md:text-base font-bold uppercase tracking-wider">
                  View Products
                </span>
              </Button>
            ) : (
              <Button
                as="a"
                href="https://applestorelk.com/index.php/product-category/iphone/"
                target="_blank"
                rel="noopener noreferrer"
                className={twMerge(
                  "!bg-teal-600 border-teal-500 border-2 border-solid px-6 py-3 md:px-8 md:py-4 hover:scale-110"
                )}
              >
                <span className="!text-blue-200 text-sm md:text-base font-bold uppercase tracking-wider">
                  View Products
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col items-center justify-center py-10 md:py-20">
        <h1 className="text-4xl font-bold text-center md:text-6xl">
          Stay With Us!
        </h1>
        <p className="px-4 py-6 text-sm text-center md:text-2xl md:px-20">
          Discover the latest smartphones and accessories at unbeatable prices!
          Shop now for top brands, exclusive deals, and fast delivery all in one
          place!.
        </p>
      </div>

      {/* Fourth Section */}
      <SwiperComponent />

      {/* Fifth Section */}
      <div className="flex flex-col items-center justify-center w-full py-10 md:py-20">
        <h1 className="mb-10 text-4xl font-bold text-center md:text-6xl">
          Happy Customers
        </h1>
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-20">
          {[
            { img: customer1, text: "Islandwide Delivery" },
            { img: customer2, text: "Trusted Warranty" },
            { img: customer3, text: "After Sales Service" },
            { img: customer4, text: "After Sales Service" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 transition-transform bg-gray-200 rounded-lg hover:scale-105"
            >
              <h2 className="mb-4 text-lg font-semibold text-center md:text-xl">
                {item.text}
              </h2>
              <img
                src={item.img}
                alt={item.text}
                className="object-cover h-24 w-28 md:w-40 md:h-40"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;

