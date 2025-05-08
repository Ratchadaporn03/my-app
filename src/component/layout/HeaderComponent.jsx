import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import FooterComponent from './FooterComponent';

function HeaderComponent() {
  const [toggle, setToggle] = useState(true);

  const updateToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className="min-h-screen d-flex position-relative">

      {/* Sidebar */}
      {toggle && (
        <div className="w-64 bg-dark text-white p-4 min-vh-100">
          <form className="mb-4">
            <input 
              type="text" 
              name="query" 
              id="search" 
              placeholder="Search"
              className="form-control mb-3" 
            />
          </form>

          <ul className="list-unstyled font-weight-semibold">
            <li><a href="#" className="text-white">Dashboard</a></li>
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Users</a></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 position-relative">
        {!toggle && (
          <div className="position-absolute top-4 left-4 bg-white p-2 rounded shadow">
            <FaBars 
              onClick={updateToggle} 
              className="text-xl text-black cursor-pointer" 
            />
          </div>
        )}
        {toggle && (
          <button 
            onClick={updateToggle} 
            className="position-absolute top-4 left-54 bg-white p-2 rounded shadow">
            <FaBars className="text-xl text-black" />
          </button>
        )}

        {/* Footer */}
        <FooterComponent />
      </div>
    </div>
  );
}

export default HeaderComponent;
