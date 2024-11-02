import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import mainImg from "../../assets/images/baymax-hello.png";
function LandPage() {
  return (
    <main className="flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between px-3 md:px-20 pb-28 lg:px-38 gap-10 md:gap-20  ">
      <div className="flex flex-col gap-5 items-center xl:items-start grow justify-end">
        <div className="uppercase text-center xl:text-start text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <h1>
            online <span className="text-red-700">medical</span>
          </h1>
          <h1>Predictions</h1>
        </div>
        <div className="flex gap-5 items-center xl:items-start">
          <Link to="/predictions">
            <button className="py-2 w-32 md:w-40 rounded-full md:text-xl font-semibold  bg-blue-200 hover:bg-blue-300">
              Start
            </button>
          </Link>

          <SLink to="about" smooth={true} duration={1000}>
            <button className="py-2 w-32 md:w-40 rounded-full md:text-xl font-semibold bg-red-700 hover:bg-red-600 text-white ">
              Read More
            </button>
          </SLink>
        </div>
      </div>
      {/* rounded-full shadow-2xl shadow-blue-950 */}
      <div className="lg:pt-12 grow  flex justify-center items-center main-img-container ">
        <div className="drop-shadow-2xl border-t-2 lg:border-t-0 lg:border-s-2 border-blue-950 rounded-full ">
          <img
            src={mainImg}
            alt="main-image"
            className=" "
            srcSet={`
            ${mainImg} 400w, 
            ${mainImg} 700w,
            ${mainImg} 1200w
          `}
            sizes="(max-width: 600px) 600px, (max-width: 900px) 700px, 900px"
          />
        </div>
      </div>
    </main>
  );
}

export default LandPage;
