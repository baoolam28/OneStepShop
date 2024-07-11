import React from "react";
import {useState, useEffect} from 'react';
import adminCss from './admin.css';
import productApi from "../../api/productApi";
import { Link } from "react-router-dom";
import AdminNavbar from "./adminNavbar";
function Admin () {
    const [table, setTable] = useState([]);
    
    useEffect(() => {
      const fetchProducts = async () => {
        const products = await productApi.getAll();
        setTable(products);
      }

      fetchProducts();
    }, []);

    const handleDeleteProduct = async (productId) => {
        try{
          console.log(productId);
          await productApi.remove(productId);
          setTable(table.filter((p) => p.id!== productId));
          alert("Product deleted successfully!");
        }catch(err){
          alert("Failed to delete product:", err);
        };
    };


    return (
      <>
        <AdminNavbar/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">image</th>
              <th scope="col">link</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {table.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.ID}</th>
                <td>{product.category}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.image} alt={product.name} width="50" />
                </td>
                <td>
                  <a href={product.link}>{product.link}</a>
                </td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/admin/edit-product/${product.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </Link>
                  <button type="button" className="btn btn-success">
                    View
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default Admin;