import { BsChatSquare } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { SiSnapcraft } from "react-icons/si";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navbar = [
  { icons: <BsChatSquare />, name: "Chats", value: "Chats" },
  { icons: <IoCallOutline />, name: "calls", value: "Calls" },
  { icons: <SiSnapcraft />, name: "Status", value: "Status" },
  { icons: <FaRegUserCircle />, name: "profile", value: "Profile" },
];

function Navbar({ selecttab, setselecttab }) {
  const navigate = useNavigate();
  return (
    <nav className="absolute bottom-0 left-0 right-0 shadow  flex justify-around items-center gap-5 py-3 border-t-2 overflow-hidden border-gray-300">
      {navbar.map((items, index) => (
        <div
          key={index}
          className="text-2xl cursor-pointer active:font-semibold"
        >
          <button
            className={`flex flex-col justify-center items-center p-2 rounded-lg cursor-pointer ${
              selecttab == items.value ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => {
              setselecttab(items.value);
              if (items.value.toLowerCase() == "chats") {
                navigate("/");
                return;
              }
              navigate(`/${items.value.toLowerCase()}`);
            }}
          >
            <h1>{items.icons}</h1>
            <h1 className="text-sm">{items.name}</h1>
          </button>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
