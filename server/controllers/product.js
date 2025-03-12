// import bcryptjs from "bcryptjs";
// import User from "../models/User.js";
// import { createError } from "../utils/error.js";
// import Donation from "../models/Donation.js";

// export const addDonation = async (req, res, next) => {
//     const { modelName , color , email,  price, warranty, image  } = req.body; 
//     console.log("req body :",req.body)
//    try{
//       const newDonation = new Donation({
//         modelName: modelName,
//         color : color,
//         email : email,
//         price: price,
//         warranty : warranty,
//         image : image,
//       });
  
//       await newDonation.save();
//       return res.status(201).json({ message: "New Donation Added" });
//     } catch (err) {
//       return next(
//         createError({
//           message: "Internal Server Error",
//           statusCode: 500,
//         })
//       );
//     }

//   };

//   export const view = async (req, res, next) => {
//     try {
//       const donations = await Donation.find();
//       res.status(200).json({ data: donations, messege: "Success" });
//     } catch (error) {
//       res.status(500).json({ error: "Internal server error" });
//     }
//     // res.json("Sucess");
//   };

//   export const viewById = async (req, res, next) => {
//     const _id = req.params.id;
    
//     try {
//       const donations = await Donation.find({ _id }); // Find donations based on the _id
//       if (!donations || donations.length === 0) {
//         return res.status(404).json({ error: "Donation not found" });
//       }
  
//       res.status(200).json({ data: donations, message: "Success" });
//     } catch (error) {
//       res.status(500).json({ error: "Internal server error" });
//     }
//     // res.json("Sucess");
//   };

//   export const viewByEmail = async (req, res, next) => {
//     const email = req.params.email;
//     console.log(email);
    
//     try {
//       const donations = await Donation.find({ email }); // Find donations based on the _id
//       if (!donations || donations.length === 0) {
//         return res.status(404).json({ error: "Donation not found" });
//       }
  
//       res.status(200).json({ data: donations, message: "Success" });
//     } catch (error) {
//       res.status(500).json({ error: "Internal server error" });
//     }
//     // res.json("Sucess");
//   };

//   export const deleteProduct = async (req, res) => {
//     const _id = req.params.id;
//     console.log("id", _id);
  
//     try {
//       const deletedItem = await Donation.findByIdAndDelete({_id});
//       if (!deletedItem) {
//         return res.status(404).json({ message: "Product not found" });
//       }
//       res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Error deleting Product", error: error.message });
//     }
//   };

  
import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import Product from "../models/Product.js";

export const addProduct = async (req, res, next) => {
    const { modelName , color , email,  price, warranty, image  } = req.body; 
    console.log("req body :",req.body)
   try{
      const newProduct = new Product({
        modelName: modelName,
        color : color,
        email : email,
        price: price,
        warranty : warranty,
        image : image,
      });
  
      await newProduct.save();
      return res.status(201).json({ message: "New Product Added" });
    } catch (err) {
      return next(
        createError({
          message: "Internal Server Error",
          statusCode: 500,
        })
      );
    }

  };

  export const view = async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json({ data: products, messege: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  export const viewById = async (req, res, next) => {
    const _id = req.params.id;
    
    try {
      const products = await Product.find({ _id }); // Find donations based on the _id
      if (!products || products.length === 0) {
        return res.status(404).json({ error: "Products not found" });
      }
  
      res.status(200).json({ data: products, message: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  export const viewByEmail = async (req, res, next) => {
    const email = req.params.email;
    console.log(email);
    
    try {
      const products  = await Product .find({ email }); // Find donations based on the _id
      if (!products  || products.length === 0) {
        return res.status(404).json({ error: "Donation not found" });
      }
  
      res.status(200).json({ data: products , message: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  export const deleteProduct = async (req, res) => {
    const _id = req.params.id;
    console.log("id", _id);
  
    try {
      const deletedItem = await Product.findByIdAndDelete({_id});
      if (!deletedItem) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting Product", error: error.message });
    }
  };

  


