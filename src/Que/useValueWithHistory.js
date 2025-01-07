import { useDebugValue, useState } from "react";

export const useValueWithHistory = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  const [history, setHistory] = useState([value]);
  const [findIndex, setFindIndex] = useState(history.length - 1);

  const handleSetValue = (current) => {
    const num = parseInt(current);
    setValue(num);
    setHistory((prev) => [...prev, num]);
    setFindIndex(history.length);
  };
  useDebugValue(history)

  const commanFunction = (data) =>{
        setFindIndex(data);
        setValue(history[data]);
  }

  const goBack = () => {
      const data = findIndex - 1;
      if (findIndex > 0) {
        commanFunction(data);
    } else {
      setFindIndex(0);
      setValue(history[0]);
    }
    console.log("goBack", value);
    
  };
  const goForward = () => {
    const data = findIndex + 1;
    if (findIndex !== history.length-1) {
        commanFunction(data);
    } else {
      setFindIndex(history.length-1);
      setValue(history[history.length - 1]);
    }
    console.log("goForward", value);
  };
  return [value, handleSetValue, goBack, goForward, history, findIndex];
};
