const connection = require("../db");

//read
async function allproduct() {
  try {
    const [result] = await connection.execute("SELECT * FROM product");
    return result;
  } catch (error) {
    throw error;
  }
}

//create
async function createproduct(product) {
  try {
    const { nama_barang, images, harga, rating, stok } = product;
    const [result] = await connection.execute(
      "INSERT INTO product (nama_barang, images, harga, rating, stok) VALUES (?,?,?,?,?)",
      [nama_barang, harga, images, rating, stok]
    );
    return result;
  } catch (error) {
    throw error;
  }
}
//update
async function updateproduct(id, product) {
  try {
    const { nama_barang, images, harga, rating, stok } = product;
    const [result] = await connection.execute(
      "UPDATE product SET nama_barang=?,images=?,harga=?,rating=?,stok=? WHERE id = ?",
      [nama_barang, images, harga, rating, stok, id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}
//delete
async function deleteproduct(id) {
  try {
    const [result] = await connection.execute(
      "DELETE FROM product where id = ?",
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}
async function getproductByid(id) {
  try {
    const [result] = await connection.execute(
      "SELECT * FROM product where id = ?",
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  allproduct,
  createproduct,
  updateproduct,
  deleteproduct,
  getproductByid,
};
