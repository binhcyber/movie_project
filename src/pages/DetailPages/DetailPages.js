import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setcalculateFilmAction,
  setInforFilmAction,
} from "../../redux/action/InforFilmAction";
import moment from "moment";
import "./CircleRating.css";
import { Rate } from "antd";
import { Tabs, Radio, Space } from "antd";
import ItemDetailFilm from "./ItemDetailFilm";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
const { TabPane } = Tabs;
export default function DetailPages() {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { inforFilm, calculateFilm } = useSelector(
    (state) => state.InforFilmReducer
  );
  useEffect(() => {
    dispatch(setInforFilmAction(id));
  }, []);
  useEffect(() => {
    dispatch(setcalculateFilmAction(id));
  }, []);

  let danhGiaStar = Math.floor(inforFilm.danhGia / 2);

  return (
    <div
      style={{
        backgroundImage: `url(${inforFilm?.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-screen mt-24"
    >
      <CustomCard
        className="min-h-screen"
        effectColor={"#C780FF"} // required
        color="#14AEFF" // default color is white
        blur={4} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="container flex flex-col space-y-5">
          <div className="grid xl:grid-col-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3">
            <div className="flex flex-row space-x-2 w-full sm:w-full md:w-full ">
              <img src={inforFilm.hinhAnh} />
              <div>
                <h3 className="text-white text-xl">{inforFilm.tenPhim}</h3>
                <p className="text-white bg-green-500 w-2/3 text-center rounded">
                  {moment(inforFilm.ngayKhoiChieu).format("DD/MM/YYYY")}
                </p>
                {/* <button
                    onClick={() => setOpen(true)}
                    className="text-white bg-red-500 py-2 px-2 rounded cursor-pointer"
                  >
                    Trailer
                  </button> */}
              </div>
            </div>
            <div className="hidden xl:block lg:block sm:hidden md:block"></div>
            <div className="hidden xl:block lg:block text-center md:block sm:hidden">
              <div className={`c100 p${inforFilm.danhGia * 10} big`}>
                <span>{inforFilm.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="mr-5">
                <Rate disabled defaultValue={5} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded ">
            <Tabs
              className="overflow-x-scroll sm:overflow-x-scroll"
              tabPosition={"left"}
            >
              {calculateFilm.heThongRapChieu?.map((rapChieu, index) => {
                return (
                  <TabPane
                    tab={<img className="w-10 h-10" src={rapChieu.logo} />}
                    key={index}
                  >
                    <div>
                      {rapChieu.cumRapChieu?.map((rap, index) => {
                        return <ItemDetailFilm rap={rap} />;
                      })}
                    </div>
                  </TabPane>
                );
              })}
            </Tabs>
          </div>
        </div>
      </CustomCard>
    </div>
  );
}
