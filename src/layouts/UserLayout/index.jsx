import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./conponents/Header";
import SignIn from "./conponents/SignIn";
import Footer from "./conponents/Footer";
import * as S from "./style";
function UserLayout() {
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);
  const [isShowSignIn, setIsShowSignIn] = useState(false);
  return (
    <S.LayoutWrapper>
      <SignIn isShowSignIn={isShowSignIn} setIsShowSignIn={setIsShowSignIn} />
      <Header
        setIsShowSignIn={setIsShowSignIn}
        isHiddenMenu={isHiddenMenu}
        setIsHiddenMenu={setIsHiddenMenu}
      />
      <S.MainWrapper>
        <S.MainContainer>
          <Outlet />
        </S.MainContainer>
      </S.MainWrapper>
      <Footer />
    </S.LayoutWrapper>
  );
}

export default UserLayout;
