import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    modelName: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    warranty: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);



export default mongoose.model("Product", productSchema);
