import * as S from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "constants/routes";
function Sidebar({ isShowSidebar }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const renderSidebar = [
    {
      label: "Biểu đồ sản phẩm",
      path: ROUTES.ADMIN.DASHBOARD,
    },
    {
      label: "Quản lý sản phẩm",
      path: ROUTES.ADMIN.PRODUCT_MANAGER,
    },
    {
      label: "Quản lý đơn hàng",
      path: ROUTES.ADMIN.ORDER_MANAGER,
    },
    {
      label: "Quản lý tài khoản",
      path: ROUTES.ADMIN.ACCOUNT_MANAGER,
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
