import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Styles from "../../styles/components/shared/header.module.css";

export default function Header() {
  const {
    mainHeader,
    header,
    headerLogo,
    largManu,
    smallMenu,
    menuToggeler,
    smallMenuShow,
    showMenu,
    hideMenu,
    headerNavBtnBox,
    headerActiveLink,
  } = Styles;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({
    background: "transparent",
    boxShadow: "none",
  });

  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  const updateHeaderStyleOnScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 100;
    const opacity = Math.min(scrollPosition / maxScroll, 1);

    setHeaderStyle({
      background: `rgba(4, 116, 181, ${opacity})`,
      boxShadow: `0 0 10px rgba(24, 24, 24, ${opacity})`,
    });
  };

  useEffect(() => {
    if (isHome) {
      window.addEventListener("scroll", updateHeaderStyleOnScroll);
      updateHeaderStyleOnScroll();

      return () => {
        window.removeEventListener("scroll", updateHeaderStyleOnScroll);
      };
    } else {
      setHeaderStyle({
        background: "rgb(4, 116, 181)",
        boxShadow: "0 0 10px rgba(24, 24, 24, 1)",
      });
    }
  }, [isHome]);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle and close menu
  const toggleMenu = () => setIsMenuShow((prev) => !prev);
  const closeMenu = () => setIsMenuShow(false);

  // Links for navigation
  const links = [
    { path: "/", label: "home" },
    { path: "/predictions", label: "predictions" },
    { path: "/chat-ai", label: "chat" },
    { path: "/news", label: "news" },
    { path: "/login", label: "login" },
  ];

  return (
    <header
      className={mainHeader}
      style={{
        ...headerStyle,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className={`${header} items-center`}>
        <h2
          className={`${headerLogo} text-xl md:text-2xl lg:text-3xl xl:text-4xl`}
        >
          Baymax
        </h2>

        <nav className="flex">
          <div className={headerNavBtnBox}>
            <button className={menuToggeler} onClick={toggleMenu}>
              <div
                className={`menu-toggler-icon-box ${
                  isMenuShow ? "active" : ""
                }`}
              >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>
          </div>

          <div
            className={`${screenWidth > 768 ? largManu : smallMenu} ${
              isMenuShow && smallMenuShow
            } `}
          >
            <ul className={isMenuShow ? showMenu : hideMenu}>
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => {
                      closeMenu();
                    }}
                    aria-label={`Go to ${link.label}`}
                    className={`${
                      link.label == "login" ? "border-2" : ""
                    } capitalize ${
                      link.path == location.pathname && headerActiveLink
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
