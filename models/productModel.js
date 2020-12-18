import mongoose from 'mongoose';
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestapms: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
