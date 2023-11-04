import * as S from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "constants/routes";
function Sidebar({ isShowSidebar }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const renderSidebar = [
    {
      label: "Quản lý sản phẩm",
      path: ROUTES.ADMIN.PRODUCT_LIST,
    },
    {
      label: "Quản lý người dùng",
      path: ROUTES.ADMIN.USER_LIST,
    },
  ];
  return (
    <S.SidebarWrapper isShowSidebar={isShowSidebar}>
      {renderSidebar.map((item, index) => (
        <S.SidebarItem
          key={index}
          onClick={() => navigate(item.path)}
          active={item.path === pathname}
        >
          {item.label}
        </S.SidebarItem>
      ))}
    </S.SidebarWrapper>
  );
}

export default Sidebar;
