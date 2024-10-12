import mongoose, { Mongoose, Types } from "mongoose";
const Schema = mongoose.Schema
const ProductSchema = new Schema({
    mark: {
        type: String,
        require: true,
        trim: true,
        minlength: [2, "Mark must be at least 2 characters"]
    },
    name: {
        type: String,
        require: true,
        trim: true,
        minlength: [2, "Name must be at least 2 characters"]
    },
    description: {
        type: String,
        require: true,
        trim: true,
        minlength: [10, "Description must be at least 10 characters"]
    },
    sku: {
        type: String,
        require: true,
        trim: true,
        minlength: [4, "SKU must be at least 4 characters"],
        maxlength: [16, "SKU must be at most 16 characters"]
    },
    price: {
        type: Number,
        default: 0,
        require: true,
        min: [1, "Minimum price is 1"]
    },
},
    {timestamps: true}
)
ProductSchema.index({mark: "text" })

const Product = mongoose.model("Product", ProductSchema)
export default Product