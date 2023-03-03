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