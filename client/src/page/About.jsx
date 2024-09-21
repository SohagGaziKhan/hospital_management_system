import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="max-w-[1540px] mx-auto px-2 py-12 justify-center items-center">
        <div className="flex justify-center items-center min-h-screen rounded-md">
          <div className="w-[15400px] grid grid-cols-1 shadow-xl py-4 md:grid-cols-2">
            <div className="py-12">
              <h1 className="text-yellow-500 text-[35px] text-center cursor-pointer font-bold py-2">
                About Us
              </h1>
              <p className="text-black text-[25px] text-center cursor-pointer font-bold py-2">
                This is Our Hospitals
              </p>
              <p className="text-center text-light py-8 px-2 cursor-pointer font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                modi dolore magnam magni vitae, cumque, doloribus qui,
                repellendus expedita ab ex fuga voluptatem perferendis
                doloremque enim minus voluptas nihil! Exercitationem doloribus
                facilis aliquid. Fugiat et ducimus, nemo, est quos hic nesciunt
                magni quas labore animi cum illum nam illo itaque?vitae, cumque,
                doloribus qui, repellendus expedita ab ex fuga voluptatem
                perferendis doloremque enim minus voluptas nihil! Exercitationem
                doloribus facilis aliquid. Fugiat et ducimus, nemo, est quos hic
                nesciunt magni quas labore animi cum illum nam doloremque enim
                minus voluptas nihil! Exercitationem doloribus facilis aliquid.
                Fugiat et ducimus, nemo, est quos hic nesciunt magni quas labore
                animi cum illum nam illo itaque?vitae, cumque, doloribus qui,
                repellendus expedita ab ex fuga voluptatem perferendis
                doloremque enim minus voluptas nihil! Exercitationem doloribus
                facilis aliquid. Fugiat et ducimus, nemo, est quos hic nesciunt
                magni quas labore animi cum illum nam illo itaque?
              </p>
              <div className="text-center">
                <button className="font-light bg-[yellow] px-12 cursor-pointer py-2 rounded-xl text-black hover:text-red-500 hover:bg-[#646664]">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-[700px] h-[300px]">
              <img
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                src="https://st.depositphotos.com/2325841/2529/i/450/depositphotos_25293855-stock-photo-multi-ethnic-group-thumbs-up.jpg"
                alt=""
              />
            </div>
            <h1 className="text-center py-1 cursor-pointer text-[20px] font-bold text-[#222] underline underline-offset-8">
              Also Our Hospital{" "}
            </h1>
            <div className="grid grid-cols-2 justify-around items-center py-4 px-3 gap-4">
              <div className="shadow-2xl bg-yellow-400 rounded-xl w-[340px] h-[120px] items-center justify-center">
                <h1 className="text-center cursor-pointer justify-center text-[black] font-bold text-[20px] mt-[40px]">
                  300000
                </h1>
                <p className="text-center cursor-pointer  justify-center text-[black] items-center font-light">
                  Patients
                </p>
              </div>
              <div className="shadow-2xl bg-yellow-400 rounded-xl w-[340px] h-[120px] items-center justify-center">
                <h1 className="text-center cursor-pointer justify-center text-[black] font-bold text-[20px] mt-[40px]">
                  20000+
                </h1>
                <p className="text-center cursor-pointer  justify-center text-[black] items-center font-light">
                  Doctors
                </p>
              </div>
              <div className="shadow-2xl bg-yellow-400 rounded-xl w-[340px] h-[120px] items-center justify-center">
                <h1 className="text-center cursor-pointer justify-center text-[black] font-bold text-[20px] mt-[40px]">
                  100+
                </h1>
                <p className="text-center cursor-pointer  justify-center text-[black] items-center font-light">
                  Room
                </p>
              </div>
              <div className="shadow-2xl bg-yellow-400 rounded-xl w-[340px] h-[120px] items-center justify-center">
                <h1 className="text-center cursor-pointer justify-center text-[black] font-bold text-[20px] mt-[40px]">
                  24/7
                </h1>
                <p className="text-center cursor-pointer  justify-center text-[black] items-center font-light">
                  Fast Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-md">
        <button className=" text-center py-4 text-blue-600 underline underline-offset-8">
          <Link to="/">Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
