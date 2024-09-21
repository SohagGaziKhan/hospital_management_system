import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
// import { Navigate } from "react-router-dom";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  // const { isAuth } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3030/api/v1/user/get-all-doctor",
          { withCredentials: true }
        );
        setDoctors(data.doctor);
      } catch (error) {
        // console.log("Error fetching doctors:", error);
        toast.error(
          error.response?.data?.message || "Failed to fetch doctors."
        );
      }
    };
    fetchDoctors();
  }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"} />;
  // }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows for left and right navigation
  };

  return (
    <div className="max-w-[1500px] mx-auto py-10">
      <h1 className="text-center py-2 text-4xl font-bold cursor-pointer">
        All Doctors
      </h1>
      <Slider
        {...settings}
        className="w-[1540px] bg-yellow-100 h-[600px] mt-[30px] gap-5"
      >
        {doctors.map((item) => (
          <div
            key={item._id}
            className="flex justify-center gap-5 items-center w-[450px] h-[600px] rounded-md"
          >
            <img
              src={item.docImage.url}
              alt={`Doctor ${item._id}`}
              className="object-cover w-full h-full px-4 rounded-xl cursor-pointer"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctor;
