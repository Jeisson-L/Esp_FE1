import { useContext } from "react"
import { DisplayContext } from "../context/displayContext"

const Contador = () => {
  const {display, setDisplay} = useContext(DisplayContext)

  return (
    <>
      <span className='nameDisplay'>{display}</span>
      <div className='containerButtons'>
        <button onClick={() => setDisplay(display - 5)}> -5 </button>
        <button onClick={() => setDisplay(display - 1)}> -1 </button>
        <button onClick={() => setDisplay(0)}> Reset </button>
        <button onClick={() => setDisplay(display + 1)}> +1 </button>
        <button onClick={() => setDisplay(display + 5 )}> +5 </button>
      </div>
    </>
  )
}
export default Contador