import { useMemo } from "react";
import * as S from "./style";
import { Link, useLocation } from "react-router-dom";
import { PROFILE_MENU } from "layouts/ProfileLayout/constant";
import { useSelector } from "react-redux";
function Sidebar() {
  const { userInfo } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const renderProfileMenu = useMemo(() => {
    return PROFILE_MENU.map((item, index) => {
      return (
        <Link to={item.path} key={index} style={{ color: "black" }}>
          <S.ProfileMenuItem key={index} active={item.path === pathname}>
            <div>{item.icon}</div>
            <p style={{ marginLeft: 12 }}>{item.label}</p>
          </S.ProfileMenuItem>
        </Link>
      );
    });
  }, [pathname]);
  return (
    <S.SidebarWrapper xs={24} sm={8} md={7} xl={5}>
      <S.UserWithAvatar>
        <S.AvatarWrapper>
          <S.Avatar src={userInfo?.data?.avatar}></S.Avatar>
        </S.AvatarWrapper>
        <S.Username>{userInfo.data.fullName}</S.Username>
      </S.UserWithAvatar>
      {renderProfileMenu}
    </S.SidebarWrapper>
  );
}

export default Sidebar;
