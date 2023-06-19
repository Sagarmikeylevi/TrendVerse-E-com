import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import sweater from "../assets/sweater.jpg";
import whiteShirt from "../assets/whiteShirt.jpg";
import palazzo from "../assets/palazo.jpg";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      imageURL: sweater,
      title: "Full sleeve sweater",
      price: "$58",
    },
    {
      id: 2,
      imageURL: whiteShirt,
      title: "White shirt",
      price: "$32",
    },
    {
      id: 3,
      imageURL: palazzo,
      title: "Palazzo",
      price: "$68",
    },
  ];
  return (
    <div
      id="featured"
      className="p-4 mb-8 flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl mb-12 relative z-40">
        Featured Books
        <span className="absolute left-[38%] right-0 bottom-[-1rem] w-[25%] h-1 bg-gray-400 rounded"></span>
      </h1>

      <div className="flex felx-row text-4xl mb-8 gap-12 text-gray-400">
        <FaChevronLeft className="cursor-pointer text-black" />
        <FaChevronRight className="cursor-pointer" />
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {products.map((product) => (
          <div className="w-64 flex flex-col" key={product.id}>
            <img
              className="h-72 w-full rounded-sm shadow-sm"
              src={product.imageURL}
              alt=""
            />
            <div className="w-full flex flex-row justify-between items-center">
              <div className="mt-2 flex flex-col">
                <h1 className="font-semibold text-gray-700">{product.title}</h1>
                <p className="font-bold">{product.price}</p>
              </div>
              <div className="h-12 w-12 cursor-pointer flex justify-center items-center hover:bg-teal-400 rounded-md shadow-sm transition duration-300 ease-in-out group">
                <img
                  className="h-6 w-6 group-hover:h-8 group-hover:w-8"
                  src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
