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


import React, { useState } from 'react'
import "./Cal.css"

const Cal = () => {

  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [result, setResult] = useState("")

  const Addnumbers = () => setResult(Number(a) + Number(b))
  const Subtract = () => setResult(Number(a) - Number(b))
  const Multiple = () => setResult(Number(a) * Number(b))

  const Divisible = () => {
    if (Number(b) === 0) {
      setResult("Cannot divide with zero")
      return
    }

    setResult(Number(a) / Number(b))
  }

  return (
    <div className="container">

      <div className="card">

        <div className="inputs">
          <input
            type="number"
            placeholder='Enter Number 1'
            value={a}
            onChange={(e) => setA(e.target.value)}
            className='input'
          />

          <input
            type="number"
            placeholder='Enter Number 2'
            value={b}
            onChange={(e) => setB(e.target.value)}
            className='input'
          />
        </div>

        <div className="btn-container">

          <button onClick={Addnumbers} className='btn'>
            Add
          </button>

          <button onClick={Subtract} className='btn1'>
            Subtract
          </button>

          <button onClick={Multiple} className='btn2'>
            Multiply
          </button>

          <button onClick={Divisible} className='btn3 '>
            Divide
          </button>

        </div>

        <h1 className='result'>
          Result: <span>{result}</span>
        </h1>

      </div>

    </div>
  )
}

export default Cal