import { Cards } from '../Cards/Cards';
import './main.scss';

export const Main = ({setIsOpenModalDelete}: {setIsOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return <Cards setIsOpenModalDelete={setIsOpenModalDelete} />;
}