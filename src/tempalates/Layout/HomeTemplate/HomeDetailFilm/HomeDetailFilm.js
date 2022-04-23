import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { Card } from "antd";
const { Meta } = Card;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setDetailFilmAction } from "../../../../redux/action/DetailFilmAction.js";
import { useHistory } from "react-router-dom";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  rows: 1,
  slidesToShow: 4,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function HomeDetailFilm() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDetailFilmAction());
  }, []);
  const { listFilmDetail } = useSelector((state) => state.DetailFilmReducer);
  console.log({ listFilmDetail });
  const renderFilmDetail = () => {
    return listFilmDetail?.map((film) => {
      return (
        <div className="mt-5">
          <div className="mx-5">
            <Card
              hoverable
              style={{ width: "100%", height: "500px" }}
              cover={
                <img
                  alt="example"
                  className="h-80 w-full object-cover"
                  src={film.hinhAnh}
                />
              }
            >
              <Meta
                title={film.tenPhim}
                description={
                  <p>
                    {film.moTa.length > 50
                      ? film.moTa.slice(0, 50) + "..."
                      : film.moTa}
                  </p>
                }
              />
              <div
                onClick={() => {
                  history.push(`/detail/${film.maPhim}`);
                }}
                className="w-full bg-gradient-to-r from-detailbts to-detailbte hover:to-yellow-500 font-medium text-white text-lg text-center py-3 rounded"
              >
                ĐẶT VÉ
              </div>
            </Card>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="px-0" style={{ height: "700px" }}>
      <Slider {...settings}>{renderFilmDetail()}</Slider>
    </div>
  );
}
