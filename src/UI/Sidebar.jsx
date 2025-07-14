import React, { useState } from "react";
import Navbar from "./Navbar";
import { RiChatNewFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

function Sidebar() {
  const [selecttab, setselecttab] = useState("Chats");
  const [searchitem, setsearchitem] = useState("");

  const contacts = [
    {
      name: "Arun",
      img: "/log-3.jpg",
    },
    {
      name: "Sanika",
      img: "/log-3.jpg",
    },
    {
      name: "Vachan",
      img: "/log-3.jpg",
    },
    {
      name: "Sumit",
      img: "/log-3.jpg",
    },
    {
      name: "Satyam",
      img: "/log-3.jpg",
    },
  ];
  return (
    <div className="w-1/4 p-1 relative h-screen flex flex-col border-r border-gray-300">
      <div className="flex justify-between items-center px-5 border-b border-gray-300">
        <h1 className="text-2xl font-semibold">{selecttab}</h1>
        <h1 className="border p-2 text-2xl bg-blue-400 font-semibold text-white cursor-pointer rounded-full">
          <RiChatNewFill />
        </h1>
      </div>
      {searchitem && <ul>{contacts.length > 0}</ul>}
      <div className="w-full p-2 flex justify-centre items-center border-2 rounded-lg gap-2 mt-1 border-blue-200">
        <h1 className="text-2xl">
          <FiSearch />
        </h1>
        <input
          type="text"
          placeholder="Search Contact or start chat"
          className="outline-none w-full"
        />
      </div>

      {selecttab == "Chats" && (
        <div className="overflow-y-scroll flex-1 mb-12">
          {contacts.map((items, index) => (
            <div
              key={index}
              className="p-5 text-lg flex gap-2 hover:bg-gray-300 cursor-pointer"
            >
              <img
                src={items.img}
                alt="A"
                className="border rounded-full w-15 h-15 "
              />
              <h1> {items.name}</h1>
            </div>
          ))}
        </div>
      )}
      <Navbar selecttab={selecttab} setselecttab={setselecttab} />
    </div>
  );
}

export default Sidebar;
