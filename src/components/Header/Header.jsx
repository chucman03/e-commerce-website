import logoCanifa from "../../assets/img/logo.svg";
import searchIcon from "../../assets/img/search-icon.svg";
import shopIcon from "../../assets/img/shop-icon.svg";
import accountIcon from "../../assets/img/account-icon.svg";
import cartIcon from "../../assets/img/cart-icon.svg";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <a href="/">
          <img src={logoCanifa} alt="logo canifa" />
        </a>
      </div>
      <div className="header-menu">
        <ul>
          <li>
            <a href="">
              <span>NỮ</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>NAM</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>BÉ GÁI</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>BÉ TRAI</span>
            </a>
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
          <a href="" className="group-icon">
            <img src={shopIcon} alt="" />
            <span>Cửa hàng</span>
          </a>
        </div>
        <div className="header-account">
          <a href="" className="group-icon">
            <img src={accountIcon} alt="" />
            <span>Tài khoản</span>
          </a>
        </div>
        <div className="header-cart">
          <a href="" className="group-icon">
            <img src={cartIcon} alt="" />
            <span>Giỏ hàng</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
