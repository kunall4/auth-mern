import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imagesUrl:{
         type:String,
        required:true,
    }
    ,
    Price:{
         type:Number,
        required:true,
    }
},{timestamps:true})

export const productModel = mongoose.model("product",ProductsSchema);
