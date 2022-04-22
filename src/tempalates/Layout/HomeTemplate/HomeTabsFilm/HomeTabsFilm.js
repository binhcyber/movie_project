import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeThongRapAction,
  setThongTinLichChieuAction,
} from "../../../../redux/action/TabsFilmAction";
import ItemFilm from "./ItemFilm";
const { TabPane } = Tabs;
export default function HomeTabsFilm() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setHeThongRapAction());
  // }, []);
  useEffect(() => {
    dispatch(setThongTinLichChieuAction());
  }, []);
  const { heThongRap, thongTinLichChieu } = useSelector(
    (state) => state.TabsFilmReducer
  );
  console.log({ heThongRap });
  console.log({ thongTinLichChieu });
  const renderTabsFilm = () => {
    return thongTinLichChieu?.map((cumrap, index) => {
      console.log(cumrap);
      return (
        <TabPane
          tab={<img src={cumrap.logo} className="w-10 h-10" />}
          key={index}
        >
          <Tabs tabPosition={"left"}>
            {cumrap.lstCumRap.map((rap, indexcumRap) => {
              return (
                <TabPane
                  tab={
                    <div>
                      <h3>{rap.tenCumRap}</h3>
                      <p>{rap.diaChi}</p>
                    </div>
                  }
                  key={indexcumRap}
                >
                  <div
                    style={{ height: 500 }}
                    className="w-full space-y-2 overflow-y-scroll h-80"
                  >
                    {rap.danhSachPhim?.map((film, index) => {
                      return index < 20 && <ItemFilm film={film} />;
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return <Tabs tabPosition={"left"}>{renderTabsFilm()}</Tabs>;
}
