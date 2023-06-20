import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getSearchName} from '../../redux/actions';
import style from './SearchBar.module.css';
import charLoad from '../../assets/charGirando.gif';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [load, setLoad] = useState(false);
    // console.log(name)

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value)
        
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(name) {
            setLoad(true);
           await dispatch(getSearchName(name));
            setLoad(false);
            setName("")
        } else {
            alert("Ingrese un nombre valido");
        }
        
    }


    return(
    <div>
        {
            !load ? 
                <div>
                <input type='text' placeholder="Buscar..." value={name} onChange={handleInputChange} className={style.input} />
        <button type="submit" onClick={handleSubmit} className={style.boton}> Buscar </button>
        </div> : (
            <div className={style.contenedorSearch}>
                <img src={charLoad} alt="search" />
                <h2>Searching...</h2>
            </div>
        )
        }
        
    </div>


)}

export default SearchBar;