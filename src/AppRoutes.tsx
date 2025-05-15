import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { EditPage } from "./pages/EditPage/EditPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { SigninPage } from "./pages/SigninPage/SigninPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={paths.HOME} element={<MainPage />}>
          <Route path={paths.EDIT} element={<EditPage />} />
        </Route>
      </Route>

      <Route path={paths.SIGN_IN} element={<SigninPage />} />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
