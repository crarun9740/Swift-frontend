import React, { useState } from "react";
import { RiWechatFill } from "react-icons/ri";
import LoginImage from "../assets/log-4.jpg";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-xl overflow-hidden">
        <div className="relative hidden md:flex w-2/3 bg-gradient-to-b from-green-400 to-blue-300 text-white flex-col justify-center items-center">
          <img
            src={LoginImage}
            alt="backgroud Image"
            className="w-full absolute inset-0 z-0"
          />
          <div className="absolute inset-10 z-10  ">
            <h1 className="mt-5 text-8xl">
              <RiWechatFill />
            </h1>
            <h1 className="text-4xl font-bold">Welcome to Swiftchat</h1>
            <h1 className="font-semibold text-xl">
              Login to continue your conversations and connect instantly.
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-6 md:p-10 bg-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-r from-green-500 to-purple-500">
            Login
          </h1>
          <form className="w-full max-w-md" onSubmit={handlesubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="Email" className="text-xl">
                Email
              </label>
              <input
                type="text"
                autoComplete="username"
                placeholder="xyz@gmail.com"
                className="w-full 
                border rounded-xl border-gray-400 p-2 outline-none"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="Password" className="text-xl">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                className="w-full placeholder:text-gray-500 border rounded-xl p-2 outline-none border-gray-400"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-48 py-2 bg-gradient-to-r from-green-200 to-blue-300 text-white rounded-xl font-semibold hover:opacity-90 cursor-pointer"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
