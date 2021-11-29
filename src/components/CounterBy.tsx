import React, { useState } from "react";

interface CounterByProps {
    initialValue?: number
}

interface CounterState {
    counter: number,
    clicks: number
}

const CounterBy: React.FC<CounterByProps> = ({initialValue = 0}) => {

    const [{clicks, counter}, setCounter] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });

    const handleClick = (value: number) => {
        setCounter((prev) => ({
            counter: prev.counter + value ,
            clicks: prev.clicks + 1
        }));
    }

    return (
        <>
         <h1>Counter: {counter} - Clicks: {clicks}</h1>  
         <button onClick={() => handleClick(1)}>
             +1
         </button>
         <button onClick={() => handleClick(5)}>
             +5
         </button>
        </>
    )
}

export default CounterBy
