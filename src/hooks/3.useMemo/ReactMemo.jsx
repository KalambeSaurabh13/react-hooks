import React,{useEffect, useState} from "react";
import Count from "./Count";

const ReactMemo = () => {
  const [count,setCount] = useState(0);
  return (
    <>
      <h1>ReactMemo</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
<Count/>

    </>
  );
};

export default ReactMemo;
