import { ROUTES } from "constants/routes";
import { Navigate, Outlet } from "react-router-dom";

import * as S from "./style";

function AuthLayout() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return <Navigate to={ROUTES.USER.HOME} />;
  } else {
    return (
      <>
        <div>
          <S.TopRight></S.TopRight>
        </div>
        <div id="auth">
          <Outlet />
        </div>
        <S.BottomLeft></S.BottomLeft>
      </>
    );
  }
}

export default AuthLayout;
