import logo_img from "../assets/tea_news.svg";
import menu from "../assets/menu.svg";
import placeholder from "../assets/profile_picture_placeholder.svg";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "./svg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <button>
          {/* <img src={menu} alt="menu" /> */}
          <MenuIcon />
        </button>
        <button
          id="home-button"
          onClick={() => {
            navigate(`/`);
          }}
        >
          <img src={logo_img} alt="home" />
          <span id="header-1">The </span>
          <h1>Daily Tea</h1>
        </button>
        <div className="hor-stretch"></div>
        <button id="profile-button">
          <img src={placeholder} alt="profile picture" />
        </button>
      </header>

      <div id="background"></div>
    </>
  );
}
