import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
  return (
    <div>
      <nav
        class="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="row">
          <div className="col-12 col-md-10">
            <h1 className="text-light">Admin Panel</h1>
          </div>
          <div className="col-12 col-md-2">
            <Link to="/admin/add-product" className="btn btn-outline-light">
              Add Product
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
