import  { useEffect } from "react";

function Effect() {

  useEffect(() => {
    alert("Welcome Uday");
  }, []);
  const uday = ()=>{
    useEffect
  }

  return (
    <h1 onClick={uday}>Hello React</h1>
  );
}

export default Effect;
