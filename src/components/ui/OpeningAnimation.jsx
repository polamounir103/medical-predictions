import { useEffect, useState } from "react";

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
          <div className="text-red-600 flex justify-center items-center h-full w-full main-loader-content">
            <h2 className="text-5xl font-bold">
                WELCOME TO OUR APP
            </h2>
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
