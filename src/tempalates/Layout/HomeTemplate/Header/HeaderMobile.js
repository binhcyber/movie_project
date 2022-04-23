import React, { useState } from "react";
import logo from "../../../../asset/LoadingImg/logo.gif";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AlignCenterOutlined,
  CloseOutlined,
  UserOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { DANG_XUAT } from "../../../../redux/type/UserType";
export default function HeaderMobile() {
  const { userLogin, userSignUp } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleLogout = () => {
    dispatch({
      type: DANG_XUAT,
    });
  };
  return (
    <div className="container bg-white z-10 fixed top-0 right-0 left-0 flex flex-row justify-center shadow-lg h-28 items-center">
      <NavLink to={"/"}>
        <img src={logo} className="h-24 w-24" />
      </NavLink>
      {openMenu ? (
        <CloseOutlined
          onClick={handleMenu}
          className="ml-auto text-2xl cursor-pointer"
        />
      ) : (
        <AlignCenterOutlined
          onClick={handleMenu}
          className="ml-auto text-2xl cursor-pointer"
        />
      )}
      {openMenu && (
        <div className="fixed flex justify-center items-center bg-black z-10 opacity-80 top-0 right-0 left-0 w-screen h-screen ">
          <div className="fixed top-0 left-0 bottom-0 z-50 w-200 bg-gradient-to-b from-red-500 h-screen right-214 top-0">
            <div className="px-2 py-5">
              <div className="text-right">
                <CloseCircleOutlined
                  onClick={handleMenu}
                  className="text-2xl cursor-pointer text-white"
                />
              </div>
              <ul className="text-white text-lg list-none text-center">
                <li>Lịch chiếu</li>
                <li>Contact</li>
                <li>Liên hệ</li>
              </ul>
              <hr />
              {userLogin ? (
                <>
                  <div className="text-center space-x-2">
                    <UserOutlined className="text-white text-lg" />
                    <NavLink
                      to="/login"
                      className="inline-block text-white font-bold text-lg  px-4 py-3 leading-none border rounded border-white hover:border-transparent hover:text-teal mt-4 lg:mt-0"
                    >
                      {userLogin.taiKhoan}
                    </NavLink>
                  </div>
                  <div className="w-28 my-0 mx-auto mt-2 text-center bg-gradient-to-r px-1 py-1 rounded-md text-lg font-bold from-btlogouts to-btlogoute hover:from-pink-500 hover:to-yellow-500 text-white ">
                    <button onClick={handleLogout} className="">
                      Đăng Xuất
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-28 mx-auto my-0 mt-2  text-center bg-gradient-to-r px-1 py-1 rounded-md text-lg font-bold from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">
                    <NavLink
                      activeStyle={{
                        color: "white",
                      }}
                      to="/login"
                    >
                      Đăng Nhập
                    </NavLink>
                  </div>
                  <div className="w-28 mx-auto my-0 mt-2 text-center bg-gradient-to-r px-1 py-1 rounded-md text-lg font-bold from-csbts to-csbte hover:from-pink-500 hover:to-yellow-500 text-white ">
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
          </div>
        </div>
      )}
    </div>
  );
}
