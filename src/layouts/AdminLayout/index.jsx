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
    return "loading...";
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
