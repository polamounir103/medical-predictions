import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import mainImg from "../../assets/images/baymax-hello.png";
function LandPage() {
  return (
    <main className="flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between px-3 md:px-20 pb-28 lg:px-38 gap-10 md:gap-20  ">
      <div className="flex flex-col items-center xl:items-start grow justify-end mt-52 pt-20  lg:pt-0 lg:mt-0 ">
        <div className="capitalize text-center lg:text-start flex flex-col gap-4 md:gap-12 text-stone-50">
          <div className="flex flex-col gap-4">
            <p>Welcome To Our Team</p>
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              <h1>medical Predictions</h1>
              <h1>online service</h1>
            </div>
          </div>
          <div>
            <p className="w-3/4 m-auto lg:m-0">
              where you can consult your and your familys health from anywhere
              with our Baymax
            </p>
          </div>
        </div>
        <div className="flex w-full gap-5 justify-center lg:justify-start mt-5">
          <Link to="/predictions">
            <button className="read-start-btn bg-slate-100 hover:bg-slate-100 text-cyan-600 font-semibold hover:text-black w-28 md:w-44 py-3 md:text-2xl text-xl md:border-2 border-gray-100 hover:border-transparent rounded">
              Start
            </button>
          </Link>

          <SLink to="about" smooth={true} duration={1000}>
            <button className="read-start-btn bg-transparent hover:bg-slate-100 text-white font-semibold hover:text-black w-28 md:w-44 py-3 md:text-2xl text-xl border-2 rounded">
              Read More
            </button>
          </SLink>
        </div>
      </div>
      {/* rounded-full shadow-2xl shadow-blue-950 */}
      <div className="lg:pt-12 grow  flex justify-center items-center main-img-container  ">
        {/* <div className="drop-shadow-2xl border-t-2 lg:border-t-0 lg:border-s-2 border-blue-950 rounded-full pt-32"> */}
        <div className="drop-shadow-2xl  border-blue-950 rounded-full lg:pt-32">
          <img
            src={mainImg}
            alt="main-image"
            className=" "
            srcSet={`
            ${mainImg} 300w, 
            ${mainImg} 600w,
            ${mainImg} 1200w
          `}
            sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
          />
        </div>
      </div>
    </main>
  );
}

export default LandPage;
