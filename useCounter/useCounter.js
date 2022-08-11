import { useState } from "react"


export const useCounter = (initValue = 10) => {

    const [counter, setCounter] = useState( initValue);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if(counter >=1)
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return {
        counter,
        increment,
        reset,
        decrement,
    }
}
