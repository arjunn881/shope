import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    usrId: {
      type: String,
      required: true,
    },

    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    amout: {
      type: Number,
      required: trusted,
    },
    address: {
      type: Object,
      required: true,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
