import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm fixed top-0 left-0 z-50">
      <nav className="mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <img
            className="w-12"
            src="/public/images/navbar/plant.png"
            alt="plant image"
          />
          <span className="font-black text-[28px] text-white">
            FloraVision.
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-16 text-2xl font-indie text-white">
          <li>Home</li>
          <li className="flex justify-center items-center gap-5">
            <span>Plants Type</span>
            <img
              src="/images/navbar/down.png"
              alt="down arrow"
              className="w-3"
            />
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex text-white gap-14">
          <img
            src="/images/navbar/search-interface-symbol.png"
            alt="search"
            className="w-[26px]"
          />
          <img src="/images/navbar/bag.png" alt="" className="w-[26px]" />
          <span className="flex flex-col justify-start items-end gap-2">
            <div className="w-[31px] h-0 border-[3px] border-white rounded-full"></div>
            <div className="w-[23px] h-0 border-[3px] border-white rounded-full"></div>
          </span>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
          ☰
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="w-64 bg-white h-full p-6 shadow-xl">
            <button className="text-3xl mb-6" onClick={() => setOpen(false)}>
              ✕
            </button>
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li>Home</li>
              <li>Plants</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
