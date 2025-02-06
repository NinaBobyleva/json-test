import { Cards } from '../Cards/Cards';
import './main.scss';

export const Main = () => {
    return (
        <div className="wrapper">
            <h1 className="title">Sessions</h1>
            <Cards />
        </div>
    );
}