import React from "react";

const PrivacyandPolicy = () => {
  return (
    <div className="max-w-[1540px] mx-auto justify-center items-center">
      <div className="flex justify-center items-center py-20">
        <div className="w-[1540px] bg-slate-200 justify-center items-center shadow-lg rounded-xl py-4">
          <h1 className="text-center text-[35px] text-[#b6ad05] underline underline-offset-8 py-8 font-bold">
            Hospital Management System Privacy and Policy{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-[600px] h-[500px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHizrAUsChOiYz_gxuiX71Ko_C3iCBjZAdHg&usqp=CAU"
                alt=""
                className="w-[100%] object-cover cursor-pointer py-4 px-6 rounded-lg"
              />
            </div>
            <div className="cursor-pointer w-[700px]">
              <h1 className="text-center text-[25px] w-full py-4 underline underline-offset-8 font-bold">
                Privacy Fast
              </h1>
              <p className="text-light py-2 px-3 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                sunt, doloribus quae, voluptatum nemo at illum laudantium
                quaerat dolore obcaecati fuga dicta sed aliquam! Excepturi
                magnam, aperiam ipsam tempora accusantium, vel quia, porro
                nesciunt totam earum pariatur quidem recusandae possimus
                numquam? Fugit ullam cupiditate doloremque, iure nam provident,
                aspernatur sunt delectus nulla laborum molestiae iusto adipisci,
                possimus numquam non veritatis accusamus voluptatem nemo atque
                accusantium perspiciatis excepturi quam? Excepturi ipsam soluta
                dolores et, quod dignissimos officia pariatur, ipsa, itaque
                voluptatum consectetur cupiditate modi. Veniam libero iure
                perferendis corrupti enim nam? Facilis eveniet tempora atque,
                optio incidunt iste minima provident numquam? Fugit ullam
                cupiditate doloremque, iure nam provident, aspernatur sunt
                delectus nulla laborum molestiae iusto adipisci, possimus
                numquam non veritatis accusamus voluptatem nemo atque
                accusantium perspiciatis excepturi quam? Excepturi ipsam soluta
                dolores et, quod dignissimos officia pariatur, ipsa, itaque
                voluptatum consectetur cupiditate modi. Veniam libero iure
                perferendis corrupti enim nam? Facilis eveniet tempora atque,
                optio incidunt iste minima provident culpa.
              </p>
              <div className="mt-4 w-full">
                <ul className="flex flex-col gap-5 cursor-pointer">
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                    How we are working in our hospital
                  </li>
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                    How we are working in our hospital
                  </li>
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                    How we are working in our hospital
                  </li>
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                    How we are working in our hospital
                  </li>
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                    How we are working in our hospital
                  </li>
                  <li className="text-xl cursor-pointer list-inside list-decimal">
                    How we are working in our hospital
                  </li>
                </ul>
              </div>
              <div className="text-center py-6">
                <button className="px-5 py-2 bg-[yellow] rounded-xl text-black cursor-pointer hover:bg-[#484948] hover:text-white">
                  For More Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyandPolicy;
