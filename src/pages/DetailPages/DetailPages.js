import React, { useEffect } from "react";
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
const { TabPane } = Tabs;
export default function DetailPages() {
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
  console.log({ calculateFilm });
  console.log({ inforFilm });
  let danhGiaStar = Math.floor(inforFilm.danhGia / 2);
  console.log(danhGiaStar);

  return (
    <div
      style={{
        backgroundImage: `url(${inforFilm?.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-screen"
    >
      <CustomCard
        className="min-h-screen"
        effectColor={"#C780FF"} // required
        color="#14AEFF" // default color is white
        blur={4} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="container flex flex-col space-y-5">
          <div className="grid grid-cols-3">
            <div className="flex flex-row space-x-2">
              <img src={inforFilm.hinhAnh} />
              <div>
                <h3 className="text-white text-xl">{inforFilm.tenPhim}</h3>
                <p className="text-white bg-green-500 w-2/3 text-center rounded">
                  {moment(inforFilm.ngayKhoiChieu).format("DD/MM/YYYY")}
                </p>
                <button className="text-white bg-red-500 py-2 px-2 rounded cursor-pointer">
                  ĐẶT VÉ
                </button>
              </div>
            </div>
            <div className=""></div>
            <div className="text-center">
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
          <div className="bg-white rounded">
            <Tabs tabPosition={"left"}>
              {calculateFilm.heThongRapChieu?.map((rapChieu, index) => {
                return (
                  <TabPane
                    tab={<img className="w-10 h-10" src={rapChieu.logo} />}
                    key={index}
                  >
                    <div>
                      {rapChieu.cumRapChieu?.map((rap, index) => {
                        console.log(rap);
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
