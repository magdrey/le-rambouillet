import React from "react";
import { reviewCards } from "./ServiceCardData";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Review() {
  return (
    <div className="Contact-1 ">
      <div className="revsects">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          direction={window.innerWidth < 751 ? "vertical" : "horizontal"}
          pagination={{ clickable: true }}
          className="sev-imgs osev-mb rev-imgs revswiper "
        >
          {reviewCards.map(({ img, name, text, rating }, index) => (
            <SwiperSlide className="revswiper-slide" key={index}>
              <div className="rev-cards revslide">
                <div className="rev-cardimg">{img} </div>
                <div className="revcard-body">
                  <div className="rev-rating"> {rating} </div>
                  <div className=" rev-name"> {name}</div>
                  <div className=" rev-text"> {text}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
