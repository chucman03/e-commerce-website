import "./AccountFunction.scss";

const AccountFunction = () => {
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
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>

              <input
                type={"Password"}
                className="form-control"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
                // onKeyDown={(event) => handleKeyDown(event)}
              />
            </div>
          </div>
          <div className="input-navigate">
            <a href="">Quên mật khẩu</a>
          </div>
        </div>
        <div className="account-function-btn">
          <button
            className="btn-submit"
            //   onClick={() => handleLogin()}
          >
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
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Tên</label>
              <input
                type={"text"}
                className="form-control"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type={"text"}
                className="form-control"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type={"email"}
                className="form-control"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>

              <input
                type={"Password"}
                className="form-control"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
                // onKeyDown={(event) => handleKeyDown(event)}
              />
            </div>
          </div>
        </div>
        <div className="account-function-btn">
          <button
            className="btn-submit"
            //   onClick={() => handleLogin()}
          >
            <span>ĐĂNG KÝ</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AccountFunction;
