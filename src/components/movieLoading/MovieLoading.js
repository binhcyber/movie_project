import React from "react";
import styleLoading from "./MovieLoading.module.css";
import logo from "../../asset/LoadingImg/Loadingmovie.gif";
import { useSelector } from "react-redux";
export default function MovieLoading() {
  let { isLoading } = useSelector((state) => {
    return state.LoadingReducer;
  });
  return isLoading ? (
    <div className={styleLoading.bgLoading}>
      <img className="h-28 w-28" src={logo} />
    </div>
  ) : (
    <></>
  );
}
// className="flex justify-center items-center fixed w-screen h-screen "
