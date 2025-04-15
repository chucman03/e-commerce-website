import App from "./App";
import MainHomepage from "./components/Home/MainHomepage";
import ManProduct from "./components/Man/ManProduct";
import { BrowserRouter, Routes, Route } from "react-router";
import WomenProduct from "./components/Women/WomenProduct";
import GirlProduct from "./components/Girl/GirlProduct";
import BoyProduct from "./components/Boy/BoyProduct";
const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainHomepage />} />
        <Route path="man" element={<ManProduct />} />
        <Route path="women" element={<WomenProduct />} />
        <Route path="boy" element={<BoyProduct />} />
        <Route path="girl" element={<GirlProduct />} />
      </Route>
      <Route path="/shop"></Route>
      <Route path="/account"></Route>
      <Route path="/cart"></Route>
    </Routes>
  );
};
export default Layout;
