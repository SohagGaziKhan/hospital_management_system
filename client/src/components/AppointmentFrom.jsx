import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctor = async () => {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/user/get-all-doctor",
        { withCredentials: true }
      );
      setDoctors(data?.doctor);
    };
    fetchDoctor();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/appointments/create-appointment",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 bg-yellow-100 my-4">
      <h1 className="text-3xl font-bold mb-8 text-center cursor-pointer">
        Appointment
      </h1>
      <form className="space-y-6" onSubmit={handleAppointment}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="number"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            placeholder="Appointment Date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setDoctorFirstName("");
              setDoctorLastName("");
            }}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          >
            {departmentsArray.map((depart, index) => (
              <option value={depart} key={index}>
                {depart}
              </option>
            ))}
          </select>
          <select
            value={`${doctorFirstName} ${doctorLastName}`}
            onChange={(e) => {
              const [firstName, lastName] = e.target.value.split(" ");
              setDoctorFirstName(firstName);
              setDoctorLastName(lastName);
            }}
            disabled={!department}
            className="w-full md:w-1/2 p-3 border border-gray-300  bg-slate-300 rounded-md outline-none shadow-md"
          >
            <option value="">Select Doctor</option>
            {doctors
              .filter((doctor) => doctor.doctorDepartment === department)
              .map((doctor, index) => (
                <option
                  value={`${doctor.firstName} ${doctor.lastName}`}
                  key={index}
                >
                  {doctor.firstName} {doctor.lastName}
                </option>
              ))}
          </select>
        </div>
        <textarea
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          className="w-full p-3 border border-gray-300 bg-slate-300 rounded-md outline-none shadow-md"
        />
        <div className="flex items-center text-center justify-center gap-4 mb-4">
          <p className="mb-0 text-center cursor-pointer justify-center">
            Have you visited before?
          </p>
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
            className="w-6 h-6 rounded-full "
          />
        </div>
        <button
          type="submit"
          className="mx-auto bg-blue-400 text-black w-full 
          cursor-pointer hover:text-white py-3 px-6 rounded-md hover:bg-blue-700"
        >
          GET APPOINTMENT
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
