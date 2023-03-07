import axios from "axios";

const API = "http://localhost:4000"

export const createEntrenador = async (entrenador) => {
    const { data } = await axios.post(`${API}/entrenadores`, entrenador);
    return data;
};

export const createPokemon = async (pokemones) => {
    const { data } = await axios.post(`${API}/pokemones`, pokemones);
    return data;
};

export const getEspecies = async (options) => {
    const res = await fetch(options || 'https://pokeapi.co/api/v2/pokemon-species/?')

    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    
    return res.json()
};