"use client";
import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [bar, setBar] = useState(false);
  const btn = useRef("");

  const HandleClick = () => {
    setBar(!bar);
  };
  return (
    <>
      <button onClick={HandleClick} type="submit">
        show
      </button>
      <div >
       if ("open"? "open" : "close") {
        
       }
      </div>
    </>
  );
};

export default Home;
