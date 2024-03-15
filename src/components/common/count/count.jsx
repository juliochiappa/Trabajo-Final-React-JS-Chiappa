import { useCount } from "../../Hooks/useCount"
import "./count.css"

export const Count = ( ) => {
    
    const {count, increment, decrement, reset} = useCount (0)

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>-</button>
            <button className="addToCart">Agregar al carrito</button>
        </div>
    )
    
}