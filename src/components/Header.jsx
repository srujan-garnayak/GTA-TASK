import React from "react";

function Header() {
  return (
    <div className="backdrop-blur-2xl opacity-90 bg-gray-800 border-b-2 border-gray-700 fixed min-w-full  z-10">
      <div className="flex justify-between items-center p-2">
        <div className="ml-10 flex items-center gap-2 text-white">
          <img
            src="/GTALogoPink_2x_-_Game_To_Aim_lc3ttf.png"
            alt=""
            width={50}
          />
        </div>
        <div className="gap-4 flex text-white">
          <div>About</div>
          <div>Events</div>
          <div>Join</div>
        </div>
        <div className="mr-10 text-white">
          <button className="border-2 px-4 py-2 rounded-3xl bg-amber-100 text-amber-900 cursor-pointer ">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
