import testImg from "../../assets/images/med-img.jpeg";

function NewsCard({ id, data }) {

  const date = data.publishedAt;
  const formattedDate = new Date(date).toLocaleString("en-US").split(",")[0];

  return (
    <div className="news-card-container bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={testImg}
        alt="news"
        className="w-full h-48 object-cover" // Set fixed height for images
      />
      <div className="news-card-body p-5 flex flex-col justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-right">
            {data.title}
          </h2>
          <p className="text-sm text-gray-700 text-right">{data.description}</p>
        </div>
        <div className="news-card-footer flex justify-between items-center mt-auto">
          <button className="bg-sky-600 px-5 py-2 rounded-lg text-white font-semibold">
            READ MORE
          </button>
          <span className="text-stone-400 text-sm">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
