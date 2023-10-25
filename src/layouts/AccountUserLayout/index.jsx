import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../UserLayout/conponents/Header";
import SignIn from "../UserLayout/conponents/SignIn";
import Footer from "../UserLayout/conponents/Footer";
import Sidebar from "./components/Sidebar";
import * as S from "./style";
import avatarDefault from "layouts/AccountUserLayout/components/Sidebar/avatar.jpg";

function AccountUserLayout() {
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);
  const [isShowSignIn, setIsShowSignIn] = useState(false);
  const [avatar, setAvatar] = useState(avatarDefault);
  return (
    <S.LayoutWrapper>
      <SignIn isShowSignIn={isShowSignIn} setIsShowSignIn={setIsShowSignIn} />
      <Header
        setIsShowSignIn={setIsShowSignIn}
        isHiddenMenu={isHiddenMenu}
        setIsHiddenMenu={setIsHiddenMenu}
      />
      <S.MainWrapper gutter={[16, 16]} justify={"center"}>
        <Sidebar avatar={avatar} setAvatar={setAvatar} />
        <S.MainContainer xs={14} md={16} xl={20}>
          <Outlet avatar={avatar} setAvatar={setAvatar} />
        </S.MainContainer>
      </S.MainWrapper>
      <Footer />
    </S.LayoutWrapper>
  );
}

export default AccountUserLayout;
