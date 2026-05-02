import React, { useState } from 'react';

const Counter = () => {
     const [count,setshow]=useState(30);

     let addhandler = () =>{
      setshow(count + 5)
     }
  return (
    <div> 
      <h1>Value:{count}</h1>
    <button onClick={addhandler}>Add</button>
    <button onClick={()=>setshow(count-2)}>Sub</button>
    </div>
  )
}

export default Counter