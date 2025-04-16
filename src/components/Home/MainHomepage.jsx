import "./MainHomepage.scss";
import contentItem1 from "../../assets/img/main-background1.png";
import contentItem2 from "../../assets/img/main-background2.png";
import contentItem3 from "../../assets/img/main-background3.png";
import contentItem4 from "../../assets/img/main-background4.png";
import service1 from "../../assets/img/service1.png";
import service2 from "../../assets/img/service2.png";
import service3 from "../../assets/img/service3.png";
import next from "../../assets/img/next.svg";
import prev from "../../assets/img/prev.svg";
import productRouter1 from "../../assets/img/product-router1.png";
import productRouter2 from "../../assets/img/product-router2.png";
import productRouter3 from "../../assets/img/product-router3.png";
import productRouter4 from "../../assets/img/product-router4.png";
import { useEffect, useState, useRef } from "react";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
const MainHomepage = () => {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoSlideRef = useRef(null);
  // auto run slide and stop when hover
  useEffect(() => {
    if (!isHovering) {
      autoSlideRef.current = setInterval(() => {
        nextBtn();
      }, 3000);
    }
    return () => clearInterval(autoSlideRef.current);
  }, [active, isHovering]);

  const contentItem = [contentItem1, contentItem2, contentItem3, contentItem4];

  // change the image slide
  const nextBtn = (event) => {
    setActive(active === contentItem.length - 1 ? 0 : active + 1);
  };
  const prevBtn = (event) => {
    setActive(active === 0 ? contentItem.length - 1 : active - 1);
  };

  return (
    <div className="main-homepage-container">
      <div className="main-content">
        {contentItem.map((item, index) => {
          return (
            <div
              className={
                active === index ? "content-item active" : "content-item"
              }
              key={index}
            >
              <img
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                src={item}
                alt=""
                style={{ translate: `${-100 * active}%` }}
              />
            </div>
          );
        })}
      </div>
      <div className="slicks">
        <button className="slick-prev" onClick={prevBtn}>
          <img src={prev} alt="" />
        </button>
        <button className="slick-next" onClick={nextBtn}>
          <img src={next} alt="" />
        </button>
      </div>
      <div className="dots">
        {contentItem.map((_, index) => {
          return (
            <span
              key={`index-${index}`}
              className={active === index ? "dot active" : "dot"}
              onClick={() => setActive(index)}
            ></span>
          );
        })}
      </div>
      <div className="introduction">
        <div className="intro-item">
          <div className="intro-symbol">
            <img src={service1} className="service-symbol" />
          </div>
          <div className="intro-content">
            <div className="intro-title">Thanh toán khi nhận hàng</div>
            <div className="intro-desc">Giao hàng toàn quốc.</div>
          </div>
        </div>
        <div className="intro-item">
          <div className="intro-symbol">
            {" "}
            <img src={service2} className="service-symbol" />
          </div>
          <div className="intro-content">
            <div className="intro-title">Miễn phí giao hàng</div>
            <div className="intro-desc">Với đơn hàng trên 599.000đ.</div>
          </div>
        </div>
        <div className="intro-item">
          <div className="intro-symbol">
            {" "}
            <img src={service3} className="service-symbol" />
          </div>
          <div className="intro-content">
            <div className="intro-title">Đổi hàng miễn phí</div>
            <div className="intro-desc">Trong 30 ngày kể từ ngày mua.</div>
          </div>
        </div>
      </div>
      <div className="products-nav">
        <h2 className="products-nav-title">Sản phẩm mới</h2>
        <div className="products">
          <div className="product-router">
            <NavLink to="/women">
              <img src={productRouter1} alt="" />
            </NavLink>
          </div>
          <div className="product-router">
            <NavLink to="/man">
              <img src={productRouter2} alt="" />
            </NavLink>
          </div>
          <div className="product-router">
            <NavLink to="/girl">
              <img src={productRouter3} alt="" />
            </NavLink>
          </div>
          <div className="product-router">
            <NavLink to="/boy">
              <img src={productRouter4} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomepage;
