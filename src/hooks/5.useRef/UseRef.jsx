import React, { useRef } from "react";

const UseRef = () => {
  // Refs (short for references) are a way to interact directly with DOM elements. 
  // They give you direct access to the JavaScript DOM object and its methods.
  const userName = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(userName.current.value, password.current.value);
  }
  
  
  return <>
     <h1>UseRef : </h1>
     <p>Refs (short for references) are a way to interact directly with DOM elements. </p>
     <p>They give you direct access to the JavaScript DOM object and its methods.</p>

     <div>
        <form onClick={handleSubmit}>
        <input type="text" id="userName" ref={userName} />
        <input type="password"  id="password" ref={password} />
        <button type="submit">Submit</button>
        </form>
     </div>
  </>;
};

export default UseRef;
