import React from 'react'
import { useState } from 'react';

const State3 = () => {
    const arr=[
        {
            firstname:"uday",
            lastname:"Narashiha",
            age:"18",
        },
        {
            firstname:"prasad",
            lastname:"Bommalatodu pilla baccha",
            age:17,
        },
    ];
    const [data,setdata]=useState(arr);
    console.log(data);
  return (
    <div>
        <ul>
            {data.map((eachItem,index)=>{
                const{firstname,lastname,age}=eachItem;
                return(
                    <li key={index}>
                        <div>my first name: <strong>{firstname}</strong></div>
                        <div>my last name : <strong>{lastname}</strong></div>
                        <div>my age :<strong>{age}</strong></div>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}
export default State3