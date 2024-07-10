import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShopContent from './components/shop/shop.js';
import Admin from './components/admin/admin.js';
import AddProduct from './components/admin/addProduct.js';
import EditProduct from './components/admin/editProduct.js';
function App () {
  return (
    <>
      {/* <Navbar />
      <ShopContent /> */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/shop" element={<ShopContent />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/admin/edit-product/:id" element={<EditProduct />} />
    </Routes>
  </BrowserRouter>
);

