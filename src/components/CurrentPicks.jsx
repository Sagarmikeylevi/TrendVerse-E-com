import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bestSeller from "../assets/bestSeller.jpg";
import women from "../assets/women.jpg";
import men from "../assets/men.jpg";

const CurrentPicks = () => {
  const items = [
    { label: "Best Seller", image: bestSeller },
    { label: "Men", image: men },
    { label: "Women", image: women },
  ];
  return (
    <div className="mt-16 p-4 mb-8 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl mb-12 relative">
        Classifications
        <span className="absolute left-[38%] right-0 bottom-[-1rem] w-[25%] h-1 bg-gray-400 rounded"></span>
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-72 h-80 rounded-md bg-[center_30%] shadow-sm"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="mt-8 h-4/5 flex flex-row justify-center items-end ">
              <button className="h-12 w-3/5 bg-gray-200 rounded font-bold flex flex-row items-center justify-between p-4">
                {item.label}
                <FaArrowRight className="text-sm mt-[5px] text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPicks;
