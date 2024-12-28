"use client"
import React, { useState } from "react";
import Card from './card';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Details {
  id: string | number; 
  img: string;
  name: string;
  Team: string;
  Department?: string;
  metadata?: {
    position1?: string;
    position2?: string;
  };
  LinkedIn: string;
  Email: string;
  github?: string;
}

interface CardsProps {
  yr: string;
  DetailsArray: Details[];
}

const Cards: React.FC<CardsProps> = ({ yr, DetailsArray }) => {
  const [showFull, setShowFull] = useState(false);

  // Determine the number of cards to display based on screen size
  const cardsPerRow = 1; // Default for smallest screens
  const cardsPerPage = showFull ? DetailsArray.length : 6; // 2 rows x 3 cards (for md screens)

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-700 mb-8">
        {yr}
      </h2>
      <div
        className={`grid gap-6 transition-height duration-500 ${
          showFull ? "max-h-full" : "max-h-[1100px] overflow-hidden"
        } grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
      >
        {DetailsArray.slice(0, cardsPerPage).map((val) => (
          <Card
            key={val.id}
            img={val.img}
            name={val.name}
            LinkedIn={val.LinkedIn}
            Email={val.Email}
            Team={val.Team}
            metadata={val.metadata}
            Department={val.Department}
            github={val.github}
          />
        ))}
      </div>
      {!showFull ? (
        <IoIosArrowDown
          className="text-red-500 text-4xl cursor-pointer mt-4 animate-bounce"
          onClick={() => setShowFull(true)}
        />
      ) : (
        <IoIosArrowUp
          className="text-red-500 text-4xl cursor-pointer mt-4 animate-bounce"
          onClick={() => setShowFull(false)}
        />
      )}
    </div>
  );
};

export default Cards;
