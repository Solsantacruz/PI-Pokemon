import {Link} from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useLocation } from "react-router-dom";
import style from './Nav.module.css';


const Nav = () => {

    const location = useLocation();

    return(
        <nav className={style.contenedor}>
            <div>
                {location.pathname !== '/home' && <Link to='/home' className={style.links}> Home </Link>}
                {location.pathname !== '/about' && <Link to='/about' className={style.links}> About </Link>}
                {location.pathname !== '/pokemons' && <Link to='/pokemons' className={style.links}> Crear personajes </Link>}
            </div>
            {location.pathname === '/home' && <SearchBar />}
        </nav>
    )
}

export default Nav;