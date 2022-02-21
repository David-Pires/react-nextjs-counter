import { useState } from 'react';

export default function contador() {
  const [numero, setNumero] = useState(0)
  function decrement() {
    setNumero(numero--)
  }
  function increment() {
    setNumero(numero++)
  }
  return (
    <div>
      <h1>Contador</h1>
      <div>Valores: {numero}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
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
