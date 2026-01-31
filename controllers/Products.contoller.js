import { productModel } from "../models/products.js"

export const GetProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        return res.status(200).json({
            success: true,
            message: "Data fetched succesfully",
            data: products,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "failed to fetch product "
        })
    }
}
export const createprod = async (req, res) => {
  try {
    const { name, Price } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const product = await productModel.create({
      name,
      Price,
      imagesUrl: req.file.filename, // saved image name
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
