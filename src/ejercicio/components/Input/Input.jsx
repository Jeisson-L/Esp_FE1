import React from "react";
import { useDispatch } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types';

const Input = ({ name, label, type = "text", isEntrenador }) => {
  const dispatch = useDispatch()

  const onBlur = (e) => dispatch( {
    type: isEntrenador ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
    payload: {[e.target.name] : e.target.value}
  });

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  isEntrenador: PropTypes.bool.isRequired
}
