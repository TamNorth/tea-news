import logo_img from "../assets/tea_news.svg";
import menu from "../assets/menu.svg";
import placeholder from "../assets/profile_picture_placeholder.svg";

export default function Header() {
  return (
    <header>
      <button>
        <img src={menu} alt="menu" />
      </button>
      <button>
        <img src={logo_img} alt="home" />
      </button>
      <div class="hor-stretch"></div>
      <button id="profile-button">
        <img src={placeholder} alt="profile picture" />
      </button>
    </header>
  );
}
