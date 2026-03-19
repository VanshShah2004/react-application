import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ClickButton from './ClickButton.jsx';

import './App.css';
function App() {
  const [count,setCount]=useState(0);
  return (
    <>
      <ClickButton count={count} setCount={setCount} />
      <p>You clicked the button : {count} times</p>
    </>
  )
}
export default App;
