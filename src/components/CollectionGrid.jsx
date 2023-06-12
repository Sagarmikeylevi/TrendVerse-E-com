import {FaArrowRight} from 'react-icons/fa';
import summerCollection from '../assets/summerCollection.jpg'
const CollectionGrid = () => {
  return (
    <div className="pt-16 w-full h-full flex justify-center items-center md:pt-12 lg:pt-16 mb-4">
      <div
        className="w-full h-[98vh] flex flex-row justify-center items-center bg-cover bg-no-repeat  shadow-lg sm:w-[90vw] sm:h-[80vh] md:h-[85vh] bg-[center_70%] lg:h-[85vh] lg:w-[80vw] rounded-md"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${summerCollection})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-center md:w-4/5">
          <h1 className="mt-48 text-5xl text-white font-bold mb-8 md:mt-48 lg:text-6xl lg:mt-40">
            Level up your style with our summer collection
          </h1>
          <button className="h-12 w-32 bg-white flex flex-row justify-evenly items-center font-bold rounded p-2 hover:bg-teal-400 hover:text-white transition duration-300 ease-in-out group">
            Shop now{" "}
            <FaArrowRight className="text-sm mt-[5px] text-gray-500 group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionGrid;
