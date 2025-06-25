import logo_img from "../assets/tea_news.svg";
import menu from "../assets/menu.svg";
import placeholder from "../assets/profile_picture_placeholder.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <button>
          <img src={menu} alt="menu" />
        </button>
        <button
          onClick={() => {
            navigate(`/`);
          }}
        >
          <img src={logo_img} alt="home" />
        </button>
        <div className="hor-stretch"></div>
        <button id="profile-button">
          <img src={placeholder} alt="profile picture" />
        </button>
      </header>

      <div id="background" />
    </>
  );
}
