import React from "react";
import { IoCallOutline } from "react-icons/io5";

function Calls() {
  const callsData = [{ name: "Arun" }, { name: "Vachan" }];

  return (
    <div className="overflow-y-scroll flex-1 mb-12">
      {callsData.map((items, index) => (
        <div
          key={index}
          className="p-5 text-lg flex gap-2 hover:bg-gray-200 cursor-pointer"
        >
          <img
            src={items.img}
            alt="A"
            className="border border-blue-500 rounded-full w-15 h-15 "
          />
          <div className="text-xl">
            <h1> {items.name}</h1>
            <h1 className="text-blue-400">
              <IoCallOutline />
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Calls;
