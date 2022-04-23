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
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function HomeCarousel() {
  // const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCarouselAction());
  }, []);
  const { dsBannerPhim } = useSelector((state) => state.CarouselReducer);
  console.log(dsBannerPhim);
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
          {/* <div className="w-full h-full absolute top-0 flex justify-center items-center group">
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="L61p2uyiMSo"
              onClose={() => setOpen(false)}
            />
            <button
              className=" hidden group-hover:block"
              onClick={() => setOpen(true)}
            >
              <RightCircleOutlined className="text-5xl" />
            </button>
          </div> */}
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
