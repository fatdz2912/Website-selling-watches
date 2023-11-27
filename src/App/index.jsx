import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import Address from "pages/user/Address";
import ChangePassword from "pages/user/ChangePassword";
import Favorite from "pages/user/Favorite";
import About from "pages/user/About";
import DeliveryPayment from "pages/user/DeliveryPayment";
import Maintenance from "pages/user/Maintenance";
import ShippingPolicy from "pages/user/ShippingPolicy";
import Genegal from "pages/user/Genegal";
import PrivaryPolicy from "pages/user/PrivacyPolicy";
import News from "pages/user/News";
import Contact from "pages/user/Contact";

import Login from "pages/Login";
import Register from "pages/Register";

import Dashboard from "pages/admin/Dashboard";
import ManagerProduct from "pages/admin/ManagerProduct";
import CreateProduct from "pages/admin/CreateProduct";
import UpdateProduct from "pages/admin/UpdateProduct";
import OrderManager from "pages/admin/OrderManager";
import AccountManager from "pages/admin/AccountManager";

import Successpay from "pages/user/PaySuccess";

import * as S from "./style";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const nagigate = useNavigate();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const { addressList, createAddress, updateAddress } = useSelector(
    (state) => state.address
  );
  const { changePassword, updateUserInfoData, changeAvatarData } = useSelector(
    (state) => state.auth
  );
  const { userInfo } = useSelector((state) => state.auth);
  const { favoriteList } = useSelector((state) => state.favorite);
  const { orderList, orderProductData } = useSelector((state) => state.order);
  const { reviewList, createReviewData } = useSelector((state) => state.review);
  const { addProductData, updateProductData, deleteProductData } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (!userInfo.data.id) {
      nagigate(ROUTES.USER.HOME);
    }
  }, [userInfo.data.id]);
  useEffect(() => {
    setIsShowLoading(
      cityList.loading ||
        districtList.loading ||
        wardList.loading ||
        addressList.loading ||
        createAddress.loading ||
        updateAddress.loading ||
        changePassword.loading ||
        updateUserInfoData.loading ||
        changeAvatarData.loading ||
        favoriteList.loading ||
        orderList.loading ||
        orderProductData.loading ||
        addProductData.loading ||
        updateProductData.loading ||
        deleteProductData.loading ||
        reviewList.loading ||
        createReviewData.loading
    );
  }, [
    cityList.loading,
    districtList.loading,
    wardList.loading,
    createAddress.loading,
    addressList.loading,
    updateAddress.loading,
    changePassword.loading,
    updateUserInfoData.loading,
    changeAvatarData.loading,
    favoriteList.loading,
    orderList.loading,
    orderProductData.loading,
    addProductData.loading,
    updateProductData.loading,
    deleteProductData.loading,
    reviewList.loading,
    createReviewData.loading,
  ]);
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
    <>
      <S.LoadingWrapper isShowLoading={isShowLoading}>
        <S.Loading className="loading">
          <S.Dot style={{ "--value": 1 }}></S.Dot>
          <S.Dot style={{ "--value": 2 }}></S.Dot>
          <S.Dot style={{ "--value": 3 }}></S.Dot>
          <S.Dot style={{ "--value": 4 }}></S.Dot>
          <S.Dot style={{ "--value": 5 }}></S.Dot>
          <S.Dot style={{ "--value": 6 }}></S.Dot>
          <S.Dot style={{ "--value": 7 }}></S.Dot>
          <S.Dot style={{ "--value": 8 }}></S.Dot>
        </S.Loading>
      </S.LoadingWrapper>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Navigate to={ROUTES.USER.HOME} />}></Route>
          <Route path={ROUTES.USER.HOME} element={<Home />} />
          <Route path={ROUTES.USER.PRODUCT_LIST} element={<ProductList />} />
          <Route
            path={ROUTES.USER.PRODUCT_DETAIL}
            element={<ProductDetail />}
          />
          <Route path={ROUTES.USER.CART} element={<Cart />} />
          <Route path={ROUTES.USER.CHECKOUT} element={<Checkout />} />
          <Route path={ROUTES.USER.ABOUT} element={<About />} />
          <Route path={ROUTES.USER.NEWS} element={<News />} />
          <Route path={ROUTES.USER.GENEGAL} element={<Genegal />} />
          <Route path={ROUTES.USER.MAINTENANCE} element={<Maintenance />} />
          <Route
            path={ROUTES.USER.PRIVACY_POLICY}
            element={<PrivaryPolicy />}
          />
          <Route path={ROUTES.USER.CONTACT} element={<Contact />} />
          <Route
            path={ROUTES.USER.DELIVERY_PAYMENT}
            element={<DeliveryPayment />}
          />

          <Route
            path={ROUTES.USER.SHIPPING_POLICY}
            element={<ShippingPolicy />}
          />

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
            <Route path={ROUTES.USER.ADDRESS} element={<Address />} />
            <Route
              path={ROUTES.USER.CHANGS_PASSWORD}
              element={<ChangePassword />}
            />
            <Route path={ROUTES.USER.FAVORITE} element={<Favorite />} />
          </Route>
        </Route>
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
          <Route
            path={ROUTES.ADMIN.PRODUCT_MANAGER}
            element={<ManagerProduct />}
          />
          <Route
            path={ROUTES.ADMIN.CREATE_PRODUCT}
            element={<CreateProduct />}
          />
          <Route
            path={ROUTES.ADMIN.UPDATE_PRODUCT}
            element={<UpdateProduct />}
          />
          <Route path={ROUTES.ADMIN.ORDER_MANAGER} element={<OrderManager />} />
          <Route
            path={ROUTES.ADMIN.ACCOUNT_MANAGER}
            element={<AccountManager />}
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Route>
        <Route path={ROUTES.USER.SUCCESSPAY} element={<Successpay />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
