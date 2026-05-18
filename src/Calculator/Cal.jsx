// import { useState } from 'react'

// const Cal = () => {

//     const [a, setA] = useState("")
//     const [b, setB] = useState("")
//     const [result, setResult] = useState(null)

//     const addNumbers = () => setResult(Number(a) + Number(b))
//     const subtractNumbers = () => setResult(Number(a) - Number(b))
//     const multiplyNumbers = () => setResult(Number(a) * Number(b))
//     const divideNumbers = () => {
//         if (Number(b) === 0) {
//             setResult('Cannot divide by 0')
//             return
//         }
//         setResult(Number(a) / Number(b))
//     }

//     return (
//         <>
//             <div>
//                 <input
//                     type="number"
//                     placeholder='enter number1'
//                     value={a}
//                     onChange={(e) => setA(e.target.value)}
//                 />

//                 <input
//                     type="number"
//                     placeholder='enter number2'
//                     value={b}
//                     onChange={(e) => setB(e.target.value)}
//                 />
//             </div>

//             <div>
//                 <button onClick={addNumbers}>Add</button>
//                 <button onClick={subtractNumbers}>Subtract</button>
//                 <button onClick={multiplyNumbers}>Multiply</button>
//                 <button onClick={divideNumbers}>Divide</button>
//             </div>

//             <h1>Result : {result}</h1>
//         </>
//     )
// }

// export default Cal


import React, {  useState } from 'react'

const Cal = () => {
    const [a,setA]= useState("")
    const [b,setB]= useState("")
    const [result,setResult]= useState("")
    const Addnumbers=()=> setResult(Number(a) + Number(b))
    const Subtract=()=> setResult(Number(a)-Number(b))
    const Multiple=()=> setResult(Number(a) * Number(b))
    const Divisible=()=>{
        if (Number(b) === 0){
        setResult("Cannot divisible with Zero")
    }
    setResult(Number(a)/Number(b))
        
    }
  return (
    <>
    <div>
        <input type="Number" placeholder='enter number1' value={a} onChange={(e)=>setA(e.target.value)}/>
        <input type="NUmber" placeholder='enter number2' value={b} onChange={(e)=>setB(e.target.value)}/>
    </div>
    <div>
        <button>Add</button>
        <button>Subtract</button>
        <button>Multiply</button>
        <button>Divide</button>
    </div>
    </>
  )
}

export default Cal