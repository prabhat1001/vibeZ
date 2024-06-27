import React from "react";

import WomenImg from "../img/womenImg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[680px] bg-hero bg-cover bg-center bg-no-repeat py-24">
      <div className=" container mx-auto flex justify-center items-center h-full">
        <div className="font-barlow flex justify-center text-center items-center italic text-white text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-semibold h-[200px] sm:h-[250px] md:h-[300px] w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] drop-shadow-xl p-4">
          Never let the Fashion Down
        </div>
      </div>
    </section>
  );
};

export default Hero;
