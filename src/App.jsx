import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import UserGreeting from './UserGreeting.jsx';

function App() {

  return (
    <>
      <UserGreeting  isLoggedIn={true}/>
    </>
  )
}

export default App
