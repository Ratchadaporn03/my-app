import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import FooterComponent from './FooterComponent';

function HeaderComponent() {
  const [toggle, setToggle] = useState(true);

  const updateToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className="min-h-screen flex relative">

      
      {toggle && (
        <div className="w-64 bg-[#333366] p-4 text-white min-h-screen">
          <form className="mb-4">
            <input 
              type="text" 
              name="query" 
              id="search" 
              placeholder="Search"
              className="bg-white/150 text-[#696969] px-4 py-2 rounded-md w-full"
            />
          </form>

          <ul className="space-y-2 font-semibold">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Users</a></li>
          </ul>
        </div>
      )}

      
      <div className="flex-1 p-6 relative">
        {!toggle && (
          <div className="absolute top-4 left-4 bg-white p-2 rounded-md shadow">
            <FaBars 
              onClick={updateToggle} 
              className="text-xl text-black cursor-pointer" 
            />
          </div>
        )}
        {toggle && (
          <button 
            onClick={updateToggle} 
            className="absolute top-4 left-54 bg-white p-2 rounded-md shadow"
          >
            <FaBars className="text-xl text-black" />
          </button>
        )}

        <FooterComponent />
      </div>
    </div>
  );
}

export default HeaderComponent;