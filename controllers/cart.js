import Cart from '../models/Cart.js'

export const AddCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(err);
  }
};

export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted!!!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({userId : req.params.userId});

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAll = async(req,res) =>{

    try {
        const carts = await Cart.find();

        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error);
    }
}