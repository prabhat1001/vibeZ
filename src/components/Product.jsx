import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = product;

  const maxLength = 40;

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.slice(0, maxLength) + "...";
  };

  return (
    <div className="mb-10">
      <div className="border border-[#e4e4e4] h-[250px] mb-4 relative rounded-2xl overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-1 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center rounded-3xl text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 rounded-3xl bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-grey-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">
            {truncateTitle(title, maxLength)}
          </h2>
        </Link>
        <div className="text-gray-400 font-medium">${price}</div>
      </div>
    </div>
  );
};

export default Product;
