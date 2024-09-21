import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // get all appointments
  useEffect(() => {
    const fatchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3030/api/v1/appointments/get-all-appiontment",
          { withCredentials: true }
        );
        setAppointments(data.appiontment);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fatchAppointments();
  }, []);

  // update status on appointment
  const handleStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3030/api/v1/appointments/update-status-appointment/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((preAppointments) => {
        preAppointments.map((appointmet) => {
          appointmet._id === appointmentId
            ? { ...appointmet, status }
            : appointmet;
        });
      });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message.data.message);
    }
  };

  // delete appointment by admin
  const handleDelete = async (appointmentId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3030/api/v1/appointments/delete-appointment/${appointmentId}`,
        { withCredentials: true }
      );
      setAppointments((app) => {
        app.filter((appointmet) => appointmet._id !== appointmentId);
      });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const { isAuthenticated } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex flex-col gap-5 mx-4 md:mx-20 bg-gray-100 p-4 md:p-10 h-screen rounded-lg">
      <div className="flex flex-col md:flex-row gap-5 h-auto min-h-[35vh]">
        <div className="flex flex-1 items-center bg-blue-200 rounded-lg p-5">
          <div className="flex-2 ml-4 md:md-0">
            <div className="flex items-center font-bold cursor-pointer text-2xl md:text-3xl mb-3">
              <p className="mr-2">Hello,</p>
              <p className="text-pink-500">Admin</p>
            </div>
            <p className="text-sm md:text-base">
              Welcome to the admin Dashboard <div className="br"></div> Here You
              can message all the appointments and doctors
            </p>
          </div>
        </div>
        <div
          className="flex-1 bg-blue-500 text-white flex flex-col justify-center 
        items-center rounded-lg p-5 "
        >
          <p className="text-xl md:text-2xl font-semibold">Total Appointment</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">150</h1>
        </div>
        <div className="flex-1 bg-blue-200 text-pink-500 flex flex-col justify-center items-center rounded-lg p-5">
          <p className="text-xl md:text-2xl font-semibold">Registerd Doctors</p>
          <p className="text-2xl md:text-3xl font-bold tracking-wider">55</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 md:p-10 h-auto md:h-[65vh] overflow-y-auto">
        <h4 className="text-xl md:text-2xl  text-center cursor-pointer font-semibold mb-5 text-gray-800">
          Appointments
        </h4>
        <table className="min-w-[1450px] mx-auto bg-white px-12  shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white p-2">
            <tr>
              <th className="py-2 md:py-3">Patient</th>
              <th className="py-2 md:py-3">Date</th>
              <th className="py-2 md:py-3">Doctor</th>
              <th className="py-2 md:py-3">Department</th>
              <th className="py-2 md:py-3">Status</th>
              <th className="py-2 md:py-3">Visited</th>
              <th className="py-2 md:py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map((items) => (
                <tr key={items._id} className="hover:bg-gray-300 ">
                  <td className="py-2 text-center md:py-3 cursor-pointer">{`${items.firstName} ${items.lastName}`}</td>
                  <td className="py-2 text-center md:py-3 cursor-pointer">
                    {items.appointment_date.substring(0, 10)}
                  </td>
                  <td className="py-2 text-center md:py-3 cursor-pointer">{`${items.doctor.firstName} ${items.doctor.lastName}`}</td>
                  <td className="py-2 text-center md:py-3 cursor-pointer">
                    {items.department}
                  </td>
                  <td className="py-2 text-center md:py-3 cursor-pointer">
                    <select
                      value={items.status}
                      onChange={(e) => handleStatus(items._id, e.target.value)}
                      className={`w-full text-md lg:text-lg font-semibold border-none ${
                        items.status === "Pending"
                          ? "text-yellow-500"
                          : items.status === "Acceped"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      <option
                        value="Pending"
                        className="text-yellow-500 cursor-pointer text-center"
                      >
                        Pending
                      </option>
                      <option
                        value="Accepted"
                        className="text-green-500 cursor-pointer text-center"
                      >
                        Accepted
                      </option>
                      <option
                        value="Rejected"
                        className="text-red-500 cursor-pointer text-center"
                      >
                        Rejected
                      </option>
                    </select>
                  </td>
                  <td className="py-2 text-center md:py-3 cursor-pointer">
                    {appointments.hasVisited ? (
                      <GoCheckCircleFill className="text-green-500 text-xl md:text-2xl mx-auto" />
                    ) : (
                      <AiFillCloseCircle className="text-red-500 md:text-2xl lg:text-3xl mx-auto" />
                    )}
                  </td>
                  <td className="py-2 text-center md:py-3 cursor-pointer ">
                    <MdDelete
                      size={20}
                      className="flex justify-center items-center text-red-600 text-center"
                      onClick={() => handleDelete(items._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Registered Patients Founds</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
