import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {
    
    const { counter, counterHTML, handleClick } = useCounter(10, false);

    return (
        <>
            <h1>Counter</h1>
            <h2 ref={counterHTML}>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    );
};

export default CounterWithCustomHook;
