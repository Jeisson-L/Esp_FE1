import { useDispatch } from "../../context/ContextoFormulario";

const Select = ({name, label, arrayData, isEntrenador}) =>{

    const getOptions = ()=>{
        return arrayData.map((val) => { return (<option value={val.name} key={val.name}>{val.name}</option>)})
    }

    const dispatch = useDispatch()

    const onChange = (e) => dispatch( {
        type: isEntrenador ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
        payload: {[e.target.name] : e.target.value}
      });

    return (
    
        <div className="input-contenedor">
            <label htmlFor={name}>{label}</label>
            <select name={name} onChange={onChange}>
                {getOptions()}
            </select>
        </div>
    );

};

export default Select;