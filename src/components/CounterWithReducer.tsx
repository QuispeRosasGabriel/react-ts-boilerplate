import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        counter: 0,
        changes: 0,
        previous: 0,
      };
    case "increaseBy":
        return {
            ...state,
            changes: state.changes + 1,
            counter: state.counter + action.payload.value,
            previous: state.counter
        }
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [{counter}, dispatch] = useReducer(counterReducer, initialState);

  const onReset = () => dispatch({type: 'reset' });

  const increaseBy = (value: number) => dispatch({type: 'increaseBy', payload: {value} })

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <button onClick={onReset}>Reset</button>
      <button onClick={() => increaseBy(1)}>Increase</button>
    </>
  );
};

export default CounterWithReducer;
