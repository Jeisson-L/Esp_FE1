import entrenador from "../../../assets/entrenador.png";
import Input from "../Input/Input";

const EntrenadorForm = () =>{
    return (
        <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" isEntrenador={true}/>
              <Input name="apellido" label="Apellido" isEntrenador={true}/>
              <Input name="email" label="Email" type="email" isEntrenador={true}/>
            </div>
    )
}

export default EntrenadorForm