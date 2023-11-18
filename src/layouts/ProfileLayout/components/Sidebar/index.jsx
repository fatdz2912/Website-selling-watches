import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

import { PROFILE_MENU } from "layouts/ProfileLayout/constant";

import * as S from "./style";
import { convertImageToBase64 } from "utils/files";

import { changeAvatarRequest } from "redux/slicers/auth.slice";
import { FaCamera } from "react-icons/fa";

function Sidebar() {
  const { userInfo } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
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

  const handleChangeAvatar = async (e) => {
    const file = e.target.files[0];
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      return notification.error({ message: "File không đúng định dạng" });
    }
    const imgBase64 = await convertImageToBase64(file);
    await dispatch(
      changeAvatarRequest({ id: userInfo.data.id, avatar: imgBase64 })
    );
  };
  return (
    <S.SidebarWrapper xs={24} sm={8} md={7} xl={5}>
      <S.AvatarWrapper>
        <S.Avatar src={userInfo?.data?.avatar}></S.Avatar>
        <S.AvatarEdit>
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => handleChangeAvatar(e)}
          />
          <label for="imageUpload">
            <FaCamera size={14} />
          </label>
        </S.AvatarEdit>
      </S.AvatarWrapper>
      <S.Username>{userInfo.data.fullName}</S.Username>
      {renderProfileMenu}
    </S.SidebarWrapper>
  );
}

export default Sidebar;
