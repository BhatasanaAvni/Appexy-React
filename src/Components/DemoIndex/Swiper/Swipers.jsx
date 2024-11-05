import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container, Row, Col } from "react-bootstrap";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./Swipers.css";

import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
} from "../../../assets/Image/screen-shot/ScreenShot";

const Screenshots = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
   
    <div className="containerx" id="screenshot">
       <Row className="justify-content-center mb-5 ">
          <Col md={8} lg={6} className="text-center">
            <h6 className="subtitle">
              Our <span className="fw-bold">App <strong>Screens</strong> </span>
            </h6>
            <h2 className="title py-3" >Awesome Screenshot</h2>
            <p className="text-muted ">
            Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.
            </p>
          </Col>
        </Row>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5} 
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}

        <div className="slider-controler" >
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>

  );
};

export default Screenshots;
