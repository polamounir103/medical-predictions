import { useEffect, useState } from "react";
import openingImage from "../../assets/images/baymax-hello.png";
const OpeningAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const loadedStatus = sessionStorage.getItem("loaded");

    if (loadedStatus === "true") {
      setShowAnimation(false);
    } else {
      sessionStorage.setItem("loaded", "true");
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (!showAnimation) {
    return null;
  }

  return (
    <div className="animation-container">
      <div className="door-container">
        <div className={`door main-door ${isLoaded ? "open" : ""}`}>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-20 lg:px-52 h-full">
            <div className="flex flex-col gap-5 items-center xl:items-start grow justify-end ">
              <div className="uppercase text-center xl:text-start text-4xl md:text-5xl lg:text-6xl font-extrabold px-10">
                <h1>welcome To Our App</h1>
              </div>
            </div>
            {/* rounded-full shadow-2xl shadow-blue-950 */}
            <div className="lg:pt-12 grow  flex justify-center items-center main-img-container mb-20">
              <div className="drop-shadow-2xl border-t-2 lg:border-t-0 lg:border-s-2 border-blue-950 rounded-full overflow-visible">
                <img
                  src={openingImage}
                  alt="opening-image"
                  className=""
                  srcSet={`
                    ${openingImage} 400w, 
                    ${openingImage} 700w,
                    ${openingImage} 1200w
                  `}
                  sizes="(max-width: 400px) 600px, (max-width: 900px) 700px, 900px"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Left Panel */}
        <div className={`door left-door ${isLoaded ? "open" : ""}`}></div>

        {/* Right Panel */}
        <div className={`door right-door ${isLoaded ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default OpeningAnimation;
