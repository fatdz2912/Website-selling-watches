import { ROUTES } from "constants/routes";
import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return <Navigate to={ROUTES.USER.HOME} />;
  } else {
    return (
      <div id="auth">
        <Outlet />
      </div>
    );
  }
}

export default AuthLayout;
