import React from "react";
import moment from "moment";
export default function ItemFilm({ film }) {
  return (
    <div className="h-40 w-full flex space-x-2">
      <img
        src={film.hinhAnh}
        className="flex w-1/5 flex-shrink-0 "
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <div className=" flex-grow ">
        <h3>{film.tenPhim}</h3>
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 ">
          {film.lstLichChieuTheoPhim?.map((lichChieu, index) => {
            return (
              index < 6 && (
                <button className="bg-gray-500 rounded">
                  {moment(lichChieu.gioChieuNgayChieu).format("DD/MM/YYYY")}
                </button>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
