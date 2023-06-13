import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById, deletePokemon, clearDetail} from "../../redux/actions";
import { useEffect } from "react";
import NotFoundPage from "../loading/NotFoundPage";

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
    <div>
        <div>
        {detalle.length > 0 ?
        <div>
            <h2>Hola mi nombre es </h2><h1> {detalle[0].name}</h1>
            <img src={detalle[0].image} alt="poke"></img>
            <p>Life: {detalle[0].life}</p>
            <p>Attack: {detalle[0].attack}</p>
            <p>Defense: {detalle[0].defense}</p>
            <p>Speed: {detalle[0].speed}</p>
            <p>Height: {detalle[0].height}</p>
            <p>Weight: {detalle[0].weight}</p>
            <button className="delete" onClick={handleDelete}>Delete Pokemon</button>
        </div>
            :
            (<h1>Loading</h1>)
        
        }
        </div>
    </div>

)}

export default Detail;