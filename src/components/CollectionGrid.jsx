const CollectionGrid = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/8417239/pexels-photo-8417239.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-4/5 h-4/5 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-bold mb-6">
          Welcome to our Collection
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default CollectionGrid;
