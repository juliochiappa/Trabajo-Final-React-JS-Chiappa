import { useState } from "react"

export const useCount = (initial = 1) => {
    const [count, setCount] = useState (initial)

    const increment = () => {
        setCount (count + 1)
    };

    const decrement = () => {
        if (count > 0){
            setCount (count - 1);
        }
    };

    const reset = () => {
        setCount (initial);
    };

    return{
        count,
        increment,
        decrement,
        reset,
    }
}