"use client"

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const items = ["2023", "2022", "2021", "2020", "Previous Batches"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
     
      <nav className="hidden sm:flex justify-center space-x-5 p-4">
      <span className="border border-dashed border-red-700 text-red-700 font-bold hover:bg-red-100 p-4"> Batch of </span>
        {items.map((item, index) => (
          <Link
            key={index}
            href={`/Batch/${item === "Previous Batches" ? "previousBatch" : item}`}
            className="px-4 py-2 border border-dashed border-red-700 text-red-700 font-bold hover:bg-red-100"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="sm:hidden flex items-center justify-center p-4">
      <span className="border border-dashed border-red-700 text-red-700 font-bold hover:bg-red-100 p-2 mx-4"> Batch of </span>
        <button
          onClick={handlePrev}
          className="p-2 text-red-700 border border-red-700 rounded hover:bg-red-100"
        >
          &lt;
        </button>
        
        <Link
            key={currentIndex}
            href={`/Batch/${items[currentIndex] === "Previous Batches" ? "previousBatch" : items[currentIndex]}`}
            className="px-4 py-2 mx-4 border border-dashed border-red-700 text-red-700 font-bold"
          >
            {items[currentIndex]}
          </Link>
        <button
          onClick={handleNext}
          className="p-2 text-red-700 border border-red-700 rounded hover:bg-red-100"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NavBar;
