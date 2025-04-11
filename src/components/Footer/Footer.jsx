import "./Footer.scss";
import payMethod from "../../assets/img/payMethod.svg";
import fb from "../../assets/img/facebook.svg";
import ig from "../../assets/img/insta.svg";
import ytb from "../../assets/img/youtube.svg";
import tiktok from "../../assets/img/tiktok.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item intro">
        <div className="footer-title">
          <h1>CÔNG TY CỔ PHẦN CANIFA</h1>
        </div>
        <div className="footer-content intro">
          {" "}
          <p>
            Số ĐKKD: 0107574310, ngày cấp: 23/09/2016,
            <br />
            Nơi cấp: Sở Kế hoạch và đầu tư Hà Nội
            <br />
            Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê, Quận Hà
            Đông, Thành phố Hà Nội.
            <br />
            Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La Thành,
            Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội.
            <br />
            Điện thoại: +8424 - 7303.0222
            <br />
            Fax: +8424 - 6277.6419
            <br />
            Email: hello@canifa.com
          </p>
        </div>
        <div className="info">
          <a href="https://www.facebook.com/canifa.fanpage/">
            <img src={fb} alt="" />
          </a>
          <a href="https://www.instagram.com/canifa.fashion/">
            <img src={ig} alt="" />
          </a>
          <a href="https://www.youtube.com/CANIFAOfficial">
            <img src={ytb} alt="" />
          </a>
          <a href="https://www.tiktok.com/@hello.canifa">
            <img src={tiktok} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-item ainfo">
        <div className="footer-title">
          <h1>Thương hiệu</h1>
        </div>
        <div className="footer-content">
          <a href="" className="footer-content-nav">
            Giới thiệu
          </a>
          <a href="" className="footer-content-nav">
            Hệ thống cửa hàng
          </a>
          <a href="" className="footer-content-nav">
            Liên hệ
          </a>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-title">
          <h1>Hỗ trợ</h1>
        </div>
        <div className="footer-content">
          <a href="" className="footer-content-nav">
            Hỏi đáp
          </a>
          <a href="" className="footer-content-nav">
            Chính sách
          </a>
          <a href="" className="footer-content-nav">
            Tra cứu
          </a>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-title">
          <h1>Phương thức thanh toán</h1>
        </div>
        <div className="footer-content">
          <img src={payMethod} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
