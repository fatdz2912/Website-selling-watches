import { useMemo } from "react";
import * as S from "./style";
import { Link, useLocation } from "react-router-dom";
import { PROFILE_MENU } from "layouts/ProfileLayout/constant";
function Sidebar() {
  const { pathname } = useLocation();
  const renderProfileMenu = useMemo(() => {
    return PROFILE_MENU.map((item, index) => {
      return (
        <Link to={item.path} key={index} style={{ color: "black" }}>
          <S.ProfileMenuItem active={item.path === pathname}>
            <div>{item.icon}</div>
            <p style={{ marginLeft: 12 }}>{item.label}</p>
          </S.ProfileMenuItem>
        </Link>
      );
    });
  }, [pathname]);
  return (
    <S.SidebarWrapper xs={0} md={0} xl={5}>
      <S.UserWithAvatar>
        <S.AvatarWrapper>
          <S.Avatar src="http://localhost:3000/static/media/avatar.c3977b10f8422357ca38.jpg"></S.Avatar>
        </S.AvatarWrapper>
        <S.Username>Ngovantri2912</S.Username>
      </S.UserWithAvatar>
      {renderProfileMenu}
    </S.SidebarWrapper>
  );
}

export default Sidebar;
