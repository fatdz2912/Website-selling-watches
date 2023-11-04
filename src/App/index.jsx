import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { ROUTES } from "../constants/routes";
import { getUserInfoRequest } from "redux/slicers/auth.slice";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "layouts/AdminLayout";
import AccountUserLayout from "layouts/AccountUserLayout";
import AuthLayout from "layouts/AuthLayout";
import NotFoundPage from "../layouts/NotFound";

import Home from "../pages/user/Home";
import ProductList from "../pages/user/ProductList";
import ProductDetail from "../pages/user/ProductDetail";
import Profile from "pages/user/Account/Profile";

import Login from "pages/Login";
import Register from "pages/Register";

import Dashboard from "pages/admin/Dashboard";
import ManagerProduct from "pages/admin/ManagerProduct";

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
      </Route>
      <Route element={<AdminLayout />}>
        <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.ADMIN.PRODUCT_LIST} element={<ManagerProduct />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Route>
      <Route element={<AccountUserLayout />}>
        <Route path={ROUTES.USER.ACCOUNT.PROFILE} element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
