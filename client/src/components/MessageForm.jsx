import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:3030/api/v1/message/create-message",
        {
          firstName,
          lastName,
          email,
          phone,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res?.data?.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        toast.err(err.response?.data?.message);
      });
  };
  return (
    <div className="max-w-[1540px] mx-auto py-12 mb-2 px-4 bg-yellow-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">
        Send Message Form Us
      </h2>
      <form action="" className="space-y-6" onSubmit={handleMessage}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Frist Name"
            className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="email"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
          />
          <input
            type="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full md:w-1/2 p-3 text-xl border-gray-300 bg-slate-300 rounded-md outlien-none shadow-md"
          />
        </div>
        <textarea
          placeholder="Message Lenght More than 10 Digits"
          rows="7"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 text-md border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
        />
        <div className="flex justify-center mb-4">
          <button className="bg-yellow-500 text-black py-2 px-24 rounded hover:bg-blue-600">
            Message Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
