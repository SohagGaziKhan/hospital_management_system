// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../main";
// import axios from "axios";
// import { toast } from "react-toastify";
// const Navbar = () => {
//   const { isAuth, setIsAuth } = useContext(Context);
//   const navigate = useNavigate();

//   // logout handle
//   const logOutHangle = async () => {
//     await axios
//       .get("http://localhost:3030/api/v1/user/logout-patient", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         setIsAuth(true);
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//   };

//   const handleLogin = async () => {
//     navigate("/login");
//   };
//   return (
//     <div className="shadow-lg bg-yellow-200 fixed top-0 left-0 right-0 z-10">
//       <div className="max-w-[1540px] mx-auto py-5 px-8 text-black">
//         <nav className="flex justify-between items-center">
//           <div className="flex-1 text-2xl font-bold">
//             <Link to="/">Hospital Mananegent System</Link>
//           </div>
//           <div className="hidden lg:flex flex-2">
//             <div className="flex gap-6">
//               <Link
//                 to="/"
//                 className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                 hover:underline hover:underline-offset-8"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                 hover:underline hover:underline-offset-8"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/appointment"
//                 className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                 hover:underline hover:underline-offset-8"
//               >
//                 Appointment
//               </Link>
//               {isAuth ? (
//                 <button
//                   onClick={logOutHangle}
//                   className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                 hover:underline hover:underline-offset-8"
//                 >
//                   LogOut
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleLogin}
//                   className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                 hover:underline hover:underline-offset-8"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../main";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const { isAuth, setIsAuth } = useContext(Context);
//   const navigate = useNavigate();

//   // logout handle
//   const logOutHandle = async () => {
//     await axios
//       .get("http://localhost:3030/api/v1/user/logout-patient", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         setIsAuth(false); // Set isAuth to false after logging out
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//   };

//   const handleLogin = async () => {
//     navigate("/login");
//   };

//   return (
//     <div className="shadow-lg bg-yellow-200 fixed top-0 left-0 right-0 z-10">
//       <div className="max-w-[1540px] mx-auto py-5 px-8 text-black">
//         <nav className="flex justify-between items-center">
//           <div className="flex-1 text-2xl font-bold">
//             <Link to="/">Hospital Management System</Link>
//           </div>
//           <div className="hidden lg:flex flex-2">
//             <div className="flex gap-6">
//               <Link
//                 to="/"
//                 className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                 hover:underline hover:underline-offset-8"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                 hover:underline hover:underline-offset-8"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/appointment"
//                 className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                 hover:underline hover:underline-offset-8"
//               >
//                 Appointment
//               </Link>
//               {isAuth ? (
//                 <button
//                   onClick={logOutHandle}
//                   className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                   hover:underline hover:underline-offset-8"
//                 >
//                   LogOut
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleLogin}
//                   className="text-gray-900 cursor-pointer hover:text-black font-semibold
//                   hover:underline hover:underline-offset-8"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(Context);
  const navigate = useNavigate();

  // Handle logout
  const logOutHandle = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/api/v1/user/logout-patient",
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      setIsAuth(false); // Set isAuth to false after logging out
      navigate("/login"); // Navigate to login page after logout
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Logout failed. Please try again."
      );
    }
  };

  // Handle login navigation
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="shadow-lg bg-yellow-200 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-[1540px] mx-auto py-5 px-8 text-black">
        <nav className="flex justify-between items-center">
          <div className="flex-1 text-2xl font-bold">
            <Link to="/">Hospital Management System</Link>
          </div>
          <div className="hidden lg:flex flex-2">
            <div className="flex gap-6">
              <Link
                to="/"
                className="text-gray-900 cursor-pointer hover:text-black font-semibold hover:underline hover:underline-offset-8"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 cursor-pointer hover:text-black font-semibold hover:underline hover:underline-offset-8"
              >
                About
              </Link>
              <Link
                to="/appointment"
                className="text-gray-900 cursor-pointer hover:text-black font-semibold hover:underline hover:underline-offset-8"
              >
                Appointment
              </Link>
              {isAuth ? (
                <button
                  onClick={logOutHandle}
                  className="text-gray-900 cursor-pointer hover:text-black font-semibold hover:underline hover:underline-offset-8"
                >
                  LogOut
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-gray-900 cursor-pointer hover:text-black font-semibold hover:underline hover:underline-offset-8"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
