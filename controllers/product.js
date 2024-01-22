const Product_model = require("../models/product_model");

async function allproduct(req, res) {
  try {
    const products = await Product_model.allproduct();
    res.json(products);
  } catch (error) {
    console.log(error.massage);
  }
}
async function createproduct(req, res) {
  try {
    const { nama_barang, harga, images, rating, stok } = req.body;
    const data = { nama_barang, images, harga, rating, stok };

    const create = await Product_model.createproduct(data);
    res.json({ create });
  } catch (error) {
    console.error(error);
  }
}
async function updateproduct(req, res) {
  const { id } = req.params;
  try {
    const { nama_barang, harga, images, rating, stok } = req.body;
    const updatedata = { nama_barang, harga, images, rating, stok };

    const updateproduct = await Product_model.updateproduct(id, updatedata);
    res.json({ updateproduct });
  } catch (error) {
    console.error(error);
  }
}
async function deleteproduct(req, res) {
  const { id } = req.params;
  try {
    const deletedProduct = await Product_model.deleteproduct(id);
    res.json({ deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error" });
  }
}
async function getproductById(req, res) {
  try {
    const product = await Product_model.getproductById(id);
    if (product.length === 0) {
      res.status(404).json({ massage: "Tidak Ada product" });
      return;
    }
    res.json(product);
  } catch (error) {
    console.log(error.massage);
  }
}

module.exports = {
  allproduct,
  createproduct,
  deleteproduct,
  updateproduct,
  getproductById,
};
