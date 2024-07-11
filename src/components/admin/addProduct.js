import React, { useState } from "react";
import productApi from "../../api/productApi";
import AdminNavbar from "./adminNavbar";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    price: 0,
    image: "",
    link: "",
  });

  const { ID, category, productName, price, image, link } = product;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await productApi.add(product);
      // Reset the form after successful submission
      setProduct({
        ID: "",
        category: "",
        productName: "",
        price: 0,
        image: "",
        link: "",
      });
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Add New Product</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="ID">ID:</label>
              <input
                className="form-control"
                type="text"
                name="ID"
                value={ID}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                className="form-control"
                type="text"
                name="category"
                value={category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input
                className="form-control"
                type="text"
                name="productName"
                value={productName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Product Price:</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Product Image Name:</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={image}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="link">Product Link:</label>
              <input
                type="text"
                className="form-control"
                name="link"
                value={link}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to="/admin" className="btn btn-outline-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
