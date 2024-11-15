import testImg from "../../assets/images/med-img.jpeg";
function NewsCard({ id }) {
  return (
    <div className="">
      <img src={testImg} alt="" />
      <div className="news-card-body p-5 flex flex-col gap-7 ">
        <div>
          <h2>News Title here {id}</h2>
          <p>
            News description here News description here News description here
            News description here News description here News description here
          </p>
        </div>
        <div className="news-card-footer flex justify-between items-center">
          <button className="bg-sky-600 px-5 py-2 rounded-lg text-white font-semibold">READ MORE</button> 
          <span className="text-stone-400 text-sm">12-7-2024</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
