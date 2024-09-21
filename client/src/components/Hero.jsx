import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1540px] mx-auto pt-24 flex flex-col items-center">
      <div className="w-[1500px] h-[600px] mx-auto py-4">
        <div className="relative w-full h-full group">
          <div
            className="absolute w-full h-full bg-yellow-300/80 rounded-xl
   text-black flex flex-col justify-center items-center opacity-0 
   group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          >
            <p className="font-bold text-4xl px-4 text-center">
              Hospital Management System
            </p>
            <p className="px-4 text-center py-4 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              fugiat repudiandae, similique alias consectetur suscipit odit
              temporibus culpa illum nesciunt et perferendis cupiditate minima
              cum. fugiat repudiandae, similique alias consectetur suscipit odit
              temporibus culpa illum nesciunt et perferendis cupiditate minima
              cum.
            </p>
            <div className="text-center">
              <button
                className="mt-4 border-white bg-white text-black px-4 py-2
              rounded-md hover:border-2 hover:border-pink-500"
              >
                Appoiment Your Doctor
              </button>
            </div>
          </div>
          <img
            className="w-full h-full object-cover reunded-xl bg-red-600/50 group-hover:bg-transparent transition-all duration-500 ease-in-out"
            src="https://post.healthline.com/wp-content/uploads/2020/06/orthopedic-doctor-ankle-1296x728-header.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
