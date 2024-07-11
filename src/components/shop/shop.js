import React, { useState, useEffect } from "react";
import Product from "./product.js";
import './shop.css'
import productApi from "../../api/productApi.js";
import Navbar from "../navbar/navbar.js";
function Shop() {
  const [store, setStore] = useState([]); 
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productApi.getAll();
        setStore(products); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };  

    fetchProducts();
  }, []);


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleSearch = () => {
    const fetchSearch = async () => {
      const products = await productApi.searchByFields(search);
      setStore(products);
      setModalOpen(!modalOpen);
    };
    fetchSearch();
  };

  const categorySearch = (type) => {
    const fetchCategory = async () => {
      const products = await productApi.searchByCategory(type);
      setStore(products);
      setModalOpen(!modalOpen);
    };
    fetchCategory();
  };


  return (
    <>
      <Navbar />
      <div className="shop-content">
        <div className="row">
          {store.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <button className="fixed-button" onClick={toggleModal}>
        Menu
      </button>
      {modalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <img src={logo} alt="" className="" /> */}
            <div className="search-model row justify-content-center">
              <input
                className="search-input"
                type="text"
                placeholder="Tìm kiếm..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <div className="search-bttn" onClick={handleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-search-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                </svg>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4 category-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => categorySearch("all")}
                >
                  Tất cả
                </button>
              </div>
              <div className="col-md-4 category-buttons">
                <button
                  className="btn btn-primary "
                  onClick={() => categorySearch("shirt")}
                >
                  Áo
                </button>
              </div>
              <div className="col-md-4 category-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => categorySearch("pants")}
                >
                  Quần
                </button>
              </div>
              <div className="col-md-4 category-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => categorySearch("shoe")}
                >
                  Giày
                </button>
              </div>
              <div className="col-md-4 category-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => categorySearch("jacket")}
                >
                  Áo Khoác
                </button>
              </div>
            </div>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Shop;
