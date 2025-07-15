import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import RightBar from "./RightBar";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
