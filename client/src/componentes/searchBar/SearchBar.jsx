import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getSearchName} from '../../redux/actions';
import style from './SearchBar.module.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    // console.log(name)

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value)
        
    }

    function handleSubmit(e){
        dispatch(getSearchName(name));
        setName("")
    }


    return(
    <div>
        <input type='text' placeholder="Buscar..." value={name} onChange={handleInputChange} className={style.input} />
        <button type="submit" onClick={handleSubmit} className={style.boton}> Buscar </button>
    </div>


)}

export default SearchBar;