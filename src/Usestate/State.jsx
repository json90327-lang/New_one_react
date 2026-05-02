import React from 'react';
import { useState } from 'react';
import "./state.css"
const State = () => {
let [number,setnumber]=useState(0);
let increamnent=()=>{
    setnumber(number+1)
    // setnumber((prevnumber )=>{
    //      return prevnumber+1;
    // });
    // setnumber((prevnumber)=>{
    //     return prevnumber+1;
    // })
}
let decreament=()=>{
    setnumber(number-1)
    // setnumber((prevnumber)=>{
    //     return prevnumber-1
    // });
    // setnumber((prevnumber)=>{
    //     return prevnumber-1
    // })

}
  return (
    <div >
        <button className='button' onClick={decreament}>Minus</button>&nbsp;&nbsp;
        <span>{number}</span>&nbsp;&nbsp;
            <button className='button1' onClick={increamnent}>Plus</button>
        
        
    </div>
  )
}

export default State