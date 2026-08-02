// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Hero from './components/Hero/Hero'
// import Navbar from './components/Navbar/Navbar'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar />
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";

function App() {
  const searchData = [];

  return (
    <>
      <Navbar searchData={searchData} />
      {/* <Hero /> */}
    </>
  );
}

export default App;