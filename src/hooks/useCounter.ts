import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";


const useCounter = (maxValue: number, arg2?: boolean) => {
  const [counter, setCounter] = useState<number>(5);
  const counterHTML = useRef<HTMLHeadingElement>(null);
  const timeLine = useRef(gsap.timeline());

  useLayoutEffect(() => {
    console.log(
      "%cSe llego al valor maximo",
      "color: red; background-color: black;"
    );

    timeLine.current.to(counterHTML.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    });
    timeLine.current.to(counterHTML.current, { y: 0, duration: 1, ease: "bounce.out" })
    .pause();
  }, []);

  useEffect(() => {
      timeLine.current.play(0);
  }, [counter])

  const handleClick = () =>
    setCounter((prev) => Math.min(prev + 1, maxValue));

  return {
      counter,
      handleClick,
      counterHTML
  };
};

export default useCounter;
