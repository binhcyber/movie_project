import React from "react";
import moment from "moment";
import { NavLink, Redirect } from "react-router-dom";
import { LocalUser } from "../../services/LocalUser/LocalUser";

export default function ItemDetailFilm({ rap }) {
  return (
    <div className="flex w-full flex-row space-x-2 mt-5">
      <img src={rap.hinhAnh} className="w-20 h-20 flex-shrink-0" />
      <div className="flex-grow-0">
        <h3>
          <span className="bg-red-500 text-white rounded mr-2">HOT</span>
          {rap.tenCumRap}
        </h3>
        <p>{rap.diaChi}</p>
        <div className="grid grid-rows-3">
          {rap.lichChieuPhim?.map((lichchieu, index) => {
            return (
              <div>
                <p className="bg-red-500 rounded text-center" key={index}>
                  Thời gian chiếu:
                  {moment(lichchieu.ngayChieuGioChieu).format("DD/MM/YYYY")}
                </p>
                <button className="text-white bg-gradient-to-r from-tickets to-tickete hover:to-yellow-500 py-2 px-2 rounded cursor-pointer">
                  {!LocalUser.getLocalUser() ? (
                    <Redirect to="/login" />
                  ) : (
                    <NavLink to={`/ticket/${lichchieu.maLichChieu}`}>
                      ĐẶT VÉ
                    </NavLink>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
