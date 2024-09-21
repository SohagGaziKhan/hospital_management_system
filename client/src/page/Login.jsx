import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Patient");
  const navigate = useNavigate();

  // Accessing context
  const { setIsAuth, setUser } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3030/api/v1/user/login-user",
        { email, password, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      // Update context on successful login
      setIsAuth(true);
      setUser(response.data.user);

      toast.success(response.data.message);
      navigate("/");
      setEmail("");
      setPassword("");
      setRole("Patient");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <section className="flex justify-center items-center py-24 w-[500px] rounded-md">
        <div className="px-4 bg-white p-2 py-6 w-full lg:max-w-[650px] md:max-w-[500px] max-w-[300px] mx-auto flex flex-col rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center py-8 text-xl md:text-2xl font-bold text-yellow-500">
              Login
            </h2>
            <form className="flex flex-col gap-6 w-full" onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
                >
                  <option value="">Select Role</option>
                  <option value="Patient">Patient</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>

              <div className="flex justify-between px-4 items-center mb-4">
                <p className="mb-0">Don't have an Account?</p>
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register Now
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="px-5 w-full py-1 rounded-lg cursor-pointer bg-yellow-200 
            text-lg text-black text-center border-2 border-black hover:border-3 hover:scale-105"
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
