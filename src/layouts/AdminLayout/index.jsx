import { ROUTES } from "constants/routes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import * as S from "./style";

function AdminLayout() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const { userInfo } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && userInfo.loading) {
    return (
      <S.LoadingWrapper>
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
    );
  } else {
    if (userInfo.data.role === "user") {
      return <Navigate to={ROUTES.USER.HOME} />;
    } else
      return (
        <S.LayoutAdminWrapper>
          <Header
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
          />
          <S.MainWrapper>
            <Sidebar isShowSidebar={isShowSidebar} />
            <S.MainContainer isShowSidebar={isShowSidebar}>
              <Outlet />
            </S.MainContainer>
          </S.MainWrapper>
        </S.LayoutAdminWrapper>
      );
  }
}
export default AdminLayout;
