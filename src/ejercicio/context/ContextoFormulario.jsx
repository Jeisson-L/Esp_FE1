import { createContext, useContext, useReducer } from "react";

export const ContextFormulario = createContext(undefined);

const initialState = {
    entrenador:null,
    pokemon:null,
}

/**
 * @typedef {object} entrenador
 * @property {string} apellido
 * @property {string} email
 * @property {string} nombre
 */
/**
 * @typedef {object} pokemon
 * @property {string} nombrePokemon
 * @property {string} tipoPokemon
 * @property {string} alturaPokemon
 * @property {string} edadPokemon
 */

/**
 * @typedef {object} character
 * @property {entrenador | undefined} entrenador
 * @property {pokemon | undefined} pokemon
 */

/**
 * @typedef {object} action
 * @property {string} type
 * @property {entrenador|pokemon} payload
 */

/**
 * 
 * @param {character} state 
 * @param {action} action 
 * @returns {character}
 */
const formReducer = (state, action) =>{
    switch (action.type){
        case 'ACTUALIZAR_ENTRENADOR':
            return {
                ...state,
                entrenador: { ...state.entrenador, ...action.payload}
            }
        case 'ACTUALIZAR_POKEMON':
            return {
                ...state,
                pokemon: {...state.pokemon, ...action.payload}
            }
        default:
            break;
    }
}

export const Formularioprovider = ({children}) =>{
    const [store, dispatch] = useReducer(formReducer, initialState);

    return (
        <ContextFormulario.Provider value={[store, dispatch]}>
            {children}
        </ContextFormulario.Provider>
    )
}

export const useStore = () => useContext(ContextFormulario)[0]
export const useDispatch = () => useContext(ContextFormulario)[1]