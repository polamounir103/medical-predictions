import  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewsCard from "../components/news/NewsCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { fetchNews } from "../redux/slice/newsSlice";
import { Link } from "react-router-dom";

function News() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="page">
      <div>
        <div className="news-title-header">
          <div className="flex justify-between w-full items-center">
            <div>
              <h2 className="px-2 py-1 text-lg md:px-4 md:text-2xl">
                Latest News
              </h2>
            </div>
            <div className="px-2">
              <button className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-3">
                View More
              </button>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500">Error: {error}</p>}

        <div>
          <div className="flex justify-between px-5">
            <button className="px-2 py-5 bg-gray-100">
              <FaArrowLeft />
            </button>
            <button className="px-2 py-5 bg-gray-100">
              <FaArrowRight />
            </button>
          </div>
          <div className="px-5 pb-20">
            {loading ? (
              <p>Loading news...</p>
            ) : articles.length === 0 ? (
              <p>No news available</p>
            ) : (
              <Swiper
                slidesPerView={3}
                loop={articles.length > 2}
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
                {articles.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link to={item.url} className="news-card-box">
                      <NewsCard id={item.id || index} data={item} />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
