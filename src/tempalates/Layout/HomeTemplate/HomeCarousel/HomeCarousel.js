import React from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../pages/Ticket/Ticket.css";

import { GetCarouselAction } from "../../../../redux/action/CarouselAction";
// import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function HomeCarousel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCarouselAction());
  }, []);
  const { dsBannerPhim } = useSelector((state) => state.CarouselReducer);
  console.log(dsBannerPhim);
  const renderBanner = () => {
    return dsBannerPhim?.map((banner, index) => {
      return (
        <div key={index}>
          <img
            src={banner.hinhAnh}
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      );
    });
  };
  return (
    <div className="mb-5">
      <Slider {...settings}>{renderBanner()}</Slider>
    </div>
  );
}
