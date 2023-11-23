import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./conponents/Header";
import Footer from "./conponents/Footer";

import { hiddenSearchSuggestion } from "redux/slicers/searchSuggestion.slice";
import * as S from "./style";
import { useDispatch } from "react-redux";
function UserLayout() {
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);
  const dispatch = useDispatch();
  return (
    <S.LayoutWrapper onClick={() => dispatch(hiddenSearchSuggestion())}>
      <Header isHiddenMenu={isHiddenMenu} setIsHiddenMenu={setIsHiddenMenu} />
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
