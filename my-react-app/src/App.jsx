import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */


function AboutPage() {
  return (
    <>
      <p>Hello there! How do you do?</p>
    </>
  );
}

// -----shopping list-----
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
function ShoppingList() {
  const listItems = products.map( (product) => { 
    return (
      <li key = {product.id}
          style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
          }}>
        {product.title}
      </li>
    )
  });

  return(
    <ul>{listItems}</ul>
  ); 
}

function MyButton({ count, onClick }) {

  return (
    <>
      <button onClick = {onClick}className='click-here-button'>You clicked {count} times</button>
    </>
  );
}


export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClicks() {
    setCount(count + 1);
  }

  return (
    <>
      <ShoppingList />
      <AboutPage />
      <p>To learn react</p>
      <MyButton count={count} onClick={handleClicks} />
      <MyButton count={count} onClick={handleClicks} />
    </>
  );
}