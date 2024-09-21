import React from "react";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div>
      <div className="max-w-[1540px] mx-auto h-[500px] flex justify-center items-center py-8 mt-4">
        <iframe
          className="w-full"
          height={"450px"}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dhaka%20Bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        >
          <Link to="https://www.gps.ie/">gps vehicle tracker</Link>
        </iframe>
      </div>
    </div>
  );
};

export default Location;
