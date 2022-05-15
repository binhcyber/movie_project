import React from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../pages/Ticket/Ticket.css";
// import ReactDOM from "react-dom";
// import ModalVideo from "react-modal-video";
// import "node_modules/react-modal-video/scss/modal-video.scss";
import { GetCarouselAction } from "../../../../redux/action/CarouselAction";
// import { RightCircleOutlined } from "@ant-design/icons";
// import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         position: "absolute",
//         top: 180,
//         left: 20,
//       }}
//       onClick={onClick}
//     />
//   );
// };
// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         position: "absolute",
//         right: 20,
//       }}
//       onClick={onClick}
//     />
//   );
// };
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ marginBottom: "36px" }}> {dots} </ul>
    </div>
  ),
};
export default function HomeCarousel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCarouselAction());
  }, []);
  const { dsBannerPhim } = useSelector((state) => state.CarouselReducer);
  const renderBanner = () => {
    return dsBannerPhim?.map((banner, index) => {
      return (
        <div className="relative" key={index}>
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
    <div className="mb-5 mt-24">
      <Slider {...settings}>{renderBanner()}</Slider>
    </div>
  );
}
