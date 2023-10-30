import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getUserInfoRequest } from "redux/slicers/auth.slice";

import Home from "../pages/user/Home";
import ProductList from "../pages/user/ProductList";
import UserLayout from "../layouts/UserLayout";
import { ROUTES } from "../constants/routes";
import NotFoundPage from "../layouts/NotFound";
import ProductDetail from "../pages/user/ProductDetail";
import AccountUserLayout from "layouts/AccountUserLayout";
import Profile from "pages/user/Account/Profile";
import Login from "pages/Login";
import Register from "pages/Register";
import { jwtDecode } from "jwt-decode";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      console.log(accessToken);
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
      <Route element={<AccountUserLayout />}>
        <Route path={ROUTES.USER.ACCOUNT.PROFILE} element={<Profile />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
