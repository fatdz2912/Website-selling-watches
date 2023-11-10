import { Col } from "antd";
import * as S from "./style";
import { FaUserNurse, FaClipboardList } from "react-icons/fa";
function Sidebar() {
  return (
    <S.SidebarWrapper xs={10} md={8} xl={4}>
      <S.UserWithAvatar>
        <S.AvatarWrapper>
          <S.Avatar src="http://localhost:3000/static/media/avatar.c3977b10f8422357ca38.jpg"></S.Avatar>
        </S.AvatarWrapper>
        <S.Username>Ngovantri2912</S.Username>
      </S.UserWithAvatar>
      <S.MyAccountWrapper>
        <FaUserNurse size={25}></FaUserNurse>
        <S.MyAccount>Tài khoản của tôi</S.MyAccount>
      </S.MyAccountWrapper>
      <S.InformationAccount>
        <S.Profile>Hồ Sơ</S.Profile>
        <S.Address>Địa chỉ</S.Address>
        <S.Password>Đổi Mật Khẩu</S.Password>
      </S.InformationAccount>
      <S.OrderWrapper>
        <FaClipboardList size={25}></FaClipboardList>
        <S.Order>Đơn hàng</S.Order>
      </S.OrderWrapper>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
