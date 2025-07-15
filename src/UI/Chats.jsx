import React from "react";
import { useNavigate } from "react-router-dom";

function Chats() {
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
  //hallo arun bhia bhul gai kya
  const navigate = useNavigate();
  return (
    <div className="overflow-y-scroll flex-1 mb-12">
      {contacts.map((items, index) => (
        <div
          onClick={() => navigate(`chats/${items.name}`)}
          key={index}
          className="p-5 text-lg flex gap-2 hover:bg-gray-200 cursor-pointer"
        >
          <img
            src={items.img}
            alt="A"
            className="border rounded-full w-15 h-15 border-blue-500"
          />
          <h1> {items.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Chats;
