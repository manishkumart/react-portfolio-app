import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ML from "../../img/ML.png";
import DL from "../../img/DL.png";
import CV from "../../img/CV.png";
import NLP from "../../img/NLP.png";
import BigDataBanner from "../../img/BigDataBanner.png";


import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={ML} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DL} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CV} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NLP} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BigDataBanner} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
