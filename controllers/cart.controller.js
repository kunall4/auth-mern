import Cart from "../models/Cart.js"
export const CreateCart = async (req,res)=>{
    try {
        const userId = req.user.id;
         const { productId, quantity = 1 } = req.body;

        //  fetching product details from product model
         const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // check if cart exists for user
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
    //   creating new cart
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    } else {
      // check if product already in cart 
      const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
      );

      if (itemIndex > -1) {
    //    incrreasing quantity 
        cart.items[itemIndex].quantity += quantity;
      } else {
        // add new product 
        cart.items.push({ product: productId, quantity });
      }
    }

    await cart.save();

    res.status(200).json({
      message: "Product added to cart",
      cart,
    });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server error "
        })
    }
}

import Cart from "../models/cartModel.js";

export const getCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId })
      .populate("items.product");

    // if no cart fouond return empty array 
    
    if (!cart) {
      return res.status(200).json({
        items: [],
        message: "Cart is empty",
      });
    }

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
