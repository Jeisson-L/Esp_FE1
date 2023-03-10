import { useDispatch } from "../../context/ContextoFormulario";

const Select = ({name, label, arrayData, isEntrenador, disabled}) =>{
    arrayData.some(val => val.name === "") || arrayData.unshift({name:""});

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
            <select name={name} onChange={onChange} disabled={disabled}  >
                {getOptions()}
            </select>
        </div>
    );

};

export default Select;