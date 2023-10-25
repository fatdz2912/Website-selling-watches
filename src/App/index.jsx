import { ConfigProvider } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/user/Home";
import ProductList from "../pages/user/ProductList";
import UserLayout from "../layouts/UserLayout";
import { ROUTES } from "../constants/routes";
import NotFoundPage from "../layouts/NotFound";
import ProductDetail from "../pages/user/ProductDetail";
import AccountUserLayout from "layouts/AccountUserLayout";
import Profile from "pages/user/Account/Profile";
function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Navigate to={ROUTES.USER.HOME} />}></Route>
        <Route path={ROUTES.USER.HOME} element={<Home />} />
        <Route path={ROUTES.USER.PRODUCT_LIST} element={<ProductList />} />
        <Route path={ROUTES.USER.PRODUCT_DETAIL} element={<ProductDetail />} />
      </Route>
      <Route element={<AccountUserLayout />}>
        <Route path={ROUTES.USER.ACCOUNT.PROFILE} element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
