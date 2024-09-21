import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewAdmin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:3030/api/v1/user/create-new-admin",
          {
            firstName,
            lastName,
            email,
            password,
            phone,
            nic,
            dob,
            gender,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigate("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-200">
      <section className="max-w-[1240px] w-full mx-auto bg-gray-100 p-8 md:p-10 lg:p-12 xl:p-14 rounded-[20px] shadow-xl">
        <section className="add-doctor-form flex flex-col items-center gap-6">
          <h1
            className="form-title text-2xl md:text-3xl lg:text-4xl text-black 
          mb-7 font-bold"
          >
            Add New Admin{" "}
          </h1>
          <form
            action=""
            className="space-y-6 w-full max-w-[900px]"
            onSubmit={handleAddNewAdmin}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                required
              />
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="Date of Birth"
                className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name=""
                id=""
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male </option>
                <option value="Female">Female </option>
              </select>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                required
              />
            </div>
            <div className="justify-center flex w-[300px] items-center">
              <button
                className="text-lg md:text-xl p-3 rounded-lg w-full
                  border border-gray-300 shadow-md bg-gradient-to-r
                   from-purple-400 to-indigo-700 text-white font-bold
                    transition-all duration-300 ease-in-out hover:from-purple-500
                     hover:to-indigo-800"
              >
                Add New Admin
              </button>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default AddNewAdmin;
