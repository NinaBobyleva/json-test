import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";

export function PrivateRoute() {
  const user = false;
  return user ? <Outlet /> : <Navigate to={paths.SIGN_IN} />;
}