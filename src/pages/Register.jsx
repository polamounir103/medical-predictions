import RegistrationForm from "../components/Forms/RegistrationForm";
// import Baymax from "../assets/images/baymax-hello.png";
// import { useEffect, useState } from "react";
function Register() {
//   const [imgScale, setImgScale] = useState(1);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const imgResizing = () => {
//     let scale = (screenWidth / 100) * 10;
//     setImgScale(scale);
//   };
//   useEffect(() => {
//     let width = window.innerWidth;
//     console.log(width);
//     setScreenWidth(width);
//     imgResizing();
//   }, [window.innerWidth]);
  return (
    <>
      <div className="registeration-page">
        <div className="min-h-svh">
    
          <div className="registeration-page-content px-2 pb-64 lg:pb-0 ">
            <RegistrationForm />
            {/* <div className="registeration-img-box">
              <img
                src={Baymax}
                alt=""
                style={{ transform: `scale(${imgScale})` }}
              />
            </div> */}
          </div>
          <div className="bottom-path bottom-0"></div>
        </div>
      </div>
    </>
  );
}

export default Register;
