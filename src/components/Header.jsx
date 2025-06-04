import React, {  } from "react";
// import { useNavigate } from "react-router-dom";

function Header() {

  return (
    <div className="backdrop-blur-2xl opacity-90 bg-gray-800 border-b-2 border-gray-700 fixed min-w-full z-100">
      <div className="flex justify-between items-center p-2 px-2 sm:px-4 md:px-6">
        <div className="ml-2 sm:ml-6 md:ml-10 flex items-center gap-2 text-white">
          <img
            src="/GTALogoPink_2x_-_Game_To_Aim_lc3ttf.png"
            alt=""
            width={50}
            className="w-8 sm:w-10 md:w-12 lg:w-[50px]"
          />
        </div>
        <div className="gap-4 sm:gap-6 md:gap-10 flex items-center text-white text-sm sm:text-base">
          <div><a href="#about">About</a></div>
          <div><a href="#event">Events</a></div>
          <div><a href="#join">Join</a></div>
          <div><a href="#faqs">FAQs</a></div>
        </div>
        <div className="mr-2 sm:mr-6 md:mr-10 text-white">
          <button className="border-2 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-3xl bg-amber-100 text-amber-900 hover:border-amber-100 hover:bg-amber-900 hover:text-white active:opacity-40 cursor-pointer text-sm sm:text-base">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;