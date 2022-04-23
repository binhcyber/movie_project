import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DANG_XUAT } from "../../../../redux/type/UserType";
import "../../../../pages/Ticket/Ticket.css";
import logo from "../../../../asset/LoadingImg/logo.gif";
import { UserOutlined } from "@ant-design/icons";
export default function Header() {
  const { userLogin, userSignUp } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: DANG_XUAT,
    });
  };
  console.log(userLogin);
  return (
    <nav className="flex w-screen px-6 z-10 fixed top-0 right-0 bottom-0 bg-white shadow-md left-0 mx-auto my-0 items-center justify-between flex-wrap h-24">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <NavLink to={"/"}>
          <img src={logo} className="h-24 w-24" />
        </NavLink>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm text-center lg:flex-grow">
          <a
            href="#responsive-header"
            className="mt-4 mr-4 text-black font-bold hover: to-black"
          >
            Lịch chiếu
          </a>
          <a
            href="#responsive-header"
            className="mt-4 mr-4 text-black font-bold"
          >
            Cụm rạp
          </a>
          <a
            href="#responsive-header"
            className="mt-4 mr-4 text-black font-bold"
          >
            Contact
          </a>
        </div>
        {userLogin ? (
          <>
            <div className="text-center flex justify-center items-center">
              <UserOutlined className="text-black text-lg pb-1" />
              <NavLink
                to="/login"
                className="inline-block text-black border rounded border-black hover:border-black font-medium text-lg text-sm px-4 py-3 leading-none border rounded text-black border-white hover:border-transparent hover:text-yellow-500 mt-4 lg:mt-0"
              >
                {userLogin.taiKhoan}
              </NavLink>
            </div>
            <div className="min-w-108 ml-2 text-center bg-gradient-to-r px-1 py-1 rounded-md text-lg font-bold from-btlogouts to-btlogoute hover:from-pink-500 hover:to-yellow-500 text-white ">
              <button onClick={handleLogout} className="">
                Đăng Xuất
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="min-w-108 mr-2 text-center bg-gradient-to-r px-1 py-1 rounded-md text-lg font-bold from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">
              <NavLink
                activeStyle={{
                  color: "white",
                }}
                to="/login"
              >
                Đăng Nhập
              </NavLink>
            </div>
            <div className="min-w-108 text-center bg-gradient-to-r px-1 py-1 rounded-md text-lg font-bold from-csbts to-csbte hover:from-pink-500 hover:to-yellow-500 text-white ">
              <NavLink
                activeStyle={{
                  color: "white",
                }}
                to="/register"
              >
                Đăng Ký
              </NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
