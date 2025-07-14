import React, { useState } from "react";
import { RiWechatFill } from "react-icons/ri";
import { BsCupHot } from "react-icons/bs";

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [message, setmessage] = useState("");

  const handlesubmit = (e) => {
    console.log(name);
    console.log(password);
    console.log(email);
    console.log(confirmpassword);
    e.preventDefault();
    if (password !== confirmpassword) {
      setmessage("Password do not match");
      return;
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-xl overflow-hidden">
        <div className="hidden md:flex w-1/3 p-5 bg-gradient-to-b from-blue-400 to-purple-300 text-white flex-col justify-center items-center">
          <h1 className="text-7xl mb-4">
            <RiWechatFill />
          </h1>
          <h1 className="text-3xl font-semibold">SwiftChat</h1>
          <h1 className="mt-8 text-2xl text-center px-4">
            Share your smile with the world and your Family.
          </h1>
          <h1 className="mt-10 text-7xl">
            <BsCupHot />
          </h1>
          <h1 className="mt-5 text-3xl font-sans">Enjoy..!</h1>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-center items-center p-6 md:p-10 bg-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Sign Up
          </h1>
          <form className="w-full max-w-md" onSubmit={handlesubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <input
                type="name"
                placeholder="Enter Your Name"
                className="w-full placeholder:text-gray-500 border rounded-xl p-2 outline-none border-gray-500"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="Email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                placeholder="xyz@gmail.com"
                className="w-full placeholder:text-gray-500 border rounded-xl p-2 outline-none border-gray-500"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="Password" className="text-xl">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full placeholder:text-gray-500 border rounded-xl p-2 outline-none border-gray-500"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="ConfirmPassword" className="text-xl">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full placeholder:text-gray-500 border rounded-xl p-2 outline-none border-gray-500"
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
                required
              />
            </div>
            {message && <h1 className="text-red-400 mt-2">{message}</h1>}

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-48 py-2 bg-gradient-to-r from-blue-400 to-purple-300 text-white rounded-xl font-semibold hover:opacity-90 cursor-pointer"
              >
                SIGNUP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
