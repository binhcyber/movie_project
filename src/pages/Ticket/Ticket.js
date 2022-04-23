import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Ticket.module.css";
import { CloseOutlined } from "@ant-design/icons";
import "./Ticket.css";
import {
  getTicketAction,
  setTicketAction,
} from "../../redux/action/TicketAction";
import { useParams } from "react-router-dom";
import { SET_SEAT } from "../../redux/type/TicketType";
import { ThongTinDatVe } from "../../utils/models/model";
export default function Ticket() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { dsGhe, dsGheDangDat } = useSelector((state) => state.TicketReducer);
  useEffect(() => {
    dispatch(setTicketAction(id));
  }, []);
  console.log(dsGhe);
  console.log(dsGheDangDat);
  const { thongTinPhim, danhSachGhe } = dsGhe;
  const renderGheDangChon = () => {
    return dsGheDangDat?.map((soGhe, index) => {
      return (
        <span className="text-green-500 font-bold mx-2">{soGhe.tenGhe}</span>
      );
    });
  };
  const renderTongTienDatVe = () => {
    return dsGheDangDat?.reduce((tongTien, soGheDangDat) => {
      return (tongTien += soGheDangDat.giaVe);
    }, 0);
  };
  const renderDsGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      const classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      const classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let indexGheDangDat = dsGheDangDat?.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDangDat !== -1) {
        classGheDangDat = "gheDangDat";
      }
      return (
        <Fragment>
          <button
            onClick={() => {
              dispatch({
                type: SET_SEAT,
                payload: ghe,
              });
            }}
            disabled={ghe.daDat}
            key={index}
            className={`gheChuaDat ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
          >
            {ghe.daDat ? (
              <CloseOutlined
                style={{ marginBottom: "7px", fontWeight: "bold" }}
              />
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className="flex flex-row w-full h-screen ">
      <div className="mx-5 flex-shrink w-3/4">
        <div className={`${style["crossbar"]}`}></div>
        <div id={`${style["trapezoid"]}`}></div>
        <div className="ml-10">{renderDsGhe()}</div>
      </div>
      <div className="flex-grow w-1/4 border h-screen rounded shadow-lg ">
        <div className="w-full pl-4 h-screen ">
          <h1 className="text-green-500 text-lg text-center">
            {`${renderTongTienDatVe().toLocaleString()} ${"VNĐ"}`}
          </h1>
          <hr />
          <h4 className="text-lg text-green-500 font-bold">
            {thongTinPhim?.tenPhim}
          </h4>
          <p>{thongTinPhim?.tenCumRap}</p>
          <p>
            {thongTinPhim?.ngayChieu} -{thongTinPhim?.tenRap}
          </p>
          <hr />
          <div className="flex flex-row flex-wrap">
            Ghế: {renderGheDangChon()}
          </div>
          <hr />
          <p>Địa chỉ: {thongTinPhim?.diaChi}</p>
          <hr />
          <p className="text-red-500 text-lg font-bold">
            Giờ Chiếu: {thongTinPhim?.gioChieu}
          </p>
          <div
            onClick={() => {
              let thongtinDatVe = new ThongTinDatVe();
              thongtinDatVe.maLichChieu = id;
              thongtinDatVe.danhSachVe = dsGheDangDat;
              console.log(thongtinDatVe);
              dispatch(getTicketAction(thongtinDatVe));
            }}
            className="text-white my-0 mx-auto text-center mt-2 py-2 bg-gradient-to-r from-ticketbts to-ticketbte font-medium text-lg hover:to-yellow-500 w-4/5 rounded cursor-pointer"
          >
            <button
              onClick={() => {
                let thongtinDatVe = new ThongTinDatVe();
                thongtinDatVe.maLichChieu = id;
                thongtinDatVe.danhSachVe = dsGheDangDat;
                console.log(thongtinDatVe);
                dispatch(getTicketAction(thongtinDatVe));
              }}
            >
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
