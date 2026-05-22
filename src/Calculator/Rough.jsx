// let count = 0;

// function add() {
//   count++;
//   console.log(count);
// }
// import
// const [count, setCount] = useState(0);

// function add() {
//   setCount(count + 1);
// }
// import React, { useState } from "react";

// function Rough() {
//   const [count, setCount] = useState(0);

//   const add = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Counter : {count}</h1>

//       <button onClick={add}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default Rough;

// import React, { useEffect } from "react";

// function App() {

//   useEffect(() => {
//     <div>uday</div>;
//   }, []);

//   return <h1>Hello React</h1>;
// }

// export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default App;