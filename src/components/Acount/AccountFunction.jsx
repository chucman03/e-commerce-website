import "./AccountFunction.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postLogin } from "../../service/ApiService";
import { postSignUp } from "../../service/ApiService";

const AccountFunction = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    const isValidEmail = validateEmail(emailLogin);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }
    if (!passwordLogin) {
      toast.error("invalid password");
      return;
    }
    let data = await postLogin(emailLogin, passwordLogin);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    const isValidEmail = validateEmail(emailSignUp);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }
    if (!passwordSignUp) {
      toast.error("invalid password");
      return;
    }

    let data = await postSignUp(
      firstName,
      lastName,
      phoneNumber,
      emailSignUp,
      passwordSignUp
    );
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/account");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="account-function-container">
      <div className="account-login">
        <div className="account-function-title">ĐĂNG NHẬP</div>
        <div className="account-function-desc">
          Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và
          nhận được những ưu đãi tốt hơn!
        </div>
        <div className="account-function-form">
          <div className="input-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type={"email"}
                className="form-control"
                value={emailLogin}
                onChange={(event) => setEmailLogin(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>

              <input
                type={"Password"}
                className="form-control"
                value={passwordLogin}
                onChange={(event) => setPasswordLogin(event.target.value)}
                // onKeyDown={(event) => handleKeyDown(event)}
              />
            </div>
          </div>
          <div className="input-navigate">
            <a href="">Quên mật khẩu</a>
          </div>
        </div>
        <div className="account-function-btn">
          <button className="btn-submit" onClick={() => handleLogin()}>
            <span>ĐĂNG NHẬP</span>
          </button>
        </div>
      </div>
      <div className="account-register">
        <div className="account-function-title">ĐĂNG KÝ</div>
        <div className="account-function-desc">
          Hãy đăng ký ngay để tích lũy điểm thành viên và nhận được những ưu đãi
          tốt hơn!
        </div>
        <div className="account-function-form">
          <div className="input-form">
            <div className="form-group">
              <label>Họ</label>
              <input
                type={"text"}
                className="form-control"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Tên</label>
              <input
                type={"text"}
                className="form-control"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type={"text"}
                className="form-control"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type={"email"}
                className="form-control"
                value={emailSignUp}
                onChange={(event) => setEmailSignUp(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>

              <input
                type={"Password"}
                className="form-control"
                value={passwordSignUp}
                onChange={(event) => setPasswordSignUp(event.target.value)}
                // onKeyDown={(event) => handleKeyDown(event)}
              />
            </div>
          </div>
        </div>
        <div className="account-function-btn">
          <button className="btn-submit" onClick={() => handleSignUp()}>
            <span>ĐĂNG KÝ</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AccountFunction;
