import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center bg-slate-300">
        <div className="flex justify-center items-center rounded-2xl ">
          <div className="w-[390px] h-[520px] bg-white shadow-2xl p-4 rounded-md">
            <h1 className="text-[50px] text-center font-bold">
              Whoops, <br />
              <span className="text-yellow-600">that Page</span> <br />
              is Gone
            </h1>
            <h1 className="text-center text-[55px] font-bold">
              4 <span>0</span>4
            </h1>
            <p className="text-black text-center text-[15px]">
              The link you clicked may be broken or the page may <br /> have
              been removed. You can try the search box again <br /> or go back
              to the
            </p>
            <div className="text-center text-md">
              <button className="mt-5 text-center text-yellow-600 underline underline-offset-8">
                <Link to="/">Home Page</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
