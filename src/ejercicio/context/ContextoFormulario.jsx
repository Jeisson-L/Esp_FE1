import { createContext, useContext, useReducer } from "react";

export const ContextFormulario = createContext();

const initialState = {
    entrenador:null,
    pokemon:null,
}

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