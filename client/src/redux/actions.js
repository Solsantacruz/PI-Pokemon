import axios from "axios";
export const GET_POKEMON = "GET_POKEMON";
export const FILTER_BY_ATTACK = "FILTER_BY_ATTACK";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";
export const SORT_BY_CREATED = "SORT_BY_CREATED";
export const SORT_ORDER = "SORT_ORDER";
export const GET_TYPES = "GET_TYPES";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH_NAME = "SEARCH_NAME";
export const CREATE_POKEMON = "CREATE_POKEMON";
// export const DELETE_POKE = "DELETE_POKE";
export const CLEAR_DETAIL = "CLEAR_DETAIL";


export function getAllPokemon() {
        return async function(dispatch){
            try {
            const response = await axios.get("http://localhost:3001/pokemons")
            return dispatch({
                type: GET_POKEMON,
                payload: response.data
            })
    } catch (error) {
        throw Error(error.message)
    }
}}

export function filterByAttack(payload){
    return {
      type: FILTER_BY_ATTACK,
      payload
    }
}

export function filterByTypes(payload) {
    // console.log(payload)
    return {
        type: FILTER_BY_TYPES,
        payload
    }
}

export function sortByCreated(payload) {
    return {
        type: SORT_BY_CREATED,
        payload
    }
}

export function sortByOrderName (payload) {
    return {
        type: SORT_ORDER,
        payload,
    }
}

export function getSearchName (name) {
    return async function (dispatch){
        try{
        let response = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        const pokemon = response.data;
        return dispatch({
            type: SEARCH_NAME,
            payload: pokemon
        })
        } catch (error) {
            // console.log(error);
        alert(`Pokemon name not found`)
        }
}}

export function getById (id){
    // console.log(id)
    return async function (dispatch) {
        try{
        let response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type: GET_DETAIL,
            payload: response.data
        })

        }catch (error) {
        throw Error(error.message)
        }
    }
}

export function createPokemon (payload) {
    return async function (dispatch) {
            let response = await axios.post("http://localhost:3001/pokemons", payload)
            return dispatch({
                type: CREATE_POKEMON,
                payload: response
            })
}}

export function getTypes () {
    return async function (dispatch) {
        try {
        let response = await axios.get("http://localhost:3001/types", {

        })
        return dispatch({
            type: GET_TYPES,
            payload: response.data
        })
        } catch (error) {
          throw Error(error.message)
        }
}}

export function clearDetail(){
            return {
                type: CLEAR_DETAIL,
            }    
}