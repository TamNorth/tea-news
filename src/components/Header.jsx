import logo_img from "../assets/tea_news.svg";
import menu from "../assets/menu.svg";
import placeholder from "../assets/profile_picture_placeholder.svg";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "./svg";
import { useContext, useState } from "react";
import UserLogin from "./UserLogin";
import { UserContext } from "../contexts/User";

export default function Header() {
  const navigate = useNavigate();
  const [userMenuDisplay, setUserMenuDisplay] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function toggleUserMenu() {
    setUserMenuDisplay(!userMenuDisplay);
  }

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
        <button id="user-menu-button" onClick={toggleUserMenu}>
          <img
            src={user.avatar_url}
            className="profile-pic"
            alt="profile picture"
          />
        </button>
        <UserLogin
          userMenuDisplay={userMenuDisplay}
          setUserMenuDisplay={setUserMenuDisplay}
        />
      </header>

      <div id="background"></div>
    </>
  );
}
