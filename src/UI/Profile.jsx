import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";

function Profile() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="py-5 ">
        <img
          src="/log-3.jpg"
          alt="A"
          className="w-25 h-25 rounded-full border border-blue-500"
        />
      </div>
      <div>
        <div className="flex flex-col items-center justify-centre text-xl">
          <div className="flex gap-5 justify-center items-center">
            <h1 className="font-semibold ">Arun Chavan</h1>
            <h1 className="cursor-pointer">
              <MdOutlineModeEdit />
            </h1>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <h1 className="font-normal text-lg pt-2">Jai Shree RAM</h1>
            <h1 className="cursor-pointer">
              <MdOutlineModeEdit />
            </h1>
          </div>
        </div>
        <div className="flex gap-5 mt-2">
          <h1 className="text-lg ">Phone Number</h1>
          <h1 className="text-lg">+91 9876543210</h1>
        </div>

        <div className=" flex justify-center items-center  ">
          <button className="cursor-pointer font-semibold p-3 border-gray-300 hover:border-red-500 border  items-centre mt-10 bg-gray-300 text-xl rounded-sm hover:bg-red-100">
            Log Out
          </button>
        </div>
      </div>
      <h1 className="text-center text-sm">
        Chat history on this computer will be cleared when you Logout.
      </h1>
    </div>
  );
}

export default Profile;
