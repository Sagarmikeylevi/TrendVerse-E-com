import React from "react";

const Brands = () => {
  const brands = [
    "Levi's",
    "Gucci",
    "Adidas",
    "Calvin Klein",
    "Nike",
    "Apple",
    "Samsung",
    "Amazon",
  ];

  return (
    <div className="bg-gray-100 h-80 flex flex-wrap justify-center items-center">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <span className="text-lg font-medium">{brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
