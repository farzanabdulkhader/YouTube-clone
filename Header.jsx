import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";
import Search from "./Search";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
      <HeaderIcons />
    </div>
  );
}

export default Header;
