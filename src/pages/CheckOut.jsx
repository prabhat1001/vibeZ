import React, { useContext } from "react";

import CartItems from "../components/CartItems";
import { SidebarContext } from "../contexts/SidebarContext";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";

//import Lottie
import Lottie from "react-lottie";
import animationData from "../lottie/emptyCart.json";

const CheckOut = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  const maxLength = 20;

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.slice(0, maxLength) + "...";
  };

  //for lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return cart.length === 0 ? (
    <div className="w-full flex flex-col justify-center items-center transition-all duration-500 h-[100vh]">
      <Lottie options={defaultOptions} height={200} width={200} />
      <div className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 text-gray-400">
        It seems you haven't added anything yet.
      </div>
    </div>
  ) : (
    <div className=" w-full min-h-[80vh] pt-[10vh] flex flex-col md:flex-row justify-around ">
      <div className="w-full md:w-[60%] lg:-w-[60%] xl:-w-[60%] h-auto py-6 mb-12 ">
        <div className="flex justify-between mb-5 px-10">
          <div className="text-3xl font-semibold">Shoping cart</div>
          <div
            onClick={clearCart}
            className="cursor-pointer rounded-xl py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="w-full h-full bg-white transition-all duration-300 px-4 lg:px-[35px]">
          <div className="flex flex-col gap-y-2 h-full lg:h-full overflow-x-hidden">
            {cart.map((item) => (
              <CartItems item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:w-[40%] lg:w-[30%] xl:w-[30%] text-sm mb-5">
        <div className="flex flex-col gap-y-3 py-6 mt-4 px-4 border-2 rounded-2xl">
          <div className="uppercase text-sm font-semibold pb-4 border-b-2">
            Total Items ({itemAmount})
          </div>
          <div className="border-b-2 py-4 font-primary text-primary text-sm ">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div>{truncateTitle(item.title, maxLength)}</div>
                <div className="text-gray-500">{`$ ${parseFloat(
                  item.price * item.amount
                ).toFixed(2)}`}</div>
              </div>
            ))}
          </div>
          <div className="flex w-full h-full justify-between items-center">
            <div className="uppercase font-semibold w-full flex justify-between">
              <div>Total:</div>
              <div>{`$ ${parseFloat(total).toFixed(2)}`}</div>
            </div>
          </div>
          <div className="flex w-full justify-between mt-6 h-[60px] items-center">
            <div className="uppercase border-green-500 py-3 rounded-xl text-white bg-primary hover:bg-green-500 transition-all duration-300  w-full flex justify-center items-center">
              checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
