import React from "react";
import gucciIcon from "../assets/gucci.png";
import levis from "../assets/levis.png";
import adidas from "../assets/adidas.png";
import ck from "../assets/calvin.png";
import nike from "../assets/nike.png";
import zara from "../assets/zara.png";
import chanel from "../assets/chanel.png";
import versace from "../assets/versace.png";

const Brands = () => {
  const brands = [levis, gucciIcon, adidas, ck, nike, zara, chanel, versace];

  return (
    <div id="brand" className="mt-16 p-4 mb-8 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl mb-12 relative z-40">
        Brands
        <span className="absolute left-[35%] right-0 bottom-[-0.7rem] w-[30%] h-1 bg-gray-400 rounded"></span>
      </h1>

      <div className="flex flex-wrap gap-12 items-center justify-center">
        {brands.map((brand) => {
          return (
            <div>
              <img
                className="p-2 h-14 w-14 cursor-pointer hover:shadow-sm rounded-md transition duration-300 ease-in-out group sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem] lg:h-20 lg:w-20"
                src={brand}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
