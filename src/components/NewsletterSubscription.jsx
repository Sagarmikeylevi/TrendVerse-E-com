import React from "react";

const NewsletterSubscription = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold mb-4">
        Subscribe to our newsletter to get updates on our latest collection
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto p-2 mb-2 sm:mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
