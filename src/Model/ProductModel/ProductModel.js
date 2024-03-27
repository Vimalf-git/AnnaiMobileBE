import mongoose from "../index.js";

const productSchema = new mongoose.Schema({
    productName: String,
    brandName: String,
    price: String,
    quantity: String,
    rating: String,
    imageUrl: Array
}, { versionKey: false })

const product = mongoose.model('productdetail', productSchema)
export default product;