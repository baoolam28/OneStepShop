import React, { useState } from 'react';
import './navbar.css'; // Use standard import for CSS
import logo from '../../assets/images/logo_one_step.png';
import productApi from '../../api/productApi';

function Navbar() {
  
  return (
    <>
      <div className="container-fluid header">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-7 text-center">
            <div className="wrapper">
              <div className="bg">OneStep</div>
              <div className="fg">OneStep</div>
            </div>
            <h3 className="well-come mt-3">
              Chào mừng bạn đến với shope onestep
            </h3>
          </div>
          <div className="col-md-4 logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <a href="https://www.tiktok.com/@onestep_chanel?is_from_webapp=1&sender_device=pc">
          <div className="row tiktok-more">
            <div className="d-flex justify-content-center align-items-center p-3">
              <i className="bi bi-tiktok"></i>
            </div>
            <span className="tiktok-bttn">My Tiktok</span>
          </div>
        </a>
      </div>
      
    </>
  );
}

export default Navbar;
