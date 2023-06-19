import { FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import product from "../assets/whiteShirt.jpg";

const ProductOrder = () => {
  return (
    <div className="pt-20 h-auto w-full mb-16">
      <div className="ml-[5%] p-2 max-w-[25rem]  rounded flex flex-row items-center sm:text-lg before:w-2 before:h-4 before:bg-slate-600 before:mr-2 bg-[#e6e6e6]">
        <p className="font-medium text-slate-500 mr-2 cursor-pointer">Home</p>
        <FaChevronRight className="mt-1 text-slate-400 mr-2" />
        <p className="font-medium text-slate-500 mr-2 cursor-pointer">Order</p>
        <FaChevronRight className="mt-1 text-slate-400 mr-2" />
        <p className="font-semibold text-slate-600 cursor-pointer ">
          White Shirt
        </p>
      </div>
      <div className="mt-12 mb-16 flex flex-wrap justify-center items-center gap-12">
        <img className="h-[22rem] w-[21rem] rounded" src={product} alt="" />
        <div className="h-[22rem]">
          <h1 className="text-2xl font-semibold lg:text-3xl">White Shirt</h1>
          <div className="flex items-center mt-4">
            <div className="flex">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiOutlineStar className="text-yellow-500" />
            </div>
            <p className="text-gray-500 ml-2 text-xl">(4.0)</p>
          </div>
          <p className="mt-4 font-semibold text-lg text-gray-800 lg:text-2xl">$78</p>
          <div className="flex flex-row gap-8">
            <div>
              <p className="mt-4 font-semibold text-lg">Available Size</p>
              <div className="flex flex-row gap-4 mb-4 mt-2">
                <p className="p-2 pl-3 pr-3  bg-black text-white rounded">S</p>
                <p className="p-2 pl-3 pr-3 bg-[#f2f2f2] text-black rounded">
                  M
                </p>
                <p className="p-2 pl-3 pr-3  bg-[#f2f2f2] text-black rounded">
                  L
                </p>
              </div>
            </div>
            <div>
              <p className="mt-4 font-semibold text-lg">Available Size</p>
              <div className="mt-2 flex flex-row space-x-2">
                <p className="p-2 bg-black text-white rounded">Black</p>
                <p className="p-2 bg-[#e6e6e6] text-black rounded">White</p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-lg font-semibold text-gray-500">
            Only 1 left <span className="text-sm">in Stocks</span>
          </p>
          <div className="mt-2 flex flex-row space-x-8 ">
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="p-4 bg-[#e6e6e6] rounded">
                <FaMinus className="cursor-pointer text-gray-500 text-sm" />
              </div>
              <span className="font-bold text-lg text-gray-600 ">1</span>
              <div className="p-4 bg-[#e6e6e6] rounded">
                <FaPlus className="cursor-pointer text-gray-500 text-sm" />
              </div>
            </div>
            <button className="p-2 pl-4 pr-4 bg-black text-white rounded hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
