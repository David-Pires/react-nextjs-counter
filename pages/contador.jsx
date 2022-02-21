import { useState } from "react";

export default function contador() {
  const [numero, setNumero] = useState(0);

  const decrement = () => setNumero(numero--);

  {
    /* 
    const increment = 

  */
  }

  return (
    <div>
      <h1>Contador</h1>
      <div>Valores: {numero}</div>
      <button onClick={decrement}>-</button>
      {/*This is another exemple*/}
      <button onClick={() => setNumero(numero++)}>+</button>
    </div>
  );
}

// import { useState } from 'react';

// export default function () {
//   const [numero, setNumero] = useState(0)
//   function increment() {
//     setNumero(numero++)
//   }
//   function decrement() {
//     setNumero(numero--)
//   }

//   return (
//     <div>
//       <h1>Contador</h1>
//       <div>Valores : {numero}</div>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }

//----------------------------------------------
// const decrement = () => setNumero(numero--)

// const increment = () => setNumero(numero++)
//-----------------------------------------------
