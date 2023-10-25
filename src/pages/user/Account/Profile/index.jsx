import { Col, Input, Row } from "antd";
import * as S from "./style";
import { useState } from "react";
import { useOutlet } from "react-router-dom";

function Profile() {
  const { avatar, setAvatar } = useOutlet();
  const [email, setEmail] = useState("Ngovantri2912@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0377460815");
  const atIndex = email.indexOf("@");

  return (
    <S.ProfileWrapper>
      <S.Heading>
        <S.SubHeading>Hồ sơ của tôi</S.SubHeading>
      </S.Heading>
      <S.Profile gutter={[16, 16]}>
        <Col xs={4} md={4}></Col>
        <S.Left xs={12} md={12}>
          <S.InfoUser>
            <S.Label>Tên đăng nhập:</S.Label>
            <S.Value>Ngovantri2912</S.Value>
          </S.InfoUser>
          <S.InfoUser>
            <S.Label>Gmail:</S.Label>
            <S.Value>
              {email.replace(
                /^(.{2}).*?(@.*)$/,
                (match, visiblePart, domainPart) =>
                  `${visiblePart}${"*".repeat(atIndex - 2)}${domainPart}`
              )}
            </S.Value>
            <S.Changs>Thay đổi</S.Changs>
          </S.InfoUser>
          <S.InfoUser>
            <S.Label>SDT:</S.Label>
            <S.Value>{phoneNumber.replace(/\d(?=\d{2})/g, "*")}</S.Value>
            <S.Changs>Thay đổi</S.Changs>
          </S.InfoUser>
        </S.Left>
        <S.Right xs={6} md={6}>
          <S.AvatarWrapper>
            {/* <S.Avatar src={avatar}></S.Avatar> */}
          </S.AvatarWrapper>
          <Input type="file" />
        </S.Right>
      </S.Profile>
    </S.ProfileWrapper>
  );
}

export default Profile;
