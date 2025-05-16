import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";
import { useAppSelector } from "../../store/store";
// import { useUser } from "../../context/userContext";

export function PrivateRoute() {
  // const user = false;
  // const { isAuth } = useUser();
  const isAuth = useAppSelector((state) => state.user.isAuth);
  console.log("isAuth", isAuth);
  return isAuth ? <Outlet /> : <Navigate to={paths.SIGN_IN} />;
}
