import { GET_POKEMON, FILTER_BY_ATTACK, FILTER_BY_TYPES, SORT_BY_CREATED, SORT_ORDER, SEARCH_NAME, CREATE_POKEMON, GET_TYPES, GET_DETAIL, DELETE_POKE, CLEAR_DETAIL } from "./actions";



const initialState = {
  allPokemons : [],
  copyPokemons : [],
  detail: [],
  types: []
}


const rootReducer = (state = initialState , action) => {
  switch(action.type){
    case GET_POKEMON: 
    return{
        ...state, 
        allPokemons: action.payload,
        copyPokemons: action.payload
    }

    case GET_TYPES:
        return{
            ...state,
        types: action.payload
        };

    case GET_DETAIL:
        return{
            ...state,
            detail: action.payload
        }

    case SEARCH_NAME:
        return{
            ...state,
            allPokemons: action.payload
        }

    case CREATE_POKEMON:
        return{
            ...state
        }

    case FILTER_BY_ATTACK:
        let attackFilter = [...state.allPokemons];
        attackFilter = attackFilter.sort((a, b) => {
          if (a.attack < b.attack) {
            return action.payload === "Mayor fuerza" ? 1 : -1;
          }
          if (a.attack > b.attack) {
            return action.payload === "Mayor fuerza" ? -1 : 1;
          }
          return 0;
        });
        return {
          ...state,
          allPokemons:
            action.payload === "Fuerza" ? state.copyPokemons : attackFilter
        }
        
    case FILTER_BY_TYPES:
        const allType = [...state.copyPokemons];
        const typesFilter = action.payload === 'tipo' ? allType : allType.filter(te => te.types?.includes(action.payload))
        return{
            ...state, 
            allPokemons: typesFilter,
        }
    case SORT_BY_CREATED:
        const pokes = [...state.copyPokemons]
        const createdFilter = action.payload === "Creados"
          ? pokes.filter((e) => e.id.length > 2)
          : pokes.filter((e) => e.id <= 120);
      return {
        ...state,
        allPokemons: action.payload === "Todos" ? state.copyPokemons : createdFilter,
      }
    case SORT_ORDER:
        let orderedCharacters = [...state.allPokemons];
        orderedCharacters = orderedCharacters.sort((a, b) => {
          if (a.name < b.name) {
            return action.payload === "asc" ? -1 : 1;
          }
          if (a.name > b.name) {
            return action.payload === "asc" ? 1 : -1;
          }
          return 0; 
        });
  
        return {
          ...state,
          allPokemons:
            action.payload === "filtro" ? state.copyPokemons : orderedCharacters
        };

    case DELETE_POKE:
            return{...state}
        
    case CLEAR_DETAIL:
            return {
                ...state,
                detail: []
            }
 
  default:
    return state;
}}

export default rootReducer;