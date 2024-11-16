import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import testImg from "../../assets/images/med-img.jpeg";

function NewsCard({ id, data }) {
  const dir = useSelector((state) => state.dir.dir); // Get direction from Redux

  const date = data.publishedAt;
  const formattedDate = new Date(date).toLocaleString("en-US").split(",")[0];

  return (
    <div
      className="news-card-container bg-white rounded-lg shadow-lg overflow-hidden"
      dir={dir}
    >
      <img
        src={data.image}
        alt={`Image for ${data.title}`} // Descriptive alt text
        className="w-full h-48 object-cover"
      />
      <div className="news-card-body p-5 flex flex-col justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">{data.title}</h2>
          <p className="text-sm text-gray-700">{data.description}</p>
        </div>
        <div className="news-card-footer flex justify-between items-center mt-auto">
          <button className="bg-sky-600 px-5 py-2 rounded-lg text-white font-semibold">
            {dir === "rtl" ? "أقرا المزيد" : "READ MORE"}
          </button>
          <span className="text-stone-400 text-sm">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
