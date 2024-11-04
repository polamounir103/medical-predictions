import { Link } from "react-router-dom";
import botIcon from "../../assets/icons/bot-icon.png";
import upArrow from "../../assets/icons/up-arrow-1.svg";

function FloatingIcons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-0 lg:bottom-10 right-0 lg:right-10 floating-icon-box">
      <ul className="flex justify-end flex-col gap-4 p-5">
        <li>
          <Link to="/chat-ai">
            <img
              src={botIcon}
              alt="Chat AI"
              className="floating-icon w-10 lg:w-12 rounded-full "
            />
          </Link>
        </li>
        <li>
          <button onClick={scrollToTop}>
            <img
              src={upArrow}
              alt="Scroll to Top"
              className="floating-icon w-10 lg:w-12 rounded-full "
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FloatingIcons;
