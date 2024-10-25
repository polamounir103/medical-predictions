import mainImg from "../assets/images/main-image.png";
export default function Home() {
  return (
    <>
      <div className="">
        <main className="flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between ">
          <div className="flex flex-col gap-5 items-center xl:items-start grow justify-end">
            <div className="uppercase text-center xl:text-start text-4xl md:text-5xl lg:text-6xl font-extrabold">
              <h1>
                online <span className="text-red-700">medical</span>
              </h1>
              <h1>Predictions</h1>
            </div>
            <div className="flex gap-5 items-center xl:items-start">
              <button className="py-2 w-40 rounded-full text-xl font-semibold  bg-blue-200 hover:bg-blue-300">
                Start
              </button>
              <button className="py-2 w-40 rounded-full text-xl font-semibold bg-red-700 hover:bg-red-600 text-white ">
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
