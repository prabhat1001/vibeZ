import React, { useContext, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import Logo1 from "../img/logo-3.svg";
import Logo2 from "../img/logo-2.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const location = useLocation();
  const isCheckoutOrProductDetail =
    location.pathname === "/checkout" ||
    location.pathname.startsWith("/product/");

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 35 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-4"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container h-[30px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex justify-center items-center">
            <img
              className="w-[30px]"
              src={isCheckoutOrProductDetail ? Logo2 : isActive ? Logo2 : Logo1}
              alt=""
            />
            <span
              className={`${
                isCheckoutOrProductDetail
                  ? "text-black"
                  : isActive
                  ? "text-black"
                  : "text-white"
              } font-semibold tracking-[0.2rem] ml-1`}
            >
              ibeZ
            </span>
          </div>
        </Link>
        <Link to={"/checkout"}>
          <div className="cursor-pointer flex relative">
            <BsBag
              className={`${
                isCheckoutOrProductDetail
                  ? "text-black"
                  : isActive
                  ? "text-black"
                  : "text-white"
              } text-2xl`}
            />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[10px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
