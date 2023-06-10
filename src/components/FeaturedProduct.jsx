import React from "react";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image:
        "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600",
      cost: "$19.99",
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      cost: "$24.99",
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://images.pexels.com/photos/15963544/pexels-photo-15963544/free-photo-of-young-woman-wearing-a-jacket-and-sitting-by-the-window.jpeg?auto=compress&cs=tinysrgb&w=600",
      cost: "$24.99",
    },
    // Add more products here
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
          >
            <img
              className="w-56 h-56 object-cover rounded-md mb-4"
              src={product.image}
              alt={product.name}
            />
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.cost}</p>
            <button className="bg-blue-500 text-white rounded-md py-2 px-4">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
