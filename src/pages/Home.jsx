import LandPage from "../components/home/LandPage";
import MainInfo from "../components/home/MainInfo";
import BetweenSections from "../components/shared/BetweenSections";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="landing-page ">
          {/* <div className="top-path">
            <svg width="0" height="0">
              <defs>
                <clipPath id="customClip">
                  <path d="M 0 0 V 20 H 30 Q 31 3 27 2 Z" />
                </clipPath>
              </defs>
            </svg>
          </div> */}
          {/* Right Path */}
          <div className="landing-page-content ">
            <LandPage />
          </div>
          <div className="bottom-path"></div>
        </div>
        <BetweenSections tColor="#ffffff" bColor="#F0F0F0" />
        <MainInfo />
      </div>
    </>
  );
}

// <div className="right-path ">
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//     <defs>
//       <linearGradient
//         id="gradient"
//         x1="100%"
//         y1="100%"
//         x2="0%"
//         y2="0%"
//       >
//         <stop
//           offset="0%"
//           style={{ stopColor: "#00c3ac", stopOpacity: 1 }}
//         />
//         <stop
//           offset="100%"
//           style={{ stopColor: "#66e2f5", stopOpacity: 1 }}
//         />
//       </linearGradient>
//     </defs>
//     {/* fill="url(#gradient)" */}
//     <path
//       fill="url(#gradient)"
//       d="M0,256L40,229.3C80,203,160,149,240,133.3C320,117,400,139,480,149.3C560,160,640,160,720,165.3C800,171,880,181,960,176C1040,171,1120,149,1200,138.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
//     ></path>
//   </svg>
// </div>;
