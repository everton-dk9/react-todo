import Logo from "../Logo";
import SearchBarInput from "../SearchBarInput";
import ThemeSwitcherButton from "../ThemeSwitcherButton";
import './styles.css';

function Header() {
  return (
    <header className="header-container">
        <div className="header-content">
          <Logo />
          <SearchBarInput />
          <ThemeSwitcherButton />
        </div>
    </header>
  )
}

export default Header;