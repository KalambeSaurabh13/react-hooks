import React, { useEffect, useRef, useState } from "react";
import { useValueWithHistory } from "./useValueWithHistory";

const Rakuten = () => {
  const myRef = useRef(null);

  const [value, handleSetValue,goBack,goForward,history,findIndex] =
    useValueWithHistory(10);

  console.log(
    "currentValue :",
    value,
    "history:",
    history,
    "index:",
    findIndex
  );

  return (
    <div>
      Rakuten
      <input type="number" ref={myRef} />
      <br />
      <h1>{value}</h1>
      <button onClick={() => handleSetValue(myRef.current.value)}>Push</button>
      <button onClick={goBack}>GoBack</button>
      <button onClick={goForward}>GoForward</button>
    </div>
  );
};

export default Rakuten;
