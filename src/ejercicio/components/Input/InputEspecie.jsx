// @ts-nocheck
import React, { useState, useContext } from "react";
import { useDispatch } from "../../context/ContextoFormulario";
import { getEspecies } from "../../accessToAPIs/api";
import { useQuery } from "react-query";


const InputEspecie = ({ name, label }) => {
    let [options, setOptions] = useState(undefined);
    const { data } = useQuery(['pokemonEspecies',options], () => getEspecies(options),{
        keepPreviousData: true
      });
    const especies = data?.results || [];
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const dispatch = useDispatch()
    
    const elegirEspecie = (e, nombreEspecie) => {
        e.preventDefault();

        dispatch({
            type: "ACTUALIZAR_POKEMON",
            payload: {["especiePokemon"] : nombreEspecie}
        });
        setMostrarPopup(false);
    };

    const renderizarEspecies = () => (
        <>
        {
        especies.map((especie) => (
            <button
            key={especie.name}
            className="botones-especie"
            onClick={(e) => elegirEspecie(e, especie.name)}
            >
            {especie.name}
            </button>
        ))}
        </>
    );
    
    const onSiguiente = () => {
        console.log(data.next);
        setOptions(data.next)
      }
    const onAnterior = () => {
        setOptions(data.previous)
    }
    return (
        <div className="input-contenedor">
        {mostrarPopup && (
            <div className="popup-especie">
            <h4>Seleccionar especie</h4>
            <div className="contenedor-especies">{renderizarEspecies()}</div>
            <div className="paginador">
                <button className="boton-anterior" onClick={onAnterior} disabled={!data?.previous}>Anterior</button>
                <button className="boton-siguiente" onClick={onSiguiente} disabled={!data?.next}>Siguiente</button>
            </div>
            </div>
        )}
        <p htmlFor={name}>{label}</p>
        <button
            className="boton-seleccionar-especies"
            onClick={() => setMostrarPopup(true)}
        >
            Seleccionar
        </button>
        </div>
    );
};

export default InputEspecie;