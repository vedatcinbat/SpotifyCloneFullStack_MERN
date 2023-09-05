import React from "react";
import { Link } from "react-router-dom";

function BottomPartSignup() {
  return (
    <div className="p-2 flex justify-between mt-1 ml-3">
      <div className="textPart">
        <div className="text-[#ffffffb3] text-md">PREVIEW OF SPOTIFY</div>
        <div className="text-[#ffffff] font-bold text-xl">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed
        </div>
      </div>
      <div className="button">
        <Link to="/signup">
          <button className="mr-4  bg-[#ffffffb3] hover:bg-[#121212] hover:text-white w-[12rem] pt-4 pb-4 text-gray-900 p-3 w-[7rem] rounded-2xl hover:bg-[#1ed760] hover:text-black">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BottomPartSignup;
