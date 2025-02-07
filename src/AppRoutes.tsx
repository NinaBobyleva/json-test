import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={paths.HOME} element={<MainPage />} />
            <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
    );
}