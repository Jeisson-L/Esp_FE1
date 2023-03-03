import { useRef } from "react";
import { useMutation } from "react-query";
import { createEntrenador, createPokemon } from "../../accessToAPIs/api";
import { useStore } from "../../context/ContextoFormulario";

const Detalle = () => {
  const messageRef = useRef(null)
  const store = useStore()

  const { mutate:mutate1, isLoading:isLoading1, isSuccess:isSuccess1, isError:isError1 } = useMutation(createEntrenador)
  const { mutate:mutate2, isLoading:isLoading2, isSuccess:isSuccess2, isError:isError2 } = useMutation(createPokemon)

  const submitForm = () => {
    mutate1(store.entrenador)
    mutate2(store.pokemon)
  }

  if (messageRef.current){
    messageRef.current.innerHTML  = `<h5>${isLoading1 || isLoading2 ? "Cargando Registro" : isError1 || isError2 ? "Error al cargar Registro" : isSuccess1 || isSuccess2 ? "Registro Creado" : ""}</h5>`
    setTimeout(function(){
      messageRef.current.innerHTML = '<h5></h5>'
    }, 10000);
  }


  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
        <div ref={messageRef}><h5>{""}</h5></div>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {store.entrenador?.nombre}</p>
          <p>Apellido: {store.entrenador?.apellido}</p>
          <p>Email: {store.entrenador?.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{store.pokemon?.nombrePokemon}</p>
        </div>
        <div className="fila">
          <p>Altura:{store.pokemon?.alturaPokemon}</p>
        </div>
        <div className="fila">
          <p>Tipo:{store.pokemon?.tipoPokemon}</p>
        </div>
        <div className="fila">
          <p>edad:{store.pokemon?.edadPokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={submitForm}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
