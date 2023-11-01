import { ROUTES } from "constants/routes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AdminLayout() {
  const { userInfo } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && userInfo.loading) {
    return "loading...";
  } else {
    if (userInfo.data.role === "user") {
      return <Navigate to={ROUTES.USER.HOME} />;
    } else
      return (
        <div>
          <Outlet />
        </div>
      );
  }
}
export default AdminLayout;
