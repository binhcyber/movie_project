import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DANG_XUAT } from "../../../../redux/type/UserType";
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
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <svg
            className="h-8 w-8 mr-2"
            width={54}
            height={54}
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Tailwind CSS
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm text-center lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Lịch chiếu
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Cụm rạp
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
            >
              Contact
            </a>
          </div>
          {userLogin ? (
            <>
              {" "}
              <div className="text-center">
                <NavLink
                  to="/login"
                  className="inline-block text-black text-sm px-4 py-3 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal  mt-4 lg:mt-0"
                >
                  {userLogin.taiKhoan}
                </NavLink>
              </div>
              <div className="text-center bg-red-500 rounded mx-2 ">
                <button
                  onClick={handleLogout}
                  className="inline-block text-sm px-4 py-3 leading-none border rounded text-white  mt-4 lg:mt-0"
                >
                  Đăng Xuất
                </button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="text-center bg-blue-500 rounded mx-2">
                <NavLink
                  to="/login"
                  className="inline-block text-sm px-4 py-3 leading-none border rounded text-white hover:border-transparent hover:text-teal  mt-4 lg:mt-0"
                >
                  Đăng Nhập
                </NavLink>
              </div>
              <div className="text-center bg-pink-500 rounded">
                <NavLink
                  to="/register"
                  className="inline-block text-sm px-4 py-3 leading-none border rounded text-white  hover:border-transparent hover:text-teal mt-4 lg:mt-0"
                >
                  Đăng Ký
                </NavLink>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
