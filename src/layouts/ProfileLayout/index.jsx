import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import Sidebar from "./components/Sidebar";

import * as S from "./style";
import { ROUTES } from "constants/routes";
import { FaHome, FaBars } from "react-icons/fa";
import { Breadcrumb, Space } from "antd";
import { useMemo } from "react";
import { PROFILE_MENU } from "./constant";
import { color } from "themes/color";

function AccountUserLayout() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [avatar, setAvatar] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");

  const { pathname } = useLocation();

  const profileLabel = useMemo(() => {
    return PROFILE_MENU.find((item) => item.path === pathname)?.label;
  }, [pathname]);
  if (accessToken && userInfo.loading) {
    return "loading...";
  } else {
    return (
      <S.LayoutWrapper>
        <Breadcrumb
          items={[
            {
              title: (
                <Link to={ROUTES.USER.HOME}>
                  <Space>
                    <FaHome />
                    <span>Trang chủ</span>
                  </Space>
                </Link>
              ),
            },
            {
              title: profileLabel,
            },
          ]}
        />
        <S.ProfileMainWrapper gutter={[16, 16]} justify={"center"}>
          <S.NavMenu
            sm={2}
            xs={2}
            md={0}
            xl={0}
            onClick={() => setIsShowSidebar(!isShowSidebar)}
          >
            <FaBars size={25} color={color.primary} />
          </S.NavMenu>
          <Sidebar avatar={avatar} setAvatar={setAvatar} />
          <S.ProfileMainContainer xs={22} md={22} xl={19}>
            <Outlet />
          </S.ProfileMainContainer>
        </S.ProfileMainWrapper>
      </S.LayoutWrapper>
    );
  }
}
export default AccountUserLayout;
