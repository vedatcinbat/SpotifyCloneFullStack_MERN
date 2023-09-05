/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MainPart from "../components/MainPart";
import BottomPartSignup from "../components/BottomPartSignup";

function Layout({ currentUser }) {
  return (
    <div>
      {currentUser ? (
        <div className="flex flex-col">
          <Sidebar />

          <Outlet />
        </div>
      ) : (
        <div className="flex flex-col">
          <Sidebar message="Please login" />
          <MainPart message="Please Login or Signup" />
          <BottomPartSignup />

          <Outlet />
        </div>
      )}
    </div>
  );
}

export default Layout;
