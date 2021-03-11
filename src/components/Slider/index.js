import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SmallItem from '../SmallItem/';
import './Slider.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = ({items, title}) => {

  return (
    <div className="slider">
      <div className="slider__title">
        {title}
      </div>
      <Swiper
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          780: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1181: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
      >
        {items.map(el => {
          return(
            <SwiperSlide key={el.id}>
              <SmallItem item={el}/>
            </SwiperSlide>
          )
        })}
        <div className="slider__navigation">
          <div className="swiper-button-next">
            <svg width="56" height="28" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
              <path d="M55.3584 12.4516C55.3577 12.4509 55.3572 12.4501 55.3564 12.4495L43.9263 1.07449C43.07 0.222352 41.685 0.225523 40.8326 1.08193C39.9804 1.93823 39.9837 3.32324 40.84 4.17549L48.5142 11.8125H2.1875C0.979344 11.8125 0 12.7918 0 14C0 15.2081 0.979344 16.1875 2.1875 16.1875H48.514L40.8401 23.8245C39.9838 24.6767 39.9805 26.0618 40.8327 26.9181C41.6851 27.7746 43.0702 27.7775 43.9264 26.9255L55.3565 15.5505C55.3572 15.5498 55.3577 15.5491 55.3585 15.5484C56.2153 14.6933 56.2125 13.3038 55.3584 12.4516Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="swiper-button-prev">
            <svg width="56" height="28" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
              <path d="M0.641595 15.5484C0.642251 15.5491 0.642797 15.5498 0.643563 15.5505L12.0737 26.9255C12.93 27.7776 14.315 27.7745 15.1674 26.9181C16.0196 26.0618 16.0163 24.6768 15.16 23.8245L7.48584 16.1875L53.8125 16.1875C55.0207 16.1875 56 15.2082 56 14C56 12.7919 55.0207 11.8125 53.8125 11.8125L7.48596 11.8125L15.1599 4.1755C16.0162 3.32326 16.0195 1.93824 15.1673 1.08194C14.3149 0.225428 12.9298 0.222475 12.0736 1.07451L0.643453 12.4495C0.642797 12.4502 0.642251 12.4509 0.641485 12.4516C-0.215251 13.3067 -0.212516 14.6962 0.641595 15.5484Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default Slider