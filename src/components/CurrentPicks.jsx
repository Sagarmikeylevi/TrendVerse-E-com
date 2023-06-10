import React from "react";

const CurrentPicks = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Best Seller */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Best Seller"
            className="w-full rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Best Seller</h2>
            {/* Additional content for the Best Seller section */}
          </div>
        </div>
      </div>
      {/* Shop Men */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/16992817/pexels-photo-16992817/free-photo-of-young-man-wearing-a-white-hoodie-and-sitting-on-a-sofa.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shop Men"
            className="w-full rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Shop Men</h2>
            {/* Additional content for the Shop Men section */}
          </div>
        </div>
      </div>

      {/* Shop Women */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shop Women"
            className="w-full rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Shop Women</h2>
            {/* Additional content for the Shop Women section */}
          </div>
        </div>
      </div>
      {/* Shop Casual */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/15952331/pexels-photo-15952331/free-photo-of-young-man-with-dyed-platinum-hair-in-a-beige-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Shop Casual"
            className="w-full rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Shop Casual</h2>
            {/* Additional content for the Shop Casual section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPicks;
