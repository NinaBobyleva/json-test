import { Link } from "react-router-dom"
import { paths } from "../../paths";

export const NotFoundPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>NOT FOUND</h2>
            <Link to={paths.HOME}>Вернуться на главную страницу</Link>
        </div>
    );
}