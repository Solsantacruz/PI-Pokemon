import React from 'react';
import { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemon,filterByAttack, filterByTypes, sortByCreated, sortByOrderName } from '../../redux/actions';
import Card from '../../componentes/card/Card';
import Paginado from '../../componentes/paginado/Paginado';


const Home = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.allPokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokePage] = useState(12);
    const indexOfLastPoke = currentPage * pokePage;
    const indexFirstPoke = indexOfLastPoke - pokePage;
    const currentPoke = pokemons.slice(indexFirstPoke,indexOfLastPoke)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getAllPokemon())
    },[dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getAllPokemon());
    }

    function handleFilterAttack(e) {
        dispatch(filterByAttack(e.target.value));
      }

    function handleFilterType(e) {
        dispatch(filterByTypes(e.target.value));
    }

    function handleSortCreated(e) {
        dispatch(sortByCreated(e.target.value))
    }

    function handleSortName(e) {
        dispatch(sortByOrderName(e.target.value))
    }


    return( 
        <div>
            
            <button onClick={e=>{handleClick(e)}}> Volver a cargar los personajes </button>
        <div>
        <select onChange={handleSortName}>
            <option value="filtro"> A-Z:</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
          <select name="selects" onChange={e=>{handleFilterAttack(e)}}>
            <option value="Fuerza"> Fuerza </option>
            <option value="Mayor fuerza">Mayor fuerza</option>
            <option value="Menor fuerza">Menor fuerza</option>
          </select>
          <select onChange={handleFilterType}>
            <option value="tipo"> Tipo </option>
            <option value="normal"> Normal </option>
            <option value="flying"> Flying </option>
            <option value="poison"> Poison </option>
            <option value="ground"> Ground </option>
            <option value="bug"> Bug </option>
            <option value="fire"> Fire </option>
            <option value="water"> Water </option>
            <option value="grass"> Grass </option>
            <option value="electric"> Electric </option>
            <option value="fairy"> Fairy </option>
          </select>
          <select onChange={handleSortCreated}>
            <option value="Todos"> Todos </option>
            <option value="Creados"> Creados </option>
            <option value="Existentes"> Existentes </option>
          </select>
         <div>
            <Paginado 
            pokePage={pokePage}
            pokemons={pokemons.length}
            paginado={paginado}
            />


            {currentPoke?.map((poke)=>{
                // console.log(poke)
                return(
                <Card 
                key={poke.id} 
                id={poke.id}
                name={poke.name}  
                image={poke.image}
                types={poke.types}/>
                );
            })
            }
            </div>
        </div>
    </div>


)}

export default Home;