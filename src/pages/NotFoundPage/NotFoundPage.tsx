import { Link } from "react-router-dom"
import { paths } from "../../paths";
import "./notFoundPage.scss";

export const NotFoundPage = () => {
    return (
        <div className="found">
            <h1 className="found__title">404</h1>
            <h2 className="found__subtitle">NOT FOUND</h2>
            <Link className="found__link" to={paths.HOME}>Вернуться на главную страницу</Link>
        </div>
    );
}