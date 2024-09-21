import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  // get all doctor
  // by one function useEffect
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3030/api/v1/user//get-all-doctor",
          { withCredentials: true }
        );
        setDoctors(data.doctor);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);
  if (!isAuthenticated) {
    <Navigate to="/login" />;
  }
  // delete doctor by admin

  const handleDelete = async (doctorId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3030/api/v1/user/delete/doctor/${doctorId}`,
        { withCredentials: true }
      );
      setDoctors((prevDoctors) =>
        prevDoctors.filter((doctor) => doctor._id !== doctorId)
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className=" py-20 bg-gray-200">
      <h1 className="text-2xl md:text-3xl font-bold py-4 text-center text-indigo-600 mb-8 cursor-pointer">
        All Doctor{" "}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-[1540px] mx-auto bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white p-2">
            <tr className="py-2">
              <th className="py-2 px-4 cursor-pointer text-lg">#</th>
              <th className="py-2 px-4 cursor-pointer text-lg">Image</th>
              <th className="py-2 px-4 cursor-pointer text-lg">Name </th>
              <th className="py-2 px-4 cursor-pointer text-lg">Department</th>
              <th className="py-2 px-4 cursor-pointer text-lg">NIC</th>
              <th className="py-2 px-4 cursor-pointer text-lg">Phone</th>
              <th className="py-2 px-4 cursor-pointer text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors && doctors.length > 0 ? (
              doctors.map((ele, index) => (
                <tr key={ele._id} className="hover:bg-gray-300 ">
                  <td className="py-2 text-center px-4 cursor-pointer">
                    {index + 1}
                  </td>
                  <td className="py-2 text-center px-4 cursor-pointer">
                    {ele.docImage.url}
                  </td>
                  <td className="py-2 text-center px-4 cursor-pointer">{`${ele.firstName} ${ele.lastName}`}</td>
                  <td className="py-2 text-center px-4 cursor-pointer">
                    {ele.doctorDepartment}
                  </td>
                  <td className="py-2 text-center px-4 cursor-pointer">
                    {ele.nic}
                  </td>
                  <td className="py-2 text-center px-4 cursor-pointer">
                    {ele.phone}
                  </td>
                  <td>
                    <MdDelete
                      size={25}
                      onClick={() => handleDelete(ele._id)}
                      className="cursor-pointer text-red-600 mx-auto text-3xl"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Registered Doctor Founds</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctors;
