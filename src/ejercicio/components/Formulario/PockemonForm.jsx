import { useQuery } from "react-query";
import pikachu from "../../../assets/pikachu.png";
import { getPokemonTypes } from "../../accessToAPIs/getPokemonTypes";
import Input from "../Input/Input";
import Select from "../Input/Select";

const PockemonForm = () => {
    const { data, isLoading, isError } = useQuery(['pokemonTypes'], getPokemonTypes)
    const types = data?.results || []

    return (
        <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" />
              <Input name="alturaPokemon" label="Altura" />
              <Select name="tipoPokemon" label="Tipo" arrayData={types} isEntrenador={false} disabled = {isLoading || isError }/>
              <Input name="edadPokemon" label="Edad" />
            </div>
    )
}

export default PockemonForm