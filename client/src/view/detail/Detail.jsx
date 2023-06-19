import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById, deletePokemon, clearDetail} from "../../redux/actions";
import { useEffect } from "react";
import style from './Detail.module.css';
import imgPokeDex from '../../assets/pokedexNew.png';
import imgAsh from '../../assets/ashandpokedexNew.png';
import loading from '../../assets/loadingDetailNew.png';

const Detail = (props) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    let detalle = useSelector((state)=> state.detail)
//  const {name, image, life, attack, defense, speed, } = detalle;
    useEffect(()=>{
        dispatch(getById(id))
        return () =>{
            dispatch(clearDetail()) //Setea lo renderizado anteriormene para que se desmonte al volver de detail a home
        }
    }, [dispatch,id])

    function handleDelete(){
        dispatch(deletePokemon(id));
        navigate('/home')
    }
return(
    <div className={style.contenedorP}>
        <div className={style.ash}>
            <img src={imgAsh} alt="ash" />
        </div>
        <div className={style.contenedorPokeDex}>
        <button className={style.delete} onClick={handleDelete}> Back </button>
            <img src={imgPokeDex} alt="pokedex" className={style.imgPokedex}/>
            <div className={style.data}>
                <p className={style.pData}>Data: </p>
            </div>
            
        </div>
        <div>
        {detalle.length > 0 ?
        <div>
            <h1 className={style.namePoke}> {detalle[0].name}</h1>
            <img src={detalle[0].image} alt="poke" className={style.imgPoke}/>
            <p className={style.life}>Life: {detalle[0].life}</p>
            <p className={style.attack}>Attack: {detalle[0].attack}</p>
            <p className={style.defense}>Defense: {detalle[0].defense}</p>
            <p className={style.speed}>Speed: {detalle[0].speed}</p>
            <p className={style.height}>Height: {detalle[0].height}</p>
            <p className={style.weight}>Weight: {detalle[0].weight}</p>
        </div>
            :
            (<div>
                <img src={loading} alt="loading" className={style.loading}/>
                <h1 className={style.h1Loading}>Loading...</h1>
            </div>)
        }

        </div>
    </div>

)}

export default Detail;