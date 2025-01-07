import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  //useLayoutEffect is a React Hook similar to useEffect, but it fires synchronously after all DOM mutations.
  // This makes it useful for situations where you need to measure or mutate the DOM
  // and ensure that updates are applied before the browser repaints.



  //useLayoutEffect, runs synchronously after a render but before the screen is updated.
  //useEffect, runs asynchronously and after a render is painted to the screen.


  const divRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  }, []);
  return (
    <>
      <h1>UseLayoutEffect</h1>

      <div>
        <div
          ref={divRef}
          style={{ width: "50%", backgroundColor: "lightblue" }}
        >
          Resize the window!
        </div>
        <p>The width of the above div is: {width}px</p>
      </div>
    </>
  );
};

export default UseLayoutEffect;
