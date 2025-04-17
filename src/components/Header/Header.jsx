import logoCanifa from "../../assets/img/logo.svg";
import searchIcon from "../../assets/img/search-icon.svg";
import shopIcon from "../../assets/img/shop-icon.svg";
import accountIcon from "../../assets/img/account-icon.svg";
import cartIcon from "../../assets/img/cart-icon.svg";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import MultilevelMenu from "./MultilevelMenu";
import { useState } from "react";
const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  const [menuItemNav, setMenuItemNav] = useState(100);
  const handleMouseEnter = (e) => {
    const id = parseInt(e.currentTarget.dataset.id, 10);
    setMenuItemNav(id);
    setActiveSubmenu(true);
  };
  const handleMouseLeave = (e) => {
    setActiveSubmenu(false);
  };
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <a href="/">
            <img src={logoCanifa} alt="logo canifa" />
          </a>
        </div>
        <div className="header-menu">
          <ul>
            <li
              data-id={0}
              className="nav-link-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/women" className="nav-link">
                <span>NỮ</span>
              </NavLink>
            </li>
            <li
              data-id={1}
              className="nav-link-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/man" className="nav-link">
                <span>NAM</span>
              </NavLink>
            </li>
            <li
              data-id={2}
              className="nav-link-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/girl" className="nav-link">
                <span>BÉ GÁI</span>
              </NavLink>
            </li>
            <li
              data-id={3}
              className="nav-link-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/boy" className="nav-link">
                <span>BÉ TRAI</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header-search">
          <div className="search-input-group">
            <button role="button" aria-label="Search" className="search-btn">
              <img src={searchIcon} alt="" />
            </button>
            <input type="text" placeholder="search" className="search-input" />
          </div>
        </div>
        <div className="header-group-icon">
          <div className="header-store">
            <Link to="/" className="group-icon">
              <img src={shopIcon} alt="" />
              <span>Cửa hàng</span>
            </Link>
          </div>
          <div className="header-account">
            <Link to="/account" className="group-icon">
              <img src={accountIcon} alt="" />
              <span>Tài khoản</span>
            </Link>
          </div>
          <div className="header-cart">
            <Link to="/" className="group-icon">
              <img src={cartIcon} alt="" />
              <span>Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={activeSubmenu === true ? "sub-menu" : "sub-menu inactive"}
        onMouseEnter={() => setActiveSubmenu(true)}
        onMouseLeave={() => setActiveSubmenu(false)}
      >
        <MultilevelMenu id={menuItemNav} />
      </div>
    </div>
  );
};

export default Header;
