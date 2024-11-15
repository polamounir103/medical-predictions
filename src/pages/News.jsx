import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import NewsCard from "../components/news/NewsCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function News() {
  const swiperRef = useRef(null);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

const getData = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=5a8add0775a94ce8818f100b2a84b510"
    );
    const result = await response.json();

    // console.log(response)
    // console.log(result)
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    setNews(result.articles); 
  } catch (error) {
    setError(error.message);
  }
};


  useEffect(() => {
    getData();
  }, []);

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
              <button className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-3 ">
                View More
              </button>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500">Error: {error}</p>}

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
              loop={news.length > 2}
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
              {news.length > 0 ? (
                news.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="news-card-box">
                      <NewsCard id={item.id || index} data={item} />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p>Loading news...</p>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
