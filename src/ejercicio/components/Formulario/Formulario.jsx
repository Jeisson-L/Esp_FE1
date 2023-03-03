import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../../assets/pokebola.png";
import Detalle from "./Detalle";
import EntrenadorForm from "./EntrenadorForm";
import PockemonForm from "./PockemonForm";


const Formulario = () => {
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <div className="inputs">
            <EntrenadorForm></EntrenadorForm>
            <PockemonForm></PockemonForm>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
