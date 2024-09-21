import React from "react";

const Biography = () => {
  return (
    <div
      className="container py-12 px-4 mx-auto bg-yellow-200 flex
   flex-col md:flex-row gap-8"
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://s3.envato.com/files/354413107/2072.jpg"
          alt="whoweare"
          className="w-full h-auto object-cover rounded-md hover:scale-105"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-2xl font-bold text-gray-800 text-center ">
          Biography
        </p>
        <h3 className="text-lg font-bold text-gray-800">Who We Are</h3>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
          consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
          ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex magnam
          voluptatum consectetur reprehenderit fugiat recusandae aut similique
          illum natus velit, praesentium nostrum nesciunt. Deleniti, nesciunt
          laboriosam totam iusto!
        </p>
        <p className="text-lg text-gray-700">We are all in 2024 !</p>
        <p className="text-lg text-gray-700">
          We are Working on Hospital Management Systems
        </p>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
          consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
          ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex magnam
          voluptatum consectetur reprehenderit fugiat recusandae aut similique
          illum natus velit, praesentium nostrum nesciunt. Deleniti, nesciunt
          laboriosam totam iusto!
        </p>
        <p className="text-lg text-gray-700">
          This is Hospital Management system part One{" "}
        </p>
        <p className="text-lg text-gray-700">
          This is Hospital Management system part two is coming On this Years{" "}
        </p>
      </div>
    </div>
  );
};

export default Biography;
