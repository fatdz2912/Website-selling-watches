import { Button, DatePicker, Input, Radio } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

function Profile() {
  // const { avatar, setAvatar } = useOutlet();
  const { userInfo } = useSelector((state) => state.auth);
  const [phoneNumber, setPhoneNumber] = useState("0377460815");
  const atIndex = userInfo?.data?.email.indexOf("@");

  useEffect(() => {
    document.title = "User Information Page";
  }, []);
  return (
    <S.UserInfoWrapper>
      <S.Heading>
        <S.SubHeading>Hồ sơ của tôi</S.SubHeading>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </S.Heading>
      <S.Profile gutter={[16, 16]}>
        <S.Left xs={24} md={18} sm={24} lg={18}>
          <S.InfoUser>
            <S.Label>Gmail:</S.Label>
            <S.Value>
              {userInfo?.data?.email.replace(
                /^(.{2}).*?(@.*)$/,
                (match, visiblePart, domainPart) =>
                  `${visiblePart}${"*".repeat(atIndex - 2)}${domainPart}`
              )}
            </S.Value>
          </S.InfoUser>
          <S.InfoUser>
            <S.Label>SDT:</S.Label>
            <S.Value>{phoneNumber.replace(/\d(?=\d{2})/g, "*")}</S.Value>
            <S.Changs>Thay đổi</S.Changs>
          </S.InfoUser>
          <S.InfoUser>
            <S.Label>Giới tính:</S.Label>
            <Radio.Group>
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
              <Radio value={3}>Khác</Radio>
            </Radio.Group>
          </S.InfoUser>
          <S.InfoUser>
            <S.Label>Ngày Sinh:</S.Label>
            <S.Value>
              <DatePicker placeholder="Chọn ngày Sinh" />
            </S.Value>
          </S.InfoUser>
          <S.InfoUser>
            <S.Label></S.Label>
            <Button type="primary">Lưu</Button>
          </S.InfoUser>
        </S.Left>
        <S.Right xs={24} md={6} sm={24} lg={6}>
          <S.AvatarWrapper>
            {/* <S.Avatar src={avatar}></S.Avatar> */}
          </S.AvatarWrapper>
          <Input type="file" />
        </S.Right>
      </S.Profile>
    </S.UserInfoWrapper>
  );
}

export default Profile;
