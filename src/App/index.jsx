import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { ROUTES } from "../constants/routes";
import { getUserInfoRequest } from "redux/slicers/auth.slice";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "layouts/AdminLayout";
import ProfileLayout from "layouts/ProfileLayout";
import AuthLayout from "layouts/AuthLayout";
import NotFoundPage from "../layouts/NotFound";

import Home from "../pages/user/Home";
import ProductList from "../pages/user/ProductList";
import ProductDetail from "../pages/user/ProductDetail";
import UserInfo from "pages/user/UserInfo";
import Cart from "pages/user/Cart";
import Checkout from "pages/user/Checkout";
import OrderHistories from "pages/user/OrderHistory";

import Login from "pages/Login";
import Register from "pages/Register";

import Dashboard from "pages/admin/Dashboard";
import ManagerProduct from "pages/admin/ManagerProduct";
import CreateProduct from "pages/admin/CreateProduct";
import UpdateProduct from "pages/admin/UpdateProduct";

import Successpay from "pages/user/PaySuccess";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const tokenData = jwtDecode(accessToken);
      dispatch(
        getUserInfoRequest({
          id: parseInt(tokenData.sub),
        })
      );
    }
  }, []);
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Navigate to={ROUTES.USER.HOME} />}></Route>
        <Route path={ROUTES.USER.HOME} element={<Home />} />
        <Route path={ROUTES.USER.PRODUCT_LIST} element={<ProductList />} />
        <Route path={ROUTES.USER.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={ROUTES.USER.CART} element={<Cart />} />
        <Route path={ROUTES.USER.CHECKOUT} element={<Checkout />} />
        <Route element={<ProfileLayout />}>
          <Route
            path={ROUTES.USER.ORDER_HISTORY}
            element={<OrderHistories />}
          />
          <Route
            path={ROUTES.USER.PROFILE}
            element={<Navigate to={ROUTES.USER.USERINFO} />}
          />
          <Route path={ROUTES.USER.USERINFO} element={<UserInfo />} />
        </Route>
      </Route>
      <Route element={<AdminLayout />}>
        <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
        <Route
          path={ROUTES.ADMIN.PRODUCT_MANAGER}
          element={<ManagerProduct />}
        />
        <Route path={ROUTES.ADMIN.CREATE_PRODUCT} element={<CreateProduct />} />
        <Route path={ROUTES.ADMIN.UPDATE_PRODUCT} element={<UpdateProduct />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Route>
      <Route path={ROUTES.USER.SUCCESSPAY} element={<Successpay />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
