import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const Contact = () => {
  return (
    <div>
      <div className="max-w-[1540px] mx-auto px-4 py-10 justify-center items-center">
        <div className="flex justify-center items-center min-h-screen rounded-md">
          <div className="w-[1500px] border rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2">
            <div className="items-center py-4 justify-center">
              <h1 className="text-[green] font-bold py-4 text-[35px] text-center underline underline-offset-8 cursor-pointer">
                Get In Touch
              </h1>
              <div
                className="text-center py-2
              "
              >
                <IoLocation size={30} className="ml-[42%]" />
                <div className="flex gap-4 justify-center items-center text-center">
                  <h1 className="text-center text-[22px] font-bold">
                    Address :
                  </h1>
                  <span className="text-center text-light">Mripur 1 India</span>
                </div>
              </div>
              <div className="text-center py-2">
                <FaPhoneAlt size={30} className="ml-[42%] " />
                <div className="flex gap-4 justify-center items-center text-center">
                  <h1 className="text-center text-[22px] font-bold">Phone :</h1>
                  <span className="text-center text-light">1236547892</span>
                </div>
              </div>
              <div className="text-center py-2">
                <MdEmail size={30} className="ml-[42%] " />
                <div className="flex gap-4 justify-center items-center text-center">
                  <h1 className="text-center text-[22px] font-bold">Email :</h1>
                  <span className="text-center text-light">
                    projectwithSGK@gmail.com
                  </span>
                </div>
              </div>
              <div className="text-center py-2">
                <TbWorldWww size={30} className="ml-[42%] " />
                <div className="flex gap-4 justify-center items-center text-center">
                  <h1 className="text-center text-[22px] font-bold">WebSite</h1>
                  <span className="text-center text-light">
                    www.hospital.con.sgk
                  </span>
                </div>
              </div>
            </div>
            <div className="cursor-pointer py-8">
              <h1 className="text-[35px]  font-bold underline underline-offset-8 text-center cursor-pointer">
                Contact Us
              </h1>
              <form action="">
                <label
                  htmlFor=""
                  className="text-[22px] mt-1 font-bold py-2 cursor-pointer"
                >
                  {" "}
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your First name"
                  className="w-full md:w-1/2 p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                />
                <br />
                <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer">
                  {" "}
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Last name"
                  className="w-full md:w-1/2 p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                />
                <br />
                <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer">
                  {" "}
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full md:w-1/2 p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                />
                <br />

                <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer">
                  {" "}
                  Subject{" "}
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  className="w-full md:w-1/2 p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                />
                <br />
                <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer">
                  {" "}
                  Enter Your Message{" "}
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Message"
                  className="w-full md:w-1/2 h-[100px] p-3 text-lg border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                />
                <br />
                <button
                  className="bg-[green] text-white px-12 py-2 text-center rounded-xl mt-4 cursor-pointer hover:bg-[#686968] hover:text-white
                "
                >
                  Send Messae
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
