const Navigation = () => {
  const listIMGStyle =
    "h-4 w-4 sm:h-6 sm:w-6 sm:group-hover:hidden md:hidden";
  const listNameStyle =
    "hidden text-lg sm:group-hover:block md:block";
  return (
    <nav className="fixed bg-white h-16 w-screen flex flex-row items-center justify-between z-50">
      <div className="ml-4 text-lg font-semibold sm:text-xl md:text-2xl lg:ml-8">
        <h1>TrendVerse</h1>
      </div>
      <div className="h-full w-4/5">
        <ul className="flex flex-row h-full w-full justify-evenly items-center md:justify-between">
          <li className="cursor-pointer group">
            <img
              className={listIMGStyle}
              src="https://cdn-icons-png.flaticon.com/128/102/102665.png"
              alt="shop"
            />
            <p className={listNameStyle}>Shop</p>
          </li>

          <li className="cursor-pointer group transition duration-500 ease-in-out">
            <img
              className={listIMGStyle}
              src="https://cdn-icons-png.flaticon.com/128/7859/7859084.png"
              alt="brands"
            />
            <p className={listNameStyle}>Brands</p>
          </li>
          <li className="cursor-pointer group">
            <img
              className={listIMGStyle}
              src="https://cdn-icons-png.flaticon.com/128/4059/4059951.png"
              alt="featured products"
            />
            <p className={listNameStyle}>Featured</p>
          </li>
          <div className="w-2/5">
            <ul className="flex flex-row justify-between md:justify-evenly">
              <li className="cursor-pointer">
                <img
                  className="h-4 w-4 sm:h-6 sm:w-6"
                  src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
                  alt="search"
                />
              </li>
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
