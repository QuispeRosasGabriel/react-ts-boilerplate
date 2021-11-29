import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

const CounterEffect = () => {
    const [counter, setCounter] = useState<number>(5);
    const counterHTML = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        console.log(
            "%cSe llego al valor maximo",
            "color: red; background-color: black;"
        );

        const timeline = gsap.timeline();
        timeline.to(counterHTML.current, { y: -10, duration: 0.2, ease: "ease.out" })
        timeline.to(counterHTML.current, { y: 0, duration: 1, ease: "bounce.out" })

    }, [counter]);

    const handleClick = () =>
        setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));

    return (
        <>
            <h1>Counter</h1>
            <h2 ref={counterHTML}>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    );
};

export default CounterEffect;
