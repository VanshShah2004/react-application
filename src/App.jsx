import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx'

function App() {
  const list = <List />;
  return (
    <>
    {list}
    </>
  )
}

export default App
