import mainImg from "../assets/images/main-image.png";
export default function Home() {
  return (
    <>
      <div className="pt-24 md:pt-40 lg:pt-0 px-3 md:px-20 lg:px-38">
        <main className="flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between ">
          <div className="flex flex-col gap-5 items-center xl:items-start grow justify-end">
            <div className="uppercase text-center xl:text-start text-4xl md:text-5xl lg:text-6xl font-extrabold">
              <h1>
                online <span className="text-red-700">medical</span>
              </h1>
              <h1>Predictions</h1>
            </div>
            <div className="flex gap-5 items-center xl:items-start">
              <button className="py-2 w-40 rounded-full text-xl font-semibold bg-indigo-200">
                Start
              </button>
              <button className="py-2 w-40 rounded-full text-xl font-semibold bg-red-700 text-white ">
                Read More
              </button>
            </div>
          </div>

          <div className="lg:pt-12 grow">
            <img src={mainImg} alt="main-image" />
          </div>
        </main>
      </div>
    </>
  );
}
