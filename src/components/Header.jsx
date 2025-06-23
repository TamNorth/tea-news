import logo from "../assets/tea_news.svg";

export default function Header() {
  return (
    <header>
      <button>
        <img src={logo} alt="home" />
      </button>
    </header>
  );
}
