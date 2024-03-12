// react import
import { useEffect, useState } from "react";

// rrd import
import { Link, NavLink } from "react-router-dom";

// library import
import { useMediaQuery } from "react-responsive";

const blackLogo =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/logoblack.png";
const whiteLogo =
  "https://nftstorage.link/ipfs/bafybeifbzll34k6fqfoza7irrpfgawoh3sfmus3igjmqfknwgtz2rqolna/logowhite.png";

function Header() {
  const [bgColor, setBgColor] = useState(false);
  const [logo, setLogo] = useState(whiteLogo);

  const [isDropdown, setIsDropdown] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "850px" });

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleMouseEnter = () => setIsDropdown(true);
  const handleMouseLeave = () => setIsDropdown(false);

  const renderNavLinks = () => {
    return (
      <nav className={!isMobile ? "nav" : "nav-sm"}>
        <NavLink className="nav-link" to="/" onClick={closeMobileMenu}>
          Anasayfa
        </NavLink>
        <NavLink
          className="nav-link"
          to="/hakkimizda"
          onClick={closeMobileMenu}
        >
          Hakkımızda
        </NavLink>
        <NavLink className="nav-link" to="/hizmetler" onClick={closeMobileMenu}>
          Hizmetler
        </NavLink>
        <div
          className={isMobile ? "" : "dropdown-container"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink
            className={isMobile ? "nav-link" : "nav-link drop"}
            to="/urunler"
            onClick={closeMobileMenu}
          >
            Ürünler
          </NavLink>
          {!isMobile && isDropdown && (
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
        <NavLink className="nav-link" to="/iletisim" onClick={closeMobileMenu}>
          İletişim
        </NavLink>
      </nav>
    );
  };

  return (
    <div className={bgColor ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      {isMobile ? (
        <div className={`nav-menu ${isMenuOpen ? "show-menu" : ""}`}>
          {isMenuOpen && renderNavLinks()}
        </div>
      ) : (
        renderNavLinks()
      )}

      {isMobile && (
        <button className="nav-toggle" onClick={toggleMenu}>
          MENÜ
        </button>
      )}
    </div>
  );
}

export default Header;
