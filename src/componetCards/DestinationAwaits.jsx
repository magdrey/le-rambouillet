import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { homeslide } from "./CardData";

function DestinationAwaits() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {homeslide.map(({ content, img }, index) => (
          <SwiperSlide key={index}>
            <div className="divSlide">
              <div className="divSlideimg">{img}</div>
              <div className="divSlidecontent Gilroy-M">
                {content} <p className="read-more more">read more</p> <br />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default DestinationAwaits;
