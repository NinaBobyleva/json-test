import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { EditPage } from "./pages/EditPage/EditPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<MainPage />}>
        <Route path={paths.EDIT} element={<EditPage />} />
      </Route>

      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
