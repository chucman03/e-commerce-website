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
const MainHomepage = () => {
  return (
    <div className="main-homepage-container">
      <div className="main-content">
        <div className="content-item  ">
          <a href="">
            <img src={contentItem1} alt="" />
          </a>
        </div>
        <div className="content-item ">
          <a href="">
            <img src={contentItem2} alt="" />
          </a>
        </div>
        <div className="content-item active">
          <a href="">
            <img src={contentItem3} alt="" />
          </a>
        </div>
        <div className="content-item ">
          <a href="">
            <img src={contentItem4} alt="" />
          </a>
        </div>
      </div>
      <div className="slicks">
        <button className="slick-prev">
          <img src={prev} alt="" />
        </button>
        <button className="slick-next">
          <img src={next} alt="" />
        </button>
      </div>
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
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
            <a href="">
              <img src={productRouter1} alt="" />
            </a>
          </div>
          <div className="product-router">
            <a href="">
              <img src={productRouter2} alt="" />
            </a>
          </div>
          <div className="product-router">
            <a href="">
              <img src={productRouter3} alt="" />
            </a>
          </div>
          <div className="product-router">
            <a href="">
              <img src={productRouter4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomepage;
