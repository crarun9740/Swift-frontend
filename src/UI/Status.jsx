import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

function Status() {
  const statusdata = [{ name: "arun" }, { name: "sanika" }];
  return (
    <div className="overflow-y-scroll flex-1 mb-12">
      <div className="cursor-pointer p-1 flex gap-2 hover:bg-gray-200">
        <div className="mt-1 h-15 w-15 rounded-full border-2 border-blue-500">
          <img src="" alt="" />
          <h1 className="flex justify-center items-center text-4xl mt-7 ml-8 text-blue-500">
            <FaCirclePlus />
          </h1>
        </div>
        <h1 className="mt-1 text-lg font-semibold">My Status</h1>
      </div>
      <h1 className="text-sm ml-5">Recent Updates</h1>
      {statusdata.map((items, index) => (
        <div
          key={index}
          className="p-5 text-lg flex gap-2 hover:bg-blue-100 cursor-pointer"
        >
          <img
            src={items.img}
            alt="A"
            className="border rounded-full w-15 h-15 border-blue-500 object-center "
          />
          <h1> {items.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Status;
