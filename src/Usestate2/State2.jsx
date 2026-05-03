import React from 'react'
import { useState } from 'react'
import "./State2.css"
const State2 = () => {
  const object={
    firstName:"uday",
    lastName:"Narashimha",
    age:18,
    color:"green",
    color2:"green",
    color3:"green",
  };   
  const [data,setdata]=useState(object);
  const changeFirstName=()=>{
    setdata({
        ...data,
        firstName:"prasad",
        color:"red"

    })
  };
  const changeLastName=()=>{
    setdata({
        ...data,
        lastName:"Bommalata",
        color2:"red"
    })
  };
  const changeage=()=>{
    setdata({
        ...data,
        age:"17",
        color3:"red"
    })
  }
  return (
    <div className='div'>
        <h1 className='h1'>My FirstName is{"  "} <span style={{color:data.color}}>{data.firstName}</span></h1>
        <button className='button1' onClick={changeFirstName}>ChangeFirstName</button>
        <h1 className='h2'>My LastName is{"  "}<span style={{color:data.color2}}> {data.lastName}</span></h1>
        <button className='button2'onClick={changeLastName}>ChangeLastName</button>
        <h1 className='h3'>My age is{"  "}<span style={{color:data.color3}}>{data.age}</span></h1>
        <button className='button3' onClick={changeage}>ChangeAge</button>
    </div>
  )
}

export default State2