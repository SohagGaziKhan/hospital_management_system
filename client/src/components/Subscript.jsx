import React from "react";

const Subscript = () => {
  return (
    <div className="max-w-[1540px] mx-auto py-10">
      <div className="flex justify-around items-center gap-5">
        <div className="w-[700px] h-[450px] ">
          <img
            className="w-full h-full object-cover rounded-md "
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="flex items-center flex-col">
          <form action="" className="flex flex-col gap-2 text-black">
            <div className="w-[600px] flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-yellow-700 text-xl font-semibold cursor-pointer"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full outline-none text-lg border rounded-md bg-slate-300 py-1 px-4"
              />
            </div>
            <div className="w-[600px] flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-yellow-700 text-xl font-semibold cursor-pointer"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full outline-none text-lg border rounded-md bg-slate-300 py-1 px-4"
              />
            </div>
            <div className="w-[600px] h-[300px]">
              <textarea
                type="text"
                placeholder="SubScribe OUr Youtube Channel "
                className="w-full outline-none h-full border rounded-md bg-slate-300 py-2 px-4"
              ></textarea>
            </div>
            <button className="text-black bg-[#9f9f00] w-[600px] h-[30px] cursor-pointer rounded-md hover:bg-black hover:text-green-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscript;
