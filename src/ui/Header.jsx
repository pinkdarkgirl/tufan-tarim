// react import
import { useEffect, useState } from "react";

// img import
import blackLogo from "../assets/logoblack.png";
import whiteLogo from "../assets/logowhite.png";

// rrd import
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [bgColor, setBgColor] = useState(false);
  const [logo, setLogo] = useState(whiteLogo);

  const [isDropdown, setIsDropdown] = useState(false);

  // change nav color on scroll
  const changeHeader = () => {
    if (window.scrollY >= 20) {
      setBgColor(true);
      setLogo(blackLogo);
    } else {
      setBgColor(false);
      setLogo(whiteLogo);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  const handleMouseEnter = () => setIsDropdown(true);
  const handleMouseLeave = () => setIsDropdown(false);

  return (
    <div className={bgColor ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="navbar-bg">
        <NavLink className="nav-link" to="/">
          Anasayfa
        </NavLink>
        <NavLink className="nav-link" to="/hakkimizda">
          Hakkımızda
        </NavLink>
        <NavLink className="nav-link" to="/hizmetler">
          Hizmetler
        </NavLink>
        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink className="nav-link drop" to="/urunler">
            Ürünler
          </NavLink>
          {isDropdown && (
            <ul>
              <li>
                <Link className="dropdown-link" to="/urunler/ilac">
                  Zirai İlaçlar
                </Link>
              </li>
              <li>
                <Link className="dropdown-link" to="/urunler/gubre">
                  Gübre & Takviye
                </Link>
              </li>
              <li>
                <Link className="dropdown-link" to="/urunler/sulama">
                  Sulama Sistemleri
                </Link>
              </li>
              <li>
                <Link className="dropdown-link" to="/urunler/tohum">
                  Tohum & Fide
                </Link>
              </li>
            </ul>
          )}
        </div>
        <NavLink className="nav-link" to="/iletisim">
          İletişim
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
