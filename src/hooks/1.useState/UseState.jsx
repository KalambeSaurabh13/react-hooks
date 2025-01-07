import { useState } from "react";
import ButtonUi from "../../Ui/Button";

export default function UseState() {
  //useState function takes an initial value as an argument and returns an
  //array containing two elements: the current state, and a state update function.
  
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Use State : </h1>
      <p>
        useState function takes an initial value as an argument and returns an
        array containing two elements: the current state, and a state update
        function.
      </p>
      <div>{count}</div>
      <ButtonUi clickEvent={() => setCount(count - 1)} variant={"outline-danger"}>Decrease</ButtonUi>
      <ButtonUi clickEvent={() => setCount(count + 1)} variant={"outline-primary"}>Increase</ButtonUi> 
    </>
  );
}
