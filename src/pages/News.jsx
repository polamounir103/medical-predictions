import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import NewsCard from "../components/news/NewsCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
function News() {
  const swiperRef = useRef(null);

  const [news] = useState([
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ]);

  return (
    <div className="page">
      <div>
        <div className="news-title-header">
          <div className="flex justify-between w-full items-center">
            <div className="">
              <h2 className="px-2 py-1 text-lg md:px-4  md:text-2xl">
                Latest News
              </h2>
            </div>
            <div className="px-2">
              <button className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-3 ">
                View More
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between px-5">
            <button
              className="px-2 py-5 bg-gray-100"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft />
            </button>
            <button
              className="px-2 py-5 bg-gray-100"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="px-5 pb-20">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={3}
              loop={true}
              spaceBetween={30}
              className="mySwiper"
              breakpoints={{
                0: { slidesPerView: 1 },
                240: { slidesPerView: 1.1 },
                568: { slidesPerView: 1.75 },
                769: { slidesPerView: 3 },
                1024: { slidesPerView: 3.5 },
              }}
            >
              {news.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="news-card-box">
                    <NewsCard id={item.id} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
