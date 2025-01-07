import React, { useEffect, useState } from "react";

const UseEffect = () => {
//   1. The useEffect hook is used to implement side effects in a component.

// 2. useEffect takes two arguments: a function that performs side effects and a dependency array
//3. To implement componentDidMount(), pass an empty dependency array</p>
//4. To implement componentDidUpdate(), pass dependencies to run the useEffect if one of those dependencies changes
//5. For componentWillUnmount(), return a callback function from useEffect containing the cleanup code




  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(); // Call the function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <h1>UseEffect :</h1>
      <p>
        {" "}
        1. The useEffect hook is used to implement side effects in a component.
      </p>
      <p>
        2. useEffect takes two arguments: a function that performs side effects
        and a dependency array
      </p>
      <p>3. To implement componentDidMount(), pass an empty dependency array</p>
      <p>
        4. To implement componentDidUpdate(), pass dependencies to run the
        useEffect if one of those dependencies changes
      </p>
      <p>
        5. For componentWillUnmount(), return a callback function from useEffect
        containing the cleanup code
      </p>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default UseEffect;
