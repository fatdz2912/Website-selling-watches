import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../UserLayout/conponents/Header";
import Footer from "../UserLayout/conponents/Footer";
import Sidebar from "./components/Sidebar";
import * as S from "./style";

function AccountUserLayout() {
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);
  const [avatar, setAvatar] = useState("");
  return (
    <S.LayoutWrapper>
      <Header isHiddenMenu={isHiddenMenu} setIsHiddenMenu={setIsHiddenMenu} />
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
