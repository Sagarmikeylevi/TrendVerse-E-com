import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
const Navigation = () => {
  const listIMGStyle = "h-4 w-4 sm:h-6 sm:w-6 sm:group-hover:hidden md:hidden";
  const listNameStyle =
    "hidden text-lg sm:group-hover:block md:block hover:text-teal-700 hover:border-b-[2px] hover:border-b-teal-100 transition duration-300 ease-in-out group";

  const nevigate = useNavigate();

  const redirectToHome = () => {
    nevigate("/");
    scroll.scrollToTop();
  };
  return (
    <nav className="fixed bg-white h-16 w-screen flex flex-row items-center justify-between z-50">
      <Link to="" onClick={redirectToHome}>
        <div className="ml-4 text-lg font-semibold sm:text-xl md:text-2xl lg:ml-8 cursor-pointer">
          <h1>TrendVerse</h1>
        </div>
      </Link>
      <div className="h-full w-4/5">
        <ul className="flex flex-row h-full w-full justify-evenly items-center md:justify-between">
          <Link to="shop" spy={true} smooth={true} offset={-70} duration={500}>
            <li className="cursor-pointer group">
              <img
                className={listIMGStyle}
                src="https://cdn-icons-png.flaticon.com/128/102/102665.png"
                alt="shop"
              />
              <p className={listNameStyle}>Shop</p>
            </li>
          </Link>

          <Link to="brand" spy={true} smooth={true} offset={-70} duration={500}>
            <li className="cursor-pointer group transition duration-500 ease-in-out">
              <img
                className={listIMGStyle}
                src="https://cdn-icons-png.flaticon.com/128/7859/7859084.png"
                alt="brands"
              />
              <p className={listNameStyle}>Brands</p>
            </li>
          </Link>
          <Link
            to="featured"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="cursor-pointer group">
              <img
                className={listIMGStyle}
                src="https://cdn-icons-png.flaticon.com/128/4059/4059951.png"
                alt="featured products"
              />
              <p className={listNameStyle}>Featured</p>
            </li>
          </Link>
          <Link>
            <li className="cursor-pointer group">
              <img
                className={listIMGStyle}
                src="https://cdn-icons-png.flaticon.com/128/3703/3703245.png"
                alt="products"
              />
              <p className={listNameStyle}>Products</p>
            </li>
          </Link>
          <div className="w-1/5">
            <ul className="flex flex-row justify-between md:justify-evenly">
              <li className="cursor-pointer">
                <img
                  className="h-4 w-4 sm:h-6 sm:w-6"
                  src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
                  alt="cart"
                />
              </li>
              <li className="cursor-pointer">
                <img
                  className="h-4 w-4 sm:h-6 sm:w-6"
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
                  alt="user"
                />
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
